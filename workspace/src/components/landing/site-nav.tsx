import { Logo } from "@/components/landing/logo";
import { Button } from "@/components/ui/button";
import { appLoginUrl } from "@/lib/app-origin";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#van-de" className="hover:text-fg">
            Đang xảy ra
          </a>
          <a href="#os" className="hover:text-fg">
            Bảng làm việc
          </a>
          <a href="#cach-lam" className="hover:text-fg">
            Cách làm
          </a>
          <a href="#goi" className="hover:text-fg">
            Gói SEO Maps
          </a>
          <a href="#chan-doan" className="hover:text-fg">
            Xem Maps
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <a href={appLoginUrl()} target="_blank" rel="noreferrer">
              Đăng nhập OS
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="#chan-doan">Xem Maps miễn phí</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
