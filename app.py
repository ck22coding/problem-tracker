import streamlit as st
import json
from pathlib import Path
from datetime import datetime

DATA_FILE = Path("problems.json")


def load_problems():
    if DATA_FILE.exists():
        return json.loads(DATA_FILE.read_text())
    return []


def save_problems(problems):
    DATA_FILE.write_text(json.dumps(problems, indent=2))


st.title("Problem Tracker")

problems = load_problems()

# Add new problem
st.header("Add Problem")
with st.form("add_problem", clear_on_submit=True):
    title = st.text_input("Title")
    description = st.text_area("Description")
    frequency = st.select_slider(
        "Frequency",
        options=["Rare", "Occasional", "Frequent", "Daily"],
    )

    if st.form_submit_button("Add"):
        if title:
            problems.append({
                "title": title,
                "description": description,
                "frequency": frequency,
                "created": datetime.now().isoformat(),
            })
            save_problems(problems)
            st.rerun()
        else:
            st.error("Title is required")

# Show problems
st.header(f"Problems ({len(problems)})")
for i, p in enumerate(reversed(problems)):
    with st.expander(f"{p['title']} — {p['frequency']}"):
        st.write(p["description"] or "*No description*")
        st.caption(f"Added: {p['created'][:10]}")
