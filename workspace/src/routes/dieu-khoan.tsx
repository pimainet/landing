import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/dieu-khoan")({ component: TermsPage });

function TermsPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <p className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Trang chủ
          </Link>
        </p>
        <h1 className="mt-4 font-display text-3xl font-medium tracking-tight">Điều khoản</h1>
        <div className="mt-8 grid gap-5 text-sm leading-relaxed text-muted-foreground">
          <p>
            Local Growth OS cung cấp workspace để audit Google Business Profile, lập lộ trình
            và soạn nội dung. Việc dùng thử miễn phí không tạo hợp đồng dài hạn.
          </p>
          <p>
            Bạn chịu trách nhiệm về thông tin cửa hàng đưa vào hệ thống và nội dung bạn
            duyệt trước khi đăng lên Google. Bước Critic hỗ trợ kiểm tra độ trung thực nhưng
            không thay thế quyết định của chủ cửa hàng.
          </p>
          <p>
            Bạn có thể dừng sử dụng bất kỳ lúc nào. Chúng tôi có thể cập nhật điều khoản này;
            phiên bản hiện hành luôn được đăng tại trang này.
          </p>
          <p>© 2026 Local Growth OS · maps.bgs.com.vn</p>
        </div>
      </article>
    </SiteShell>
  );
}
