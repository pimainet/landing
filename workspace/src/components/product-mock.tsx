import { SAMPLE_AUDIT, scoreLabel } from "@/lib/sample-audit";
import { Badge } from "@/components/ui/badge";

export function ProductMock() {
  const { score, clientName, category, issues, lastPostDays } = SAMPLE_AUDIT;
  const top = issues.slice(0, 3);
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;

  return (
    <div className="rounded-xl bg-paper-2 p-1 shadow-[var(--shadow-lift)]">
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Audit GBP</p>
            <p className="font-medium text-foreground">{clientName}</p>
          </div>
          <Badge variant="muted">{category}</Badge>
        </div>
        <div className="grid gap-5 p-4 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="flex items-center gap-4">
            <div className="relative size-24">
              <svg viewBox="0 0 100 100" className="size-24">
                <circle
                  cx="50"
                  cy="50"
                  r={r}
                  fill="none"
                  stroke="currentColor"
                  className="text-muted"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r={r}
                  fill="none"
                  stroke="currentColor"
                  className="score-ring text-forest"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={c}
                  strokeDashoffset={offset}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-2xl font-medium tabular-nums leading-none">{score}</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">/100</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">{scoreLabel(score)}</p>
              <p className="text-xs text-muted-foreground">
                Bài đăng gần nhất: {lastPostDays} ngày trước
              </p>
            </div>
          </div>
          <ul className="grid gap-2">
            {top.map((issue) => (
              <li
                key={issue.id}
                className="flex items-start gap-2 rounded-md bg-muted/70 px-3 py-2"
              >
                <span
                  className={
                    issue.severity === "critical"
                      ? "mt-1.5 size-1.5 shrink-0 rounded-full bg-flag"
                      : "mt-1.5 size-1.5 shrink-0 rounded-full bg-warn"
                  }
                />
                <span className="text-sm leading-snug">{issue.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between border-t border-border bg-muted/40 px-4 py-2.5 text-xs text-muted-foreground">
          <span>Lộ trình 30 ngày · 13 việc</span>
          <span className="text-forest font-medium">Sẵn sàng triển khai</span>
        </div>
      </div>
    </div>
  );
}
