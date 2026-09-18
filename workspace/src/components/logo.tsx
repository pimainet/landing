import { cn } from "@/lib/utils";

export function LogoMark({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", inverted ? "text-paper" : "text-forest", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M16 7.5c-3.4 0-6.2 2.6-6.2 6.1 0 4.6 6.2 11 6.2 11s6.2-6.4 6.2-11c0-3.5-2.8-6.1-6.2-6.1zm0 8.4a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6z"
        className={inverted ? "fill-ink" : "fill-paper"}
      />
    </svg>
  );
}

export function Logo({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark inverted={inverted} />
      <span
        className={cn(
          "font-display text-lg font-medium tracking-tight",
          inverted ? "text-paper" : "text-foreground",
        )}
      >
        Local Growth OS
      </span>
    </span>
  );
}
