import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useTrial } from "@/components/trial-provider";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/#pain", label: "Vấn đề" },
  { href: "/#quy-trinh", label: "Quy trình" },
  { href: "/demo", label: "Demo audit" },
  { href: "/#faq", label: "Câu hỏi" },
];

export function SiteHeader({ inverted = false }: { inverted?: boolean }) {
  const { openTrial } = useTrial();
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-md",
        inverted
          ? "border-paper/10 bg-ink/80"
          : "border-border/70 bg-background/85",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="shrink-0" aria-label="Local Growth OS — trang chủ">
          <Logo inverted={inverted} />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  inverted
                    ? "text-paper/70 hover:text-paper"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm transition-colors",
                  inverted
                    ? "text-paper/70 hover:text-paper"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant={inverted ? "inverse" : "default"}
            className="hidden sm:inline-flex"
            onClick={openTrial}
          >
            Dùng thử miễn phí
          </Button>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant={inverted ? "ghost-inverse" : "ghost"}
                size="icon"
                className="md:hidden"
                aria-label="Mở menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-display text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1">
                {NAV.map((item) =>
                  item.href.startsWith("/#") ? (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-md px-3 py-3 text-sm hover:bg-muted"
                      onClick={() => setSheetOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="rounded-md px-3 py-3 text-sm hover:bg-muted"
                      onClick={() => setSheetOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>
              <Button
                className="mt-6 w-full"
                onClick={() => {
                  setSheetOpen(false);
                  openTrial();
                }}
              >
                Dùng thử miễn phí
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
