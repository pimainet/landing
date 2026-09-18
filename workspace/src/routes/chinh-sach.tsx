import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/chinh-sach")({ component: PrivacyPage });

function PrivacyPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <p className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Trang chủ
          </Link>
        </p>
        <h1 className="mt-4 font-display text-3xl font-medium tracking-tight">
          Chính sách bảo mật
        </h1>
        <div className="mt-8 grid gap-5 text-sm leading-relaxed text-muted-foreground">
          <p>
            Khi bạn tạo tài khoản thử, chúng tôi lưu tên, email và thông tin cửa hàng bạn
            nhập trên thiết bị của bạn để hiển thị workspace demo. Không cần thẻ tín dụng.
          </p>
          <p>
            Dữ liệu cửa hàng dùng để tạo audit và nội dung. Chúng tôi không bán thông tin
            này. Bạn có thể xóa dữ liệu thử bằng cách xóa dữ liệu trang trên trình duyệt.
          </p>
          <p>
            Trang này mô tả chính sách cho bản dùng thử. Khi kết nối Google Business Profile
            ở phiên bản đầy đủ, phạm vi quyền truy cập sẽ được nêu rõ trước khi bạn đồng ý.
          </p>
          <p>© 2026 Local Growth OS · maps.bgs.com.vn</p>
        </div>
      </article>
    </SiteShell>
  );
}
