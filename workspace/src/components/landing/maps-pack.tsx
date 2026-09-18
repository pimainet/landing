import { useState } from "react";
import { MapPin, Navigation, Phone, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Place = {
  name: string;
  rating: number;
  reviews: number;
  meta: string;
  you?: boolean;
};

const BEFORE: Place[] = [
  { name: "Sen Spa Quận 1", rating: 4.8, reviews: 312, meta: "Mở cửa · 1.2 km" },
  { name: "Hồng Nhung Beauty", rating: 4.7, reviews: 188, meta: "Mở cửa · 0.8 km" },
  { name: "An Khang Clinic", rating: 4.5, reviews: 97, meta: "Đóng cửa · 1.6 km" },
];

const AFTER: Place[] = [
  {
    name: "Cửa hàng của bạn",
    rating: 4.9,
    reviews: 86,
    meta: "Mở cửa · 0.4 km",
    you: true,
  },
  { name: "Sen Spa Quận 1", rating: 4.8, reviews: 312, meta: "Mở cửa · 1.2 km" },
  { name: "Hồng Nhung Beauty", rating: 4.7, reviews: 188, meta: "Mở cửa · 0.8 km" },
];

function MiniMap({ after }: { after: boolean }) {
  return (
    <div className="relative h-full min-h-36 overflow-hidden bg-accent-soft">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-6 left-4 h-16 w-24 rounded-sm bg-surface-2" />
        <div className="absolute top-10 right-6 h-20 w-16 rounded-sm bg-surface-2" />
        <div className="absolute bottom-8 left-10 h-14 w-28 rounded-sm bg-surface-2" />
        <div className="absolute top-1/2 left-0 h-1 w-full bg-bg-warm" />
        <div className="absolute top-0 left-1/3 h-full w-1 bg-bg-warm" />
        <div className="absolute top-0 left-2/3 h-full w-px bg-border" />
      </div>
      <MapPin
        className={cn(
          "absolute size-7 drop-shadow-sm transition-all duration-500",
          after ? "top-1/3 left-1/2 -translate-x-1/2 text-accent" : "top-2/3 left-2/3 text-muted",
        )}
        fill="currentColor"
        strokeWidth={1.5}
      />
    </div>
  );
}

function Listing({ place, index }: { place: Place; index: number }) {
  return (
    <div
      className={cn(
        "flex gap-3 border-b border-border px-3 py-3 last:border-b-0",
        place.you && "bg-accent-soft/60",
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full font-mono text-xs",
          place.you ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted",
        )}
      >
        {index + 1}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <p className={cn("truncate text-sm font-medium", place.you && "text-accent")}>
            {place.name}
          </p>
          {place.you && (
            <span className="shrink-0 text-xs font-medium text-accent">Bạn</span>
          )}
        </div>
        <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted">
          <Star className="size-3 fill-accent text-accent" />
          <span className="tabular-nums text-fg">{place.rating}</span>
          <span className="tabular-nums">({place.reviews})</span>
          <span>· {place.meta}</span>
        </div>
        <div className="mt-2 flex gap-3 text-muted">
          <span className="inline-flex items-center gap-1 text-xs">
            <Phone className="size-3" /> Gọi
          </span>
          <span className="inline-flex items-center gap-1 text-xs">
            <Navigation className="size-3" /> Chỉ đường
          </span>
        </div>
      </div>
    </div>
  );
}

export function MapsPack() {
  const [after, setAfter] = useState(false);
  const list = after ? AFTER : BEFORE;

  return (
    <div className="overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-lift)]">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <p className="text-xs font-medium text-muted">3 cửa hàng Google hiện lên</p>
        <div className="flex rounded-md bg-bg-warm p-1">
          <button
            type="button"
            onClick={() => setAfter(false)}
            className={cn(
              "rounded-sm px-3 py-1.5 text-xs font-medium transition-colors duration-150",
              !after ? "bg-fg text-bg" : "text-muted hover:text-fg",
            )}
          >
            Bây giờ
          </button>
          <button
            type="button"
            onClick={() => setAfter(true)}
            className={cn(
              "rounded-sm px-3 py-1.5 text-xs font-medium transition-colors duration-150",
              after ? "bg-accent text-accent-fg" : "text-muted hover:text-fg",
            )}
          >
            Sau 2 tháng
          </button>
        </div>
      </div>
      <div className="border-b border-border bg-bg px-4 py-3">
        <div className="flex h-10 items-center rounded-md border border-border bg-surface px-3 text-sm text-muted">
          spa gần tôi · Quận 1
        </div>
      </div>
      <div className="grid sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <MiniMap after={after} />
        <div>
          {list.map((place, i) => (
            <Listing key={place.name} place={place} index={i} />
          ))}
          <p
            className={cn(
              "px-4 py-3 text-xs",
              after ? "text-accent" : "text-danger",
            )}
          >
            {after
              ? "Khách bấm Gọi và Chỉ đường — vào tên bạn trước."
              : "Cửa hàng bạn không nằm trong 3 tên này."}
          </p>
        </div>
      </div>
    </div>
  );
}
