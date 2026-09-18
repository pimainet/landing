import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Local Growth OS — Google Maps cho chủ doanh nghiệp
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span>© 2026</span>
          <Link to="/dieu-khoan" className="hover:text-foreground">
            Điều khoản
          </Link>
          <Link to="/chinh-sach" className="hover:text-foreground">
            Chính sách bảo mật
          </Link>
          <span>maps.bgs.com.vn</span>
        </div>
      </div>
    </footer>
  );
}
