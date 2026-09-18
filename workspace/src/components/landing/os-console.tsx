import { Check, CircleAlert, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const TASKS = [
  { label: "Đăng 1 bài trên hồ sơ Google", done: true },
  { label: "Trả lời 4 đánh giá mới", done: true },
  { label: "Thêm 8 ảnh chụp tại cửa hàng", done: false },
  { label: "Khớp tên, địa chỉ, SĐT trên 12 trang", done: false },
];

const CELLS = [
  22, 31, 44, 58, 71, 63, 48, 29, 18, 35, 52, 77, 81, 64, 41, 26, 39, 55, 69, 84, 76, 60, 42, 28,
];

function heat(n: number) {
  if (n >= 75) return "bg-accent";
  if (n >= 55) return "bg-accent/70";
  if (n >= 40) return "bg-accent/40";
  return "bg-console-line";
}

export function OsConsole() {
  return (
    <div className="overflow-hidden rounded-2xl border border-console-line bg-console text-console-fg shadow-[var(--shadow-lift)]">
      <div className="flex items-center justify-between border-b border-console-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent" />
          <span className="text-xs text-console-muted">Bảng làm việc · đang chạy</span>
        </div>
        <span className="text-xs text-console-muted">maps.bgs.com.vn</span>
      </div>

      <div className="grid gap-px bg-console-line md:grid-cols-3">
        <div className="console-grid bg-console p-5">
          <p className="text-xs text-console-muted">Điểm hồ sơ</p>
          <p className="mt-3 font-display text-5xl tabular-nums tracking-tight">72</p>
          <p className="mt-1 text-sm text-console-muted">Tăng 18 điểm trong 30 ngày</p>
          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-console-line">
            <div className="h-full w-3/4 bg-accent" />
          </div>
        </div>

        <div className="bg-console p-5">
          <p className="text-xs text-console-muted">Hạng quanh cửa hàng</p>
          <div className="mt-4 grid grid-cols-8 gap-1">
            {CELLS.map((n, i) => (
              <div
                key={i}
                title={`${n}`}
                className={cn("aspect-square rounded-xs", heat(n))}
              />
            ))}
          </div>
          <p className="mt-3 text-xs text-console-muted">Trong bán kính 2 km · ô đậm = đang cao</p>
        </div>

        <div className="bg-console p-5">
          <p className="text-xs text-console-muted">Việc tuần này</p>
          <ul className="mt-4 space-y-2.5">
            {TASKS.map((t) => (
              <li key={t.label} className="flex items-start gap-2 text-sm">
                {t.done ? (
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                ) : (
                  <CircleAlert className="mt-0.5 size-4 shrink-0 text-console-muted" />
                )}
                <span className={t.done ? "text-console-muted line-through" : ""}>
                  {t.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-3 border-t border-console-line px-4 py-3 text-xs text-console-muted">
        <MapPin className="size-3.5 text-accent" />
        <span>Spa Quận 1 · đang Top 3 với 4 trên 7 từ khách hay tìm</span>
      </div>
    </div>
  );
}
