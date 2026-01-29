interface Problem {
  frequency?: string;
  willingness_to_pay?: string;
}

export default function StatsBar({ problems }: { problems: Problem[] }) {
  const dailyCount = problems.filter((p) => p.frequency === "Daily").length;
  const highWtp = problems.filter(
    (p) => p.willingness_to_pay === "High"
  ).length;

  return (
    <div className="flex justify-center gap-8 p-4 mb-6 bg-card rounded-xl border border-border">
      <div className="text-center">
        <div className="text-2xl font-semibold text-[#ececec]">
          {problems.length}
        </div>
        <div className="text-xs text-[#6b6b6b] uppercase tracking-wide">
          Problems
        </div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-semibold text-[#ececec]">
          {dailyCount}
        </div>
        <div className="text-xs text-[#6b6b6b] uppercase tracking-wide">
          Daily
        </div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-semibold text-[#ececec]">
          {highWtp}
        </div>
        <div className="text-xs text-[#6b6b6b] uppercase tracking-wide">
          High WTP
        </div>
      </div>
    </div>
  );
}
