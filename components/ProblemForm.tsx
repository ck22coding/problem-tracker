"use client";

import { useState } from "react";

const frequencies = ["Rare", "Occasional", "Frequent", "Daily"] as const;
const wtpOptions = ["Low", "Medium", "High"] as const;

interface ProblemInput {
  title: string;
  description: string;
  frequency: string;
  willingness_to_pay: string;
}

export default function ProblemForm({
  onAdd,
}: {
  onAdd: (data: ProblemInput) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState<string>("Occasional");
  const [wtp, setWtp] = useState<string>("Medium");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      title: title.trim(),
      description: description.trim(),
      frequency,
      willingness_to_pay: wtp,
    });
    setTitle("");
    setDescription("");
    setFrequency("Occasional");
    setWtp("Medium");
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-b from-transparent to-bg pt-4 pb-6 px-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-5 transition-all focus-within:border-[#565656]"
      >
        <div className="flex gap-4 mb-3">
          <div className="flex-1">
            <label className="text-[11px] text-[#8e8e8e] font-medium uppercase tracking-wide mb-1 block">
              Frequency
            </label>
            <div className="flex gap-1">
              {frequencies.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFrequency(f)}
                  className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                    frequency === f
                      ? "bg-accent text-white"
                      : "bg-[#3d3d3d] text-[#9b9b9b] hover:bg-[#4d4d4d]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-[11px] text-[#8e8e8e] font-medium uppercase tracking-wide mb-1 block">
              Willingness to Pay
            </label>
            <div className="flex gap-1">
              {wtpOptions.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWtp(w)}
                  className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                    wtp === w
                      ? "bg-accent text-white"
                      : "bg-[#3d3d3d] text-[#9b9b9b] hover:bg-[#4d4d4d]"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What problem did you observe?"
          className="w-full bg-transparent border-none outline-none text-[#ececec] text-[15px] py-2 placeholder:text-[#8e8e8e]"
        />
        <div className="flex items-end gap-3">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief context or notes..."
            rows={1}
            className="flex-1 bg-transparent border-none outline-none text-[#ececec] text-sm py-1 resize-none placeholder:text-[#8e8e8e] min-h-[32px] max-h-[60px]"
          />
          <button
            type="submit"
            className="bg-accent hover:bg-accent-hover text-white border-none rounded-xl px-5 py-2 text-sm font-medium transition-all hover:-translate-y-px active:translate-y-0"
          >
            Add Problem
          </button>
        </div>
      </form>
    </div>
  );
}
