interface Problem {
  id: number;
  title: string;
  description: string;
  frequency: string;
  willingness_to_pay: string;
  created: string;
}

const wtpColors: Record<string, string> = {
  High: "bg-red-500/15 text-red-400",
  Medium: "bg-yellow-500/15 text-yellow-400",
  Low: "bg-gray-500/15 text-gray-400",
};

export default function ProblemCard({
  problem,
  onDelete,
}: {
  problem: Problem;
  onDelete: (id: number) => void;
}) {
  const wtp = problem.willingness_to_pay || "Low";

  return (
    <div className="animate-fade-in bg-card rounded-2xl p-5 px-6 mb-4 border border-border transition-all hover:border-[#4d4d4d] hover:bg-[#353535]">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-base font-semibold text-[#ececec] leading-snug flex-1">
          {problem.title}
        </h3>
        <div className="flex gap-2 ml-4">
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-xl uppercase tracking-wide bg-accent/15 text-accent">
            {problem.frequency}
          </span>
          <span
            className={`text-[11px] font-medium px-2.5 py-1 rounded-xl uppercase tracking-wide ${wtpColors[wtp] || wtpColors.Low}`}
          >
            WTP: {wtp}
          </span>
        </div>
      </div>
      <div className="text-sm text-[#b4b4b4] leading-relaxed mb-3 whitespace-pre-wrap">
        {problem.description || (
          <em className="text-[#6b6b6b]">No description provided</em>
        )}
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-border">
        <span className="text-xs text-[#6b6b6b]">
          Added {problem.created?.slice(0, 10)}
        </span>
        <button
          onClick={() => onDelete(problem.id)}
          className="bg-transparent border-none text-[#6b6b6b] cursor-pointer px-2 py-1 rounded-md text-xs transition-all hover:bg-red-500/10 hover:text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
