"use client";

import { useState, useEffect } from "react";
import { getSupabase } from "@/lib/supabase";
import StatsBar from "./StatsBar";
import ProblemCard from "./ProblemCard";
import ProblemForm from "./ProblemForm";
import EmptyState from "./EmptyState";

interface Problem {
  id: number;
  title: string;
  description: string;
  frequency: string;
  willingness_to_pay: string;
  created: string;
}

export default function ProblemTracker() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadProblems() {
    const { data, error } = await getSupabase()
      .from("problems")
      .select("*")
      .order("created", { ascending: false });
    if (error) {
      console.error("Load error:", error);
      alert(`Failed to load: ${error.message}`);
    }
    setProblems(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadProblems();
  }, []);

  async function handleAdd(input: {
    title: string;
    description: string;
    frequency: string;
    willingness_to_pay: string;
  }) {
    const { error } = await getSupabase().from("problems").insert(input);
    if (error) {
      console.error("Insert error:", error);
      alert(`Failed to add: ${error.message}`);
      return;
    }
    loadProblems();
  }

  async function handleDelete(id: number) {
    await getSupabase().from("problems").delete().eq("id", id);
    loadProblems();
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-bg border-b border-card flex items-center justify-center z-50">
        <div className="flex items-center gap-2 text-base font-medium text-[#ececec]">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              fill="#10a37f"
            />
          </svg>
          Problem Tracker
        </div>
      </div>

      {/* Content */}
      <div className="pt-[72px] pb-[280px] max-w-3xl mx-auto px-4">
        {loading ? (
          <div className="flex items-center justify-center min-h-[60vh] text-[#6b6b6b]">
            Loading...
          </div>
        ) : problems.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <StatsBar problems={problems} />
            <div className="flex items-center my-6 text-[#6b6b6b] text-xs uppercase tracking-widest before:flex-1 before:h-px before:bg-border before:mr-4 after:flex-1 after:h-px after:bg-border after:ml-4">
              Your Problems
            </div>
            {problems.map((p) => (
              <ProblemCard key={p.id} problem={p} onDelete={handleDelete} />
            ))}
          </>
        )}
      </div>

      <ProblemForm onAdd={handleAdd} />
    </div>
  );
}
