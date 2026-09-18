import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
  { id: "fnb", label: "Nhà hàng, quán ăn" },
  { id: "spa", label: "Spa, thẩm mỹ" },
  { id: "health", label: "Nha khoa, phòng khám" },
  { id: "home", label: "Nội thất, xây dựng" },
  { id: "auto", label: "Gara, ô tô" },
  { id: "retail", label: "Cửa hàng bán lẻ" },
  { id: "edu", label: "Trung tâm, lớp học" },
  { id: "other", label: "Ngành khác" },
] as const;

const CITIES = [
  "Thanh Hóa",
  "Hà Nội",
  "TP. Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Phòng",
  "Cần Thơ",
  "Bình Dương",
  "Đồng Nai",
  "Tỉnh thành khác",
] as const;

const STATUSES = [
  {
    id: "none",
    label: "Chưa có hồ sơ trên Google Maps",
    score: 18,
    note: "Google gần như chưa biết cửa hàng bạn trên bản đồ — khách tìm gần đây khó thấy bạn.",
  },
  {
    id: "buried",
    label: "Có hồ sơ nhưng ít ai gọi / chỉ đường",
    score: 34,
    note: "Hồ sơ đã có, nhưng khách vẫn đang bấm chỗ khác trước. Cần xem chỗ nào đang chặn tín hiệu.",
  },
  {
    id: "unstable",
    label: "Có lúc lên, có lúc tụt — không giữ được",
    score: 58,
    note: "Nền đã có. Cần hướng rõ và theo dõi tín hiệu, không chỉ đăng thêm cho có.",
  },
  {
    id: "unknown",
    label: "Không rõ đang đứng ở đâu trên Maps",
    score: 28,
    note: "Chưa xem hiện trạng thì khó biết việc nào đáng làm trước.",
  },
] as const;

const LABOR = [
  "Đang xem hồ sơ Google Maps của bạn",
  "Đối chiếu với cửa hàng quanh khu vực",
  "Tìm chỗ đang làm giảm gọi / chỉ đường",
  "Chọn 3 việc nên làm trước",
];

type FormState = {
  industry: string;
  city: string;
  status: string;
  business: string;
  mapsUrl: string;
  name: string;
  phone: string;
};

const EMPTY: FormState = {
  industry: "",
  city: "Thanh Hóa",
  status: "",
  business: "",
  mapsUrl: "",
  name: "",
  phone: "",
};

function scoreFor(status: string) {
  return STATUSES.find((s) => s.id === status)?.score ?? 30;
}

function normalizePhone(raw: string) {
  return raw.replace(/[\s.\-()]/g, "");
}

export function Diagnosis() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [laborIndex, setLaborIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const progress = done ? 100 : step === 3 ? 88 : (step / 3) * 100;
  const industryLabel = INDUSTRIES.find((i) => i.id === form.industry)?.label;
  const statusMeta = STATUSES.find((s) => s.id === form.status);
  const health = useMemo(() => scoreFor(form.status), [form.status]);

  useEffect(() => {
    if (step === 0 && !done) return;
    document.getElementById("chan-doan-the")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [step, done]);

  function patch(p: Partial<FormState>) {
    setForm((f) => ({ ...f, ...p }));
    setError("");
  }

  function nextFromStep0() {
    if (!form.industry) {
      setError("Chọn một ngành rồi bấm tiếp.");
      return;
    }
    setStep(1);
  }

  function nextFromStep1() {
    if (!form.city || !form.status) {
      setError("Chọn tỉnh/thành và tình trạng Maps hiện tại.");
      return;
    }
    setStep(2);
  }

  function submit() {
    const phone = normalizePhone(form.phone);
    if (!form.name.trim()) {
      setError("Cho biết tên để tin Zalo gọi cho đúng.");
      return;
    }
    if (!/^0\d{9}$/.test(phone)) {
      setError("Số Zalo gồm 10 số, bắt đầu bằng 0.");
      return;
    }
    setStep(3);
    setLaborIndex(0);
    const lead = {
      ...form,
      phone,
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("lgos-leads") ?? "[]") as unknown[];
      localStorage.setItem("lgos-leads", JSON.stringify([lead, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota */
    }

    let i = 0;
    const timer = window.setInterval(() => {
      i += 1;
      setLaborIndex(i);
      if (i >= LABOR.length) {
        window.clearInterval(timer);
        setDone(true);
      }
    }, 700);
  }

  return (
    <section id="chan-doan" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Bắt đầu từ đây
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
            Xem Google Maps của bạn trước khi đổ thêm tiền quảng cáo.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Chúng tôi gửi giá trị trước: vài câu hỏi, điểm sơ bộ ngay trên trang, rồi 3 việc
            nên làm qua Zalo trong 24 giờ. Bạn chưa phải trả gì — và chưa bị ép mua gói.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted">
            {[
              "Miễn phí · không cần thẻ",
              "Không ép mua gói sau khi gửi",
              "Bạn bảo dừng là dừng",
              "Có link Maps thì chẩn đoán sát hơn (không bắt buộc)",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div
          id="chan-doan-the"
          className="scroll-mt-24 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-8"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-xs font-medium text-muted">
              {done ? "Kết quả sơ bộ" : `Bước ${Math.min(step + 1, 3)} / 3`}
            </p>
            <span className="text-xs tabular-nums text-subtle">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="mb-8" />

          {step === 0 && (
            <div>
              <h3 className="font-display text-2xl tracking-tight">Bạn đang làm ngành nào?</h3>
              <p className="mt-2 text-sm text-muted">Chọn gần đúng là được — chưa cần tên cửa hàng.</p>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => patch({ industry: ind.id })}
                    className={cn(
                      "min-h-12 rounded-lg border px-3 py-3 text-left text-sm transition-colors duration-150",
                      form.industry === ind.id
                        ? "border-fg bg-fg text-bg"
                        : "border-border bg-bg hover:border-fg/40",
                    )}
                  >
                    {ind.label}
                  </button>
                ))}
              </div>
              {error && <p className="mt-4 text-sm text-danger">{error}</p>}
              <div className="mt-8 flex justify-end">
                <Button size="lg" onClick={nextFromStep0}>
                  Tiếp tục <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="font-display text-2xl tracking-tight">
                Cửa hàng ở đâu, Maps đang ra sao?
              </h3>
              <div className="mt-6 space-y-6">
                <div>
                  <Label htmlFor="biz">Tên cửa hàng (nếu có)</Label>
                  <Input
                    id="biz"
                    className="mt-2"
                    placeholder="Ví dụ: Hoa Spa Thanh Hóa"
                    value={form.business}
                    onChange={(e) => patch({ business: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="maps">
                    Link Google Maps / Google Business{" "}
                    <span className="font-normal text-muted">(nếu có)</span>
                  </Label>
                  <Input
                    id="maps"
                    className="mt-2"
                    type="url"
                    placeholder="https://maps.google.com/... hoặc dán link chia sẻ Maps"
                    value={form.mapsUrl}
                    onChange={(e) => patch({ mapsUrl: e.target.value })}
                    autoComplete="url"
                  />
                  <p className="mt-1.5 text-xs text-muted">
                    Có link giúp chẩn đoán đúng hồ sơ của bạn. Chưa có cũng làm tiếp được.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Tỉnh / thành phố</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {CITIES.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => patch({ city: c })}
                        className={cn(
                          "min-h-10 rounded-md border px-3 text-sm transition-colors duration-150",
                          form.city === c
                            ? "border-fg bg-fg text-bg"
                            : "border-border bg-bg hover:border-fg/40",
                        )}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Trên Google Maps hiện giờ thế nào?</p>
                  <div className="mt-2 grid gap-2">
                    {STATUSES.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => patch({ status: s.id })}
                        className={cn(
                          "min-h-12 rounded-lg border px-4 py-3 text-left text-sm transition-colors duration-150",
                          form.status === s.id
                            ? "border-fg bg-fg text-bg"
                            : "border-border bg-bg hover:border-fg/40",
                        )}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {error && <p className="mt-4 text-sm text-danger">{error}</p>}
              <div className="mt-8 flex items-center justify-between">
                <Button variant="ghost" onClick={() => setStep(0)}>
                  <ArrowLeft className="size-4" /> Quay lại
                </Button>
                <Button size="lg" onClick={nextFromStep1}>
                  Tiếp tục <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-display text-2xl tracking-tight">Nhận 3 việc nên làm qua Zalo</h3>
              <p className="mt-2 text-sm text-muted">
                Một tin trong 24 giờ. Không gọi ban đêm. Bạn bảo dừng là dừng.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="name">Tên bạn</Label>
                  <Input
                    id="name"
                    className="mt-2"
                    placeholder="Nguyễn Minh"
                    value={form.name}
                    onChange={(e) => patch({ name: e.target.value })}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Số Zalo</Label>
                  <Input
                    id="phone"
                    className="mt-2"
                    placeholder="09xx xxx xxx"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={(e) => patch({ phone: e.target.value })}
                    autoComplete="tel"
                  />
                </div>
              </div>
              {error && <p className="mt-4 text-sm text-danger">{error}</p>}
              <div className="mt-8 flex items-center justify-between">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  <ArrowLeft className="size-4" /> Quay lại
                </Button>
                <Button size="lg" onClick={submit}>
                  Xem Maps của tôi <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="mt-4 text-center text-xs text-muted">
                Miễn phí · Không ký hợp đồng trên trang · Không chia sẻ số cho bên thứ ba
              </p>
            </div>
          )}

          {step === 3 && !done && (
            <div className="py-6">
              <h3 className="font-display text-2xl tracking-tight">Đang xem hộ bạn</h3>
              <p className="mt-2 text-sm text-muted">
                Khoảng 15 giây — đang đối chiếu tình trạng bạn chọn với khung SEO Maps.
              </p>
              <ul className="mt-8 space-y-3">
                {LABOR.map((line, i) => (
                  <li key={line} className="flex items-center gap-3 text-sm">
                    {i < laborIndex ? (
                      <Check className="size-4 text-accent" />
                    ) : i === laborIndex ? (
                      <LoaderCircle className="size-4 animate-spin text-accent" />
                    ) : (
                      <span className="size-4 rounded-full border border-border" />
                    )}
                    <span className={i > laborIndex ? "text-subtle" : "text-fg"}>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 h-1.5 overflow-hidden rounded-full bg-surface-2">
                <div className="labor-bar relative h-full w-1/2 bg-accent" />
              </div>
            </div>
          )}

          {done && (
            <div>
              <h3 className="font-display text-2xl tracking-tight">
                Đã ghi nhận — đây là hướng sơ bộ
              </h3>
              <p className="mt-2 text-sm text-muted">
                Điểm dưới dựa trên tình trạng bạn chọn, chưa thay audit tay trên hồ sơ thật.
                {form.mapsUrl
                  ? " Vì đã có link Maps, tin Zalo sẽ bám đúng hồ sơ hơn."
                  : " Nếu bổ sung link Maps sau, chẩn đoán sẽ sát hơn."}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-bg p-4">
                  <p className="text-xs text-muted">Mức ước lượng</p>
                  <p className="mt-2 font-display text-4xl tabular-nums">{health}</p>
                  <p className="mt-1 text-xs text-muted">/100 · chưa phải audit đầy đủ</p>
                </div>
                <div className="rounded-xl bg-bg p-4">
                  <p className="text-xs text-muted">Đọc nhanh</p>
                  <p className="mt-2 text-sm leading-relaxed">{statusMeta?.note}</p>
                </div>
              </div>
              <div className="mt-5 rounded-xl border border-border bg-bg p-4">
                <p className="text-xs font-medium text-muted">Bước tiếp theo (trong 24 giờ)</p>
                <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm leading-relaxed">
                  <li>Tin Zalo vào số {normalizePhone(form.phone)} — 3 việc nên làm trước trên Maps</li>
                  <li>Nếu bạn muốn, mình xem giúp link hồ sơ và nói rõ chỗ đang chặn gọi / chỉ đường</li>
                  <li>Bạn tự làm, hoặc làm cùng gói SEO Maps — không ép</li>
                </ol>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {industryLabel ? `${industryLabel} · ` : ""}
                {form.city}
                {form.business ? ` · ${form.business}` : ""}
                {form.mapsUrl ? " · đã gắn link Maps" : ""}.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="#faq">Xem câu hỏi thường gặp</a>
                </Button>
                <Button size="lg" variant="outline" onClick={() => { setDone(false); setStep(0); setForm(EMPTY); setLaborIndex(0); }}>
                  Làm lại cho cửa khác
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
