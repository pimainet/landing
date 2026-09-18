import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Flag, MapPin, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTrial } from "@/components/trial-provider";
import { getTrial } from "@/lib/trial";
import {
  SAMPLE_AUDIT,
  SEVERITY_LABEL,
  scoreLabel,
  type Severity,
} from "@/lib/sample-audit";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/demo")({ component: DemoPage });

function DemoPage() {
  const { openTrial } = useTrial();
  const [clientName, setClientName] = useState(SAMPLE_AUDIT.clientName);
  const [mapsHint, setMapsHint] = useState(SAMPLE_AUDIT.mapsHint);
  const [hasTrial, setHasTrial] = useState(false);

  useEffect(() => {
    const trial = getTrial();
    if (trial?.clientName) setClientName(trial.clientName);
    if (trial?.mapsUrl) setMapsHint(trial.mapsUrl);
    if (trial?.email) setHasTrial(true);
  }, []);

  const audit = useMemo(
    () => ({ ...SAMPLE_AUDIT, clientName, mapsHint }),
    [clientName, mapsHint],
  );

  return (
    <SiteShell>
      {/* Activation banner */}
      <div className="border-b border-forest/20 bg-forest-soft">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-forest">
            {hasTrial
              ? "Đây là bản demo dựa trên thông tin bạn vừa nhập. Kết nối Google Business Profile thật để nhận audit chính xác."
              : "Bạn đang xem audit mẫu. Tạo tài khoản miễn phí để nhận audit + lộ trình riêng cho cửa hàng của bạn."}
          </p>
          <Button size="sm" onClick={openTrial} className="shrink-0">
            {hasTrial ? "Kết nối hồ sơ thật" : "Nhận audit của tôi"}
          </Button>
        </div>
      </div>

      <div className="border-b border-border bg-paper-2">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Về trang chủ
            </Link>
            <h1 className="mt-3 font-display text-3xl font-medium tracking-tight">
              {hasTrial ? `Audit cho ${clientName || "cửa hàng của bạn"}` : "Demo audit mẫu"}
            </h1>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">
              Audit, lộ trình 30 ngày và bài đăng đã qua bước Critic — dành cho chủ doanh nghiệp local.
            </p>
          </div>
          <Button onClick={openTrial} variant={hasTrial ? "outline" : "default"}>
            {hasTrial ? "Cập nhật thông tin" : "Dùng thử miễn phí"}
          </Button>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <AuditWorkspace audit={audit} />
      </div>
    </SiteShell>
  );
}

function AuditWorkspace({
  audit,
}: {
  audit: typeof SAMPLE_AUDIT & { mapsHint: string };
}) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const r = 46;
  const c = 2 * Math.PI * r;
  const offset = c - (audit.score / 100) * c;

  return (
    <div className="rounded-xl bg-card p-1 shadow-[var(--shadow-lift)]">
      <div className="rounded-lg border border-border bg-card">
        <div className="grid gap-6 border-b border-border p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:p-6">
          <div className="relative size-28">
            <svg viewBox="0 0 108 108" className="size-28">
              <circle
                cx="54"
                cy="54"
                r={r}
                fill="none"
                className="text-muted"
                stroke="currentColor"
                strokeWidth="8"
              />
              <circle
                cx="54"
                cy="54"
                r={r}
                fill="none"
                className="score-ring text-forest"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={c}
                strokeDashoffset={offset}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-3xl font-medium tabular-nums leading-none">
                {audit.score}
              </span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                /100
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-display text-2xl font-medium tracking-tight">
                {audit.clientName}
              </h2>
              <Badge variant="muted">{audit.category}</Badge>
              <Badge variant="warn">{scoreLabel(audit.score)}</Badge>
            </div>
            <p className="mt-2 flex items-start gap-1.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {audit.address}
            </p>
            {audit.mapsHint ? (
              <p className="mt-1 truncate text-xs text-muted-foreground">{audit.mapsHint}</p>
            ) : null}
            <dl className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Đánh giá</dt>
                <dd className="font-medium tabular-nums">
                  {audit.rating} · {audit.reviews}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Ảnh</dt>
                <dd className="font-medium tabular-nums">{audit.photos}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Bài đăng</dt>
                <dd className="font-medium">{audit.lastPostDays} ngày trước</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <Tabs defaultValue="issues">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="issues">Điểm yếu</TabsTrigger>
              <TabsTrigger value="plan">Lộ trình 30 ngày</TabsTrigger>
              <TabsTrigger value="posts">Bài đăng</TabsTrigger>
            </TabsList>
            <TabsContent value="issues">
              <ul className="grid gap-3">
                {audit.issues.map((issue) => (
                  <li
                    key={issue.id}
                    className="rounded-lg border border-border bg-paper-2 p-4 sm:p-5"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <SeverityDot severity={issue.severity} />
                      <Badge variant={severityBadge(issue.severity)}>
                        {SEVERITY_LABEL[issue.severity]}
                      </Badge>
                      <h3 className="font-medium">{issue.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {issue.detail}
                    </p>
                    <p className="mt-2 text-sm text-foreground">
                      Tác động: {issue.impact}
                    </p>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="plan">
              <div className="grid gap-5">
                {audit.weeks.map((week) => (
                  <section
                    key={week.week}
                    className="rounded-lg border border-border bg-paper-2 p-4 sm:p-5"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-medium">
                        {week.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">{week.focus}</p>
                    </div>
                    <ul className="mt-4 grid gap-2">
                      {week.tasks.map((task) => {
                        const isDone = done[task.id] ?? task.done;
                        return (
                          <li key={task.id}>
                            <button
                              type="button"
                              onClick={() =>
                                setDone((prev) => ({ ...prev, [task.id]: !isDone }))
                              }
                              className="flex w-full items-start gap-3 rounded-md px-2 py-2 text-left hover:bg-muted"
                            >
                              <span
                                className={cn(
                                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border",
                                  isDone
                                    ? "border-forest bg-forest text-paper"
                                    : "border-border bg-card",
                                )}
                              >
                                {isDone ? <Check className="size-3" /> : null}
                              </span>
                              <span
                                className={cn(
                                  "text-sm",
                                  isDone && "text-muted-foreground line-through",
                                )}
                              >
                                {task.title}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="posts">
              <ul className="grid gap-4">
                {audit.posts.map((post) => (
                  <li
                    key={post.id}
                    className="rounded-lg border border-border bg-paper-2 p-4 sm:p-5"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {post.critic === "pass" ? (
                        <Badge variant="ok">
                          <ShieldCheck className="mr-1 size-3" />
                          Critic: đạt
                        </Badge>
                      ) : (
                        <Badge variant="flag">
                          <Flag className="mr-1 size-3" />
                          Critic: giữ lại
                        </Badge>
                      )}
                      <h3 className="font-medium">{post.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed">{post.body}</p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {post.criticNote}
                    </p>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function SeverityDot({ severity }: { severity: Severity }) {
  return (
    <span
      className={cn(
        "size-2 rounded-full",
        severity === "critical" && "bg-flag",
        severity === "high" && "bg-warn",
        severity === "medium" && "bg-forest-mid",
        severity === "low" && "bg-muted-foreground",
      )}
    />
  );
}

function severityBadge(severity: Severity) {
  if (severity === "critical" || severity === "high") return "flag" as const;
  if (severity === "medium") return "warn" as const;
  return "muted" as const;
}
