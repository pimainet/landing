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
    title: "Bạn trả ads. Đối thủ ngồi trên Maps hốt khách.",
    body: "Khách tìm rồi mở bản đồ. Họ bấm cửa hàng Top 3 — thường không phải bạn. Tiền quảng cáo đang nuôi hàng xóm.",
  },
  {
    icon: Eye,
    title: "Hồ sơ để im, Google tưởng bạn nghỉ.",
    body: "Không đăng bài, không ảnh mới, không trả lời đánh giá. Google đọc sự im lặng như cửa đã đóng.",
  },
  {
    icon: MapPinned,
    title: "Khách đứng cách vài phút. Không thấy tên bạn.",
    body: "Không phải thiếu sản phẩm. Thiếu chỗ trên 3 vị trí họ nhìn trước khi bước vào cửa.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Xem đang đứng đâu",
    body: "Trước khi bán gói gì. Đọc hồ sơ, đối thủ quanh bạn, chỗ trống trên Maps — rồi mới nói cần làm gì.",
  },
  {
    n: "02",
    title: "Chỉ 3 việc trước",
    body: "Không làm 20 thứ một lúc. Chọn việc dễ làm, Google nhìn thấy rõ.",
  },
  {
    n: "03",
    title: "Làm đều mỗi tuần",
    body: "Đăng bài, thêm ảnh, trả lời đánh giá, khớp tên–địa chỉ–SĐT. Có việc nhắc, hồ sơ không bị bỏ quên.",
  },
  {
    n: "04",
    title: "Giữ Top 3",
    body: "Cuối tuần nhận báo cáo: lên hay tụt, tuần sau làm gì.",
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
    name: "Local Growth OS",
    featured: true,
    items: [
      "Xem hiện trạng trước khi bán",
      "Việc tuần viết sẵn, tiếng Việt",
      "Nhìn hạng quanh cửa hàng, không đoán",
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
  "Mọi dịch vụ khách tìm “gần tôi”",
];

const FAQS = [
  {
    q: "Chưa có website thì làm Maps được không?",
    a: "Được. Google xếp Maps chủ yếu dựa trên hồ sơ Google Business, đánh giá, và khoảng cách. Có website thì tốt thêm. Không có vẫn làm được.",
  },
  {
    q: "Bao lâu thì vào Top 3?",
    a: "Nơi ít đối thủ: vài tuần đã thấy tín hiệu. Chỗ đông như spa, nha khoa, quán trung tâm: thường 1,5–3 tháng làm đều. Không phải chỉnh một lần là xong.",
  },
  {
    q: "Khác thuê bên SEO Maps chỗ nào?",
    a: "Không bắt đầu bằng gói dịch vụ. Bạn thấy cửa hàng đang đứng đâu, việc tuần này, hạng lên hay xuống. Không mua một thứ không nhìn được.",
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
              Local Growth OS giúp cửa hàng nhỏ lên Top 3 Google Maps — chỗ khách bấm
              gọi và chỉ đường — rồi giữ vị trí đó. Không cần thuê bên ngoài, không cần
              tự mày mò.
            </p>
            <div className="rise-in rise-in-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="xl" asChild>
                <a href="#chan-doan">
                  Xem Maps của tôi đang thế nào
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="#os">Xem bảng làm việc</a>
              </Button>
            </div>
            <p className="rise-in rise-in-delay-4 mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Timer className="size-3.5" /> 3 phút
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5" /> Miễn phí
              </span>
              <span>Không bị gọi bán hàng</span>
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
              Người gõ “spa gần tôi” hay “nha khoa quận 3” nhìn 3 cái tên, số sao, nút
              gọi — rồi chọn. Không thấy bạn thì website đẹp cũng không được mở.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Một khách spa 800 nghìn. Mười cuộc gọi một tuần từ Maps — đó là tiền đang
              chảy sang quán bên cạnh, trong lúc bạn tăng ngân sách quảng cáo.
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
              Điểm hồ sơ, hạng quanh cửa hàng, việc phải làm — cùng một chỗ. Làm Maps
              như chấm công ca, không phải “nhờ đăng giúp một bài”.
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
            Từ phố cổ đến hẻm Sài Gòn — khách mở Maps trước khi bước vào cửa.
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
            Đừng tăng tiền quảng cáo khi Maps còn để trống.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Một lần xem hiện trạng. Ba việc nên làm trước. Rồi hãy quyết định có mở
            Local Growth OS hay không.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="xl" asChild>
              <a href="#chan-doan">
                Xem Maps của tôi
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted">Miễn phí · Không bị gọi bán hàng · Trả lời qua Zalo</p>
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
