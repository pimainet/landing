import { cn } from "@/lib/utils";

export function Logo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <a
      href="#top"
      className={cn(
        "flex items-center gap-2.5",
        inverted ? "text-console-fg" : "text-fg",
      )}
      aria-label="Local Growth OS"
    >
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
        <circle
          cx="16"
          cy="16"
          r="15"
          fill="none"
          className={inverted ? "stroke-console-line" : "stroke-border"}
          strokeWidth="1.2"
        />
        <path
          d="M16 5.5c-4.6 0-8.3 3.5-8.3 8.4 0 5.6 8.3 14.2 8.3 14.2s8.3-8.6 8.3-14.2c0-4.9-3.7-8.4-8.3-8.4z"
          className="fill-accent"
        />
        <circle
          cx="16"
          cy="13.6"
          r="2.5"
          className={inverted ? "fill-console" : "fill-bg"}
        />
      </svg>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-sans text-xs font-medium uppercase tracking-widest",
              inverted ? "text-console-muted" : "text-muted",
            )}
          >
            BGS
          </span>
          <span className="font-display text-lg tracking-tight">
            Local Growth OS
          </span>
        </span>
      )}
    </a>
  );
}
