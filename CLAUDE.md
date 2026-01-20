# Problem Tracker

A problem tracking application designed to help identify and validate startup ideas by systematically cataloging problems worth solving.

## Purpose

This application helps entrepreneurs and innovators:
- Record problems they encounter or observe in daily life
- Categorize and tag problems by domain, severity, and frequency
- Track how many people experience each problem
- Evaluate market potential and solution feasibility
- Prioritize problems that could become viable startup opportunities

## Core Concepts

### Problem Entry
Each problem should capture:
- **Description**: Clear articulation of the pain point
- **Context**: Where/when the problem occurs
- **Affected Users**: Who experiences this problem
- **Frequency**: How often it occurs
- **Severity**: Impact level (minor annoyance to critical blocker)
- **Existing Solutions**: Current workarounds or competitors
- **Source**: How you discovered this problem (personal, interview, observation)

### Validation Signals
Track evidence that a problem is worth solving:
- Number of people who confirmed experiencing it
- Willingness to pay for a solution
- Time/money currently spent on workarounds
- Market size estimates

### Scoring & Prioritization
Problems are scored based on:
- Frequency x Severity = Pain Score
- Market size x Willingness to pay = Opportunity Score
- Technical feasibility x Your expertise = Execution Score

## Running the App

```bash
pip install streamlit
streamlit run app.py
```

## Files

- `app.py` - Streamlit application
- `problems.json` - Data storage (created on first save)

## Data Model

Each problem entry:
```json
{
  "title": "string",
  "description": "string",
  "frequency": "Rare | Occasional | Frequent | Daily",
  "created": "ISO timestamp"
}
```
