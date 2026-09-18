import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Eye,
  MapPinned,
  Megaphone,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { Diagnosis } from "@/components/landing/diagnosis";
import { Logo } from "@/components/landing/logo";
import { MapsPack } from "@/components/landing/maps-pack";
import { OsConsole } from "@/components/landing/os-console";
import { SiteNav } from "@/components/landing/site-nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: Home });

const STATS = [
  { k: "42%", v: "người tìm chỗ gần đây bấm vào 3 cửa hàng hiện trên bản đồ" },
  { k: "76%", v: "người gõ “gần tôi” ghé cửa trong vòng 24 giờ" },
  { k: "3", v: "tên hiện lên. Ngoài ra khách gần như không thấy bạn" },
];

const PAINS = [
  {
    icon: Megaphone,
    title: "Bạn trả ads — đối thủ trên Maps lại hốt khách.",
    body: "Khách tìm xong mở bản đồ, bấm Top 3. Thường không phải bạn. Tiền quảng cáo đang nuôi quán bên cạnh.",
  },
  {
    icon: Eye,
    title: "Đã có hồ sơ Maps, vẫn ít người gọi.",
    body: "Chỉnh rồi, đăng rồi mà tín hiệu gọi / chỉ đường vẫn yếu. Vấn đề không chỉ là “có bài”, mà Maps chưa mang khách.",
  },
  {
    icon: MapPinned,
    title: "Khách đứng gần cửa — không thấy tên bạn.",
    body: "Không phải thiếu sản phẩm. Thiếu chỗ trong 3 tên họ nhìn trước khi chọn chỗ ghé.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Xem đang đứng đâu",
    body: "Trước khi bán gói gì: đọc hồ sơ, đối thủ quanh bạn, chỗ đang làm giảm gọi / chỉ đường — rồi mới nói cần làm gì.",
  },
  {
    n: "02",
    title: "Chỉ vài việc đáng làm trước",
    body: "Không làm 20 thứ một lúc. Chọn việc Google và khách thật sự phản ứng.",
  },
  {
    n: "03",
    title: "Làm đúng việc, có theo dõi",
    body: "Chỉnh hồ sơ, nội dung, đánh giá theo hướng ra tín hiệu — không đăng cho đủ số. Có việc nhắc từng tuần.",
  },
  {
    n: "04",
    title: "Giữ và đọc tín hiệu",
    body: "Cuối tuần xem: gọi / chỉ đường / hạng quanh cửa — tuần sau làm gì tiếp.",
  },
];

const COMPARE = [
  {
    name: "Tự làm",
    items: [
      "Rẻ, nhưng dễ bỏ dở giữa chừng",
      "Không biết đối thủ đang đứng đâu",
      "Google đổi, bạn không theo kịp",
    ],
  },
  {
    name: "SEO Maps cùng chúng tôi",
    featured: true,
    items: [
      "Xem hiện trạng trước — không bán gói mù",
      "Việc tuần rõ, tập trung việc làm ra gọi / chỉ đường",
      "Đo tín hiệu thật, không báo cáo “đã đăng X bài”",
    ],
  },
  {
    name: "Thuê bên ngoài",
    items: [
      "Báo cáo đẹp, bạn vẫn không chắc đang đứng đâu",
      "Phụ thuộc người chạy hộ",
      "Khó dừng, khó hiểu đang trả tiền cho gì",
    ],
  },
];

const INDUSTRIES = [
  "Nhà hàng, quán cafe, tiệm bánh",
  "Spa, nail, thẩm mỹ viện",
  "Nha khoa, phòng khám",
  "Nội thất, xây dựng, showroom",
  "Gara, rửa xe, phụ tùng",
  "Cửa hàng bán lẻ, thời trang",
  "Trung tâm, lớp học",
  "Mọi dịch vụ khách tìm “gần tôi” — kể cả tại Thanh Hóa",
];

const FAQS = [
  {
    q: "Chưa có website thì làm Maps được không?",
    a: "Được. Google xếp Maps chủ yếu dựa trên hồ sơ Google Business, đánh giá, và khoảng cách. Có website thì tốt thêm. Không có vẫn làm được.",
  },
  {
    q: "Bao lâu thì thấy tín hiệu trên Maps?",
    a: "Nơi ít đối thủ: vài tuần có thể thấy gọi / chỉ đường nhúc nhích. Chỗ đông (spa, nha khoa, quán trung tâm): thường 1,5–3 tháng làm đúng hướng. Không hứa top sau một lần chỉnh.",
  },
  {
    q: "Khác thuê bên SEO Maps chỗ nào?",
    a: "Không bắt đầu bằng gói dịch vụ mù. Bạn thấy cửa hàng đang đứng đâu, việc đáng làm trước, tín hiệu gọi / chỉ đường thế nào. Không mua thứ không nhìn được.",
  },
  {
    q: "Tôi có cần rành kỹ thuật không?",
    a: "Không. Ba câu hỏi. Việc tuần viết bằng tiếng Việt, làm từng việc. Máy chịu phần nhắc.",
  },
  {
    q: "Có bị khóa hồ sơ Google không?",
    a: "Không nhồi từ khóa vào tên cửa hàng, không mua đánh giá ảo, không tạo hồ sơ giả. Hồ sơ thật, hoạt động thật, khách thật.",
  },
  {
    q: "Gửi xong có bị gọi điện bán hàng không?",
    a: "Một tin Zalo trong 24 giờ, kèm 3 việc nên làm. Bạn bảo dừng là dừng. Không ký gì trên trang này.",
  },
];

function MobileCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = document.getElementById("chan-doan");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setHidden(Boolean(entry?.isIntersecting)),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur-md md:hidden">
      <Button className="w-full" size="lg" asChild>
        <a href="#chan-doan">
          Xem Maps miễn phí
          <ArrowRight className="size-4" />
        </a>
      </Button>
    </div>
  );
}

function Home() {
  return (
    <div id="top" className="min-h-screen bg-bg pb-20 text-fg md:pb-0">
      <SiteNav />

      <section className="relative overflow-hidden atlas-grid">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <Badge variant="soft" className="rise-in">
              Cho chủ spa, quán, phòng khám, cửa hàng
            </Badge>
            <h1 className="rise-in rise-in-delay-1 mt-6 font-display text-4xl leading-tight tracking-tight md:text-6xl">
              Khách đang đứng gần cửa bạn.{" "}
              <span className="text-accent">Google Maps lại chỉ họ sang chỗ khác.</span>
            </h1>
            <p className="rise-in rise-in-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted">
              SEO Google Maps giúp cửa hàng nhỏ được khách tìm thấy đúng lúc họ cần —
              bấm gọi, chỉ đường — rồi giữ được tín hiệu đó. Không bắt đầu bằng đống bài
              đăng. Bắt đầu bằng xem Maps đang chặn khách chỗ nào.
            </p>
            <div className="rise-in rise-in-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="xl" asChild>
                <a href="#chan-doan">
                  Xem Maps của tôi đang thế nào
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="#goi">Xem gói SEO Maps</a>
              </Button>
            </div>
            <p className="rise-in rise-in-delay-4 mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Timer className="size-3.5" /> 3 phút · miễn phí
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5" /> Không ép mua · Không ký gì trên trang
              </span>
            </p>
          </div>
          <div className="rise-in rise-in-delay-2">
            <MapsPack />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-bg-warm/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.k}>
              <p className="font-display text-4xl tabular-nums tracking-tight text-accent">{s.k}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="van-de" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Chuyện đang xảy ra
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight md:text-5xl">
            Cửa hàng bạn đang mở. Trên Google Maps thì như đóng cửa.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PAINS.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)]"
              >
                <p.icon className="size-5 text-accent" strokeWidth={1.75} />
                <h3 className="mt-5 font-display text-xl tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Vì sao Maps trước
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
              Khách không ngồi đọc. Họ muốn tới ngay.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Người gõ “spa gần tôi”, “nha khoa Thanh Hóa” hay tên dịch vụ + khu vực
              nhìn vài cái tên, số sao, nút gọi — rồi chọn. Không thấy bạn thì website
              đẹp cũng ít được mở.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Một khách spa vài trăm nghìn đến cả triệu. Chỉ cần thêm vài cuộc gọi mỗi
              tuần từ Maps — đó là doanh thu đang chảy sang quán bên cạnh, trong lúc bạn
              tăng ngân sách quảng cáo.
            </p>
          </div>
          <blockquote className="rounded-2xl bg-fg p-8 text-bg md:p-10">
            <p className="font-display text-2xl leading-snug tracking-tight md:text-3xl">
              “Phần lớn lúc doanh thu kém, không phải vì chạy ads kém. Mà vì khách không
              tìm thấy bạn đúng lúc họ cần.”
            </p>
            <footer className="mt-6 text-xs tracking-wide text-bg/60">
              BGS · nhìn đúng vấn đề trước khi bỏ tiền vào giải pháp
            </footer>
          </blockquote>
        </div>
      </section>

      <section id="os" className="scroll-mt-24 bg-console py-20 text-console-fg md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Bảng làm việc
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-3xl tracking-tight md:text-5xl">
              Một màn hình. Việc tuần đã xếp sẵn.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-console-muted">
              Điểm hồ sơ, hạng quanh cửa, việc đáng làm — cùng một chỗ. Làm SEO Maps
              có hướng và có theo dõi, không phải nhờ đăng giúp cho có.
            </p>
          </div>
          <div className="mt-12">
            <OsConsole />
          </div>
        </div>
      </section>

      <section id="cach-lam" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">Cách làm</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight md:text-5xl">
            Làm đúng việc, theo đúng thứ tự.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {STEPS.map((s) => (
              <article key={s.n} className="bg-surface p-6 md:p-7">
                <p className="text-xs text-subtle">{s.n}</p>
                <h3 className="mt-4 font-display text-xl tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">So sánh</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
            Tự làm, thuê ngoài, hay để máy chạy giúp.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {COMPARE.map((c) => (
              <article
                key={c.name}
                className={
                  c.featured
                    ? "rounded-2xl bg-fg p-6 text-bg shadow-[var(--shadow-lift)] md:p-8"
                    : "rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-8"
                }
              >
                <p className="text-xs tracking-wide opacity-60">{c.name}</p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed">
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border">
        <img
          src="/images/street.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-console/80" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
          <h2 className="max-w-3xl font-display text-3xl tracking-tight text-console-fg md:text-5xl">
            Từ Thanh Hóa đến Sài Gòn — khách mở Maps trước khi bước vào cửa.
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {INDUSTRIES.map((i) => (
              <li
                key={i}
                className="border-b border-console-line/80 py-2 text-sm text-console-fg/90"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section id="tin-tuong" className="scroll-mt-24 border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Vì sao người ta chốt
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight md:text-5xl">
            Không hứa top 1. Hứa hướng rõ và tín hiệu có thể theo dõi.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <p className="text-xs text-muted">Trước khi làm</p>
              <p className="mt-3 font-display text-xl tracking-tight">
                Xem Maps đang chặn khách chỗ nào
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Không bán gói mù. Bạn thấy hiện trạng và vài việc đáng làm trước — rồi mới
                quyết có làm tiếp hay không.
              </p>
            </article>
            <article className="rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <p className="text-xs text-muted">Khi làm SEO Maps</p>
              <p className="mt-3 font-display text-xl tracking-tight">
                Đo gọi điện, chỉ đường — không chỉ “đã đăng”
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Báo cáo theo tín hiệu khách, không theo số bài. Đều mà không ra khách thì
                không cần đều thêm.
              </p>
            </article>
            <article className="rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)]">
              <p className="text-xs text-muted">An toàn tháng đầu</p>
              <p className="mt-3 font-display text-xl tracking-tight">
                30 ngày không thấy hướng đi rõ — hoàn tháng đầu
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Không khóa hợp đồng dài. Tập trung thị trường local (trong đó có Thanh Hóa)
                để làm sát địa bàn, không làm lan man cả nước.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="goi" className="scroll-mt-24 border-t border-border bg-bg-warm/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Nếu làm cùng chúng tôi
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-tight md:text-5xl">
            3 mức SEO Maps — chọn theo mức độ bạn muốn ôm
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Sản phẩm chính là SEO Google Maps. Facebook và website chỉ bổ trợ khi cần.
            Chưa có website vẫn làm được.
          </p>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <article className="flex flex-col rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-7">
              <p className="text-xs text-muted">Khởi động</p>
              <p className="mt-2 font-display text-2xl tracking-tight">1.800.000đ<span className="text-base text-muted">/tháng</span></p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Đã có Maps nhưng ít gọi / chỉ đường. Rà đúng bệnh, chỉnh hướng, xem tín hiệu có nhúc nhích.
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-muted">
                <li>· Audit chỗ đang chặn khách trên Maps</li>
                <li>· Việc ưu tiên theo tuần</li>
                <li>· Theo dõi tín hiệu cơ bản</li>
              </ul>
              <a
                href="#chan-doan"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-4 text-sm font-medium hover:border-fg/40"
              >
                Bắt đầu từ chẩn đoán
              </a>
            </article>
            <article className="relative flex flex-col rounded-2xl bg-fg p-6 text-bg shadow-[var(--shadow-lift)] md:p-7">
              <span className="absolute -top-3 right-4 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-bg">
                Chọn nhiều nhất
              </span>
              <p className="text-xs text-bg/60">Tăng trưởng · hợp đa số cửa hàng</p>
              <p className="mt-2 font-display text-2xl tracking-tight">3.500.000đ<span className="text-base text-bg/60">/tháng</span></p>
              <p className="mt-3 text-sm leading-relaxed text-bg/75">
                Muốn Maps thành nguồn khách ổn định, đọc được gọi / chỉ đường hàng tháng — không cần ôm multi-location ngay.
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-bg/80">
                <li>· SEO Maps đầy đủ như kênh bán hàng</li>
                <li>· Theo dõi tín hiệu gọi / chỉ đường</li>
                <li>· Facebook bổ sung nếu cần (không bắt buộc)</li>
              </ul>
              <a
                href="#chan-doan"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-bg px-4 text-sm font-medium text-fg"
              >
                Chẩn đoán rồi chọn gói này
              </a>
            </article>
            <article className="flex flex-col rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-7">
              <p className="text-xs text-muted">Thống trị</p>
              <p className="mt-2 font-display text-2xl tracking-tight">6.500.000đ<span className="text-base text-muted">/tháng</span></p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Ôm khu vực, nhiều điểm bán, hoặc cần người theo sát số liệu liên tục.
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-muted">
                <li>· SEO Maps sâu + báo cáo khu vực</li>
                <li>· Multi-location khi cần</li>
                <li>· Có người đọc số và chỉnh hướng</li>
              </ul>
              <a
                href="#chan-doan"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-4 text-sm font-medium hover:border-fg/40"
              >
                Bắt đầu từ chẩn đoán
              </a>
            </article>
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Ký mới trong tuần: tặng audit chỗ mất khách + hướng 30 ngày · 30 ngày đầu không rõ hướng — hoàn tháng đầu · Hủy bất kỳ lúc nào
          </p>
          <div className="mt-6 flex flex-col items-center gap-2">
            <Button size="xl" asChild>
              <a href="#chan-doan">
                Xem Maps miễn phí trước — rồi mới quyết gói
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <p className="text-xs text-muted">Không cần thẻ · Không ký trên trang này</p>
          </div>
        </div>
      </section>

      <Diagnosis />


      <section id="faq" className="border-t border-border py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent">Hay hỏi</p>
            <h2 className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
              Những câu hỏi trước khi bấm gửi.
            </h2>
          </div>
          <Accordion type="single" collapsible>
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`q-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="border-t border-border bg-bg-warm/60 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl tracking-tight md:text-5xl">
            Đừng tăng tiền quảng cáo khi Maps còn chưa mang khách.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Ba phút xem hiện trạng. Trong 24 giờ nhận 3 việc nên làm trước trên Maps.
            Rồi mới quyết — tự làm hoặc làm cùng gói SEO Maps.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="xl" asChild>
              <a href="#chan-doan">
                Xem Maps của tôi — miễn phí
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted">
            Không ép mua · Không ký trên trang · Một tin Zalo trong 24 giờ · Bạn bảo dừng là dừng
          </p>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
          <Logo />
          <p className="max-w-md text-sm text-muted">
            Một phần của BGS. Xem đúng vấn đề trước khi bỏ tiền vào giải pháp.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a className="text-muted hover:text-fg" href="https://www.bgs.com.vn" target="_blank" rel="noreferrer">
              bgs.com.vn
            </a>
            <a className="text-muted hover:text-fg" href="https://maps.bgs.com.vn" target="_blank" rel="noreferrer">
              maps.bgs.com.vn
            </a>
          </div>
        </div>
      </footer>

      <MobileCta />
    </div>
  );
}
