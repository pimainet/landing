import { Lock, MapPin, Sparkles } from "lucide-react";
import type { DemoAudit } from "@/lib/demo-audit";
import { APP_ORIGIN, appSignupUrl, ZALO_OA } from "@/lib/app-origin";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function barColor(score: number) {
  if (score >= 7) return "bg-emerald-500";
  if (score >= 5) return "bg-amber-500";
  return "bg-rose-500";
}

export function ProductAuditFrame({
  audit,
  contactName,
  phone,
}: {
  audit: DemoAudit;
  contactName: string;
  phone: string;
}) {
  const signup = appSignupUrl({
    business: audit.businessName,
    area: audit.area,
    maps: audit.mapsUrl,
    phone,
    name: contactName,
  });

  return (
    <div className="overflow-hidden rounded-2xl border border-[#d7e0e8] bg-[#f4f7f9] text-[#1d2a33] shadow-[0_12px_40px_-16px_rgba(18,48,64,0.28)]">
      <div className="flex items-center justify-between border-b border-[#d7e0e8] bg-white px-4 py-2.5">
        <div className="flex items-center gap-2 text-[13px] tracking-tight">
          <span className="grid size-6 place-items-center rounded-md bg-[#2d6f9a] text-white">
            <Sparkles className="size-3.5" />
          </span>
          <span>
            local growth <strong className="text-[#2d6f9a]">os</strong>
          </span>
          <span className="hidden text-[11px] text-[#7b8b96] sm:inline">
            · {APP_ORIGIN.replace(/^https?:\/\//, "")}
          </span>
        </div>
        <span className="rounded-full bg-[#e8f2f7] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#2d6f9a]">
          Bản xem trước khách
        </span>
      </div>

      <div className="grid md:grid-cols-[200px_minmax(0,1fr)]">
        <aside className="hidden border-r border-[#d7e0e8] bg-[#f3f6f8] p-3 md:block">
          <p className="px-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8a99a4]">
            Làm việc
          </p>
          {[
            "Tổng quan",
            "Khách hàng",
            "Audit GBP",
            "Lộ trình 30 ngày",
            "Nội dung",
            "Báo cáo",
          ].map((item, i) => (
            <div
              key={item}
              className={cn(
                "mt-1 rounded-lg px-2.5 py-2 text-[12px]",
                i === 2
                  ? "bg-[#2d6f9a14] font-semibold text-[#2d6f9a]"
                  : "text-[#6b7c88]",
              )}
            >
              {item}
              {i > 2 && <Lock className="ml-1 inline size-3 opacity-50" />}
            </div>
          ))}
        </aside>

        <div className="p-4 md:p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8a99a4]">
            Audit Google Business Profile
          </p>
          <div className="mt-1 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h3 className="text-[18px] font-extrabold tracking-tight">
                {audit.businessName}
              </h3>
              <p className="mt-0.5 flex items-center gap-1 text-[12px] text-[#6b7c88]">
                <MapPin className="size-3.5" />
                {audit.industryLabel} · {audit.area}
                {audit.mapsUrl ? " · đã gắn link Maps" : " · chưa có link Maps"}
              </p>
            </div>
            <span className="rounded-full bg-[#fff3dc] px-2 py-1 text-[10px] font-bold text-[#ab7513]">
              Độ khó khu vực: {audit.difficulty}
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)]">
            <div className="flex items-center gap-3 rounded-xl border border-[#d7e0e8] bg-white p-4">
              <div className="grid size-16 place-items-center rounded-full border-[5px] border-[#3db89a]">
                <div className="text-center leading-none">
                  <strong className="block text-[20px]">{audit.overall}</strong>
                  <span className="text-[9px] text-[#8a99a4]">/10</span>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#8a99a4]">
                  Điểm tổng quan
                </p>
                <p className="mt-1 max-w-[16rem] text-[12px] leading-snug text-[#5c6d78]">
                  {audit.overallNote}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-[#d7e0e8] bg-white p-4">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-[#8a99a4]">
                Điểm theo nhóm
              </p>
              <div className="space-y-2.5">
                {audit.groups.map((g) => (
                  <div key={g.key}>
                    <div className="mb-1 flex justify-between text-[11px]">
                      <span>{g.label}</span>
                      <strong className="text-[#2d6f9a]">{g.score}</strong>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#e8eef2]">
                      <div
                        className={cn("h-full rounded-full", barColor(g.score))}
                        style={{ width: `${g.score * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-[#d7e0e8] bg-white p-4">
              <p className="text-[12px] font-bold">Điểm mạnh</p>
              <ul className="mt-2 space-y-2 text-[12px] leading-relaxed text-[#5c6d78]">
                {audit.strengths.map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#d7e0e8] bg-white p-4">
              <p className="text-[12px] font-bold">Điểm yếu — ưu tiên Cao</p>
              <ul className="mt-2 space-y-2 text-[12px] leading-relaxed">
                {audit.weaknesses
                  .filter((w) => w.priority === "high")
                  .map((w) => (
                    <li key={w.text} className="flex gap-2">
                      <span className="mt-1 size-2 shrink-0 rounded-full bg-[#dc2626]" />
                      <span>{w.text}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-[#d7e0e8] bg-white p-4">
            <p className="text-[12px] font-bold">Việc cần làm ngay (7–14 ngày)</p>
            <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-[12px] leading-relaxed text-[#3a4a54]">
              {audit.actions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ol>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {audit.lockedHints.map((h) => (
              <div
                key={h.title}
                className="relative overflow-hidden rounded-xl border border-[#d7e0e8] bg-white p-4"
              >
                <div className="pointer-events-none select-none blur-[3px]">
                  <p className="text-[12px] font-bold">{h.title}</p>
                  <p className="mt-2 text-[11px] leading-relaxed text-[#6b7c88]">
                    {h.teaser}
                  </p>
                  <div className="mt-3 h-12 rounded-md bg-[#e8eef2]" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/55 backdrop-blur-[1px]">
                  <Lock className="size-4 text-[#2d6f9a]" />
                  <p className="mt-1 text-[11px] font-semibold text-[#2d6f9a]">
                    Mở trong bản đầy đủ
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-[#c5d9e6] bg-[#eef6fb] p-4">
            <p className="text-[13px] font-bold tracking-tight">
              Đủ để biết đang mất khách chỗ nào. Bản đầy đủ nằm trong Local Growth OS.
            </p>
            <p className="mt-1 text-[12px] text-[#5c6d78]">
              {contactName ? `${contactName} · ` : ""}
              Zalo {phone} nhận 3 việc sát hồ sơ trong 24 giờ. Không ép mua trên trang này.
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <Button size="lg" className="bg-[#2d6f9a] hover:bg-[#245c82]" asChild>
                <a href={ZALO_OA} target="_blank" rel="noreferrer">
                  Nhận 3 việc qua Zalo
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={signup} target="_blank" rel="noreferrer">
                  Mở bản đầy đủ trên maps.bgs.com.vn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
