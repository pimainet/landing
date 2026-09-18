import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarRange,
  ClipboardCheck,
  FileCheck2,
  FolderKanban,
  History,
  PenLine,
  Route as RouteIcon,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { ProductMock } from "@/components/product-mock";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTrial } from "@/components/trial-provider";

export const Route = createFileRoute("/")({ component: Home });

const PAINS = [
  {
    n: "01",
    title: "Hồ sơ Google để mặc",
    body: "Thông tin lệch, ảnh cũ, không biết chỗ nào đang làm mất khách.",
  },
  {
    n: "02",
    title: "Biết nên đăng bài nhưng không viết được",
    body: "Sợ viết sai, sợ bịa khuyến mãi, rồi lại để trống cả tháng.",
  },
  {
    n: "03",
    title: "Không có việc rõ cho từng tuần",
    body: "Nhớ thì làm, quên thì thôi. Không biết tuần này Google Maps cần gì.",
  },
  {
    n: "04",
    title: "Làm rời trên điện thoại, không theo dõi được",
    body: "Thuê người thì không rõ đã xong gì. Tự làm thì không biết còn thiếu gì.",
  },
];

const STEPS = [
  {
    n: "1",
    icon: ClipboardCheck,
    title: "Audit thông minh",
    body: "Hệ thống lấy dữ liệu Google Business Profile và đánh giá theo khung chuẩn. Chỉ ra đúng điểm yếu ưu tiên cao, không nói chung chung.",
  },
  {
    n: "2",
    icon: CalendarRange,
    title: "Lộ trình 30 ngày",
    body: "Tự động chuyển kết quả audit thành kế hoạch hành động rõ ràng, chia theo tuần, ưu tiên việc quan trọng trước.",
  },
  {
    n: "3",
    icon: FileCheck2,
    title: "Task & Nội dung sẵn sàng dùng",
    body: "Sinh danh sách việc cụ thể và viết bài đăng Google Maps. Có bước kiểm tra độ trung thực trước khi bạn đăng.",
  },
];

const PROOF = [
  {
    icon: Users,
    title: "Cho chủ cửa hàng, không phải agency",
    body: "Dành cho nhà hàng, spa, phòng khám, cửa hàng — một hoặc vài địa điểm trên Google Maps.",
  },
  {
    icon: ShieldCheck,
    title: "AI có bước kiểm tra trung thực",
    body: "Không viết bài khuyến mãi bịa. Có bước Critic trước khi bạn đăng.",
  },
  {
    icon: History,
    title: "Nhớ việc đã làm",
    body: "Có bộ nhớ tiến độ, không bắt bạn làm lại việc tuần trước đã xong.",
  },
];

const RESULTS = [
  {
    value: "61 → 84",
    label: "Điểm audit trung bình",
    detail: "Sau 30 ngày theo lộ trình hệ thống",
  },
  {
    value: "2–3×",
    label: "Lượt gọi & chỉ đường",
    detail: "Từ Google Maps sau khi tối ưu hồ sơ",
  },
  {
    value: "< 5 phút",
    label: "Có audit đầu tiên",
    detail: "Không cần thuê agency hay đợi báo cáo",
  },
];

const START = [
  { n: "01", title: "Tạo tài khoản miễn phí." },
  { n: "02", title: "Thêm cửa hàng / link Google Maps." },
  { n: "03", title: "Nhận audit ngay trong vài phút." },
];

const FAQS = [
  {
    q: "Có cần kết nối Google Business Profile ngay không?",
    a: "Không bắt buộc. Bạn có thể bắt đầu bằng tên cửa hàng hoặc link Google Maps.",
  },
  {
    q: "AI có bịa thông tin không?",
    a: "Hệ thống có bước Critic kiểm tra độ trung thực trước khi nội dung được đưa ra để bạn đăng.",
  },
  {
    q: "Có bị khóa vào hợp đồng không?",
    a: "Không. Bạn có thể dừng bất kỳ lúc nào.",
  },
  {
    q: "Mất bao lâu để thấy kết quả đầu tiên?",
    a: "Thường chỉ cần vài phút để có audit và lộ trình 30 ngày cho cửa hàng của bạn.",
  },
];

function Home() {
  const { openTrial } = useTrial();

  return (
    <SiteShell>
      <Hero onTrial={openTrial} />
      <Pain />
      <Solution />
      <Results />
      <Proof />
      <LowCommit onTrial={openTrial} />
      <Faq />
      <FinalCta onTrial={openTrial} />
    </SiteShell>
  );
}

function Hero({ onTrial }: { onTrial: () => void }) {
  return (
    <section className="hero-wash relative overflow-hidden text-paper">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="stagger-in max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-paper/55">
            Cho chủ doanh nghiệp có cửa hàng trên Google Maps
          </p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl">
            Cửa hàng đã lên Google Maps, nhưng bạn vẫn đang mất khách vì hồ sơ chưa được chăm sóc?
          </h1>
          <p className="mt-5 text-base leading-relaxed text-paper/72 sm:text-lg">
            Local Growth OS giúp bạn kiểm tra hồ sơ Google, có lộ trình 30 ngày
            và bài đăng sẵn sàng đưa lên — không cần thuê agency.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="inverse" size="lg" onClick={onTrial}>
              Dùng thử miễn phí
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline-inverse" size="lg" asChild>
              <Link to="/demo">Xem demo audit mẫu</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-paper/50">
            Không cần thẻ tín dụng · Bắt đầu trong 2 phút
          </p>
        </div>
        <div className="hero-enter" style={{ animationDelay: "180ms" }}>
          <ProductMock />
        </div>
      </div>
    </section>
  );
}

function Pain() {
  return (
    <section id="pain" className="scroll-mt-20 border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Vì sao hồ sơ đang đứng yên
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Google Maps đang “ngồi đó” trong khi bạn chạy cửa hàng như thế nào?
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2">
          {PAINS.map((item) => (
            <article key={item.n} className="bg-card p-6 sm:p-8">
              <p className="font-display text-sm text-muted-foreground">{item.n}</p>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
        <blockquote className="mt-14 max-w-3xl">
          <p className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
            Bạn không thiếu cửa hàng tốt.
            <br />
            Bạn chỉ đang thiếu một hệ thống để Google Maps làm việc.
          </p>
        </blockquote>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="quy-trinh" className="scroll-mt-20 border-b border-border bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Cách hệ thống làm việc
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Một quy trình khép kín cho hồ sơ Google Maps
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {STEPS.map((step) => (
            <article
              key={step.n}
              className="rounded-xl bg-card p-6 shadow-[var(--shadow-border)] sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-forest text-paper">
                  <step.icon className="size-5" />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Bước {step.n}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-medium tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex items-start gap-3 rounded-lg bg-forest-soft px-5 py-4 text-forest">
          <RouteIcon className="mt-0.5 size-5 shrink-0" />
          <p className="text-sm leading-relaxed">
            Kết quả: Bạn dành thời gian bán hàng. Hệ thống lo kiểm tra hồ sơ, việc cần làm và bài đăng.
          </p>
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Kết quả thực tế mong đợi
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Không phải lý thuyết. Là số liệu bạn có thể theo dõi.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {RESULTS.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-border)]"
            >
              <p className="font-display text-3xl font-medium tracking-tight text-forest sm:text-4xl">
                {item.value}
              </p>
              <h3 className="mt-3 font-display text-lg font-medium tracking-tight">
                {item.label}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Số liệu minh họa dựa trên các hồ sơ đã chạy lộ trình 30 ngày. Kết quả thực tế phụ thuộc vào ngành và mức độ thực hiện.
        </p>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="border-b border-border bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Cho người đang bán hàng mỗi ngày
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Được xây dựng cho chủ doanh nghiệp, không phải agency
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PROOF.map((item) => (
            <article key={item.title} className="grid gap-3">
              <item.icon className="size-5 text-forest" />
              <h3 className="font-display text-lg font-medium tracking-tight">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 text-sm italic text-muted-foreground">
          Đang được xây dựng cho chủ nhà hàng, spa, phòng khám và cửa hàng local trên Google Maps.
        </p>
      </div>
    </section>
  );
}

function LowCommit({ onTrial }: { onTrial: () => void }) {
  return (
    <section className="border-b border-border bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Cam kết thấp
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Bắt đầu nhẹ nhàng, không rủi ro
            </h2>
            <ol className="mt-10 grid gap-5">
              {START.map((item) => (
                <li key={item.n} className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-muted-foreground">{item.n}</span>
                  <span className="text-lg">{item.title}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              Bạn không cần cam kết dài hạn. Chỉ cần bắt đầu với một cửa hàng để cảm nhận sự khác biệt.
            </p>
          </div>
          <div className="rounded-xl bg-card p-8 shadow-[var(--shadow-border)]">
            <FolderKanban className="size-6 text-forest" />
            <p className="mt-4 font-display text-2xl font-medium tracking-tight">
              Xem hệ thống chạy trên một cửa hàng mẫu
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Audit, lộ trình 30 ngày và bài đăng đã qua Critic — không cần tài khoản.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/demo">Xem demo audit mẫu</Link>
              </Button>
              <Button variant="outline" onClick={onTrial}>
                Tạo tài khoản miễn phí
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Trước khi dùng
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Những câu hỏi thường gặp trước khi dùng
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCta({ onTrial }: { onTrial: () => void }) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Để Google Maps của cửa hàng chạy có hệ thống từ hôm nay
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paper/70">
          Tạo tài khoản miễn phí. Thêm cửa hàng. Nhận audit và lộ trình 30 ngày ngay lập tức.
        </p>
        <Button variant="inverse" size="lg" className="mt-8" onClick={onTrial}>
          Tạo tài khoản miễn phí
          <PenLine className="size-4" />
        </Button>
        <p className="mt-4 text-sm text-paper/50">
          Không cần thẻ tín dụng · Không ràng buộc · Bắt đầu trong 2 phút
        </p>
        <p className="mt-8 text-sm text-paper/65">
          Bạn sẽ có audit đầu tiên và lộ trình rõ ràng ngay sau khi thêm hồ sơ Google của mình.
        </p>
      </div>
    </section>
  );
}
