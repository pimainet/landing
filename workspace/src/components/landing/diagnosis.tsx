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
    label: "Chưa có hồ sơ trên Google",
    score: 18,
    note: "Google gần như chưa biết cửa hàng bạn tồn tại trên bản đồ.",
  },
  {
    id: "buried",
    label: "Có hồ sơ nhưng không vào Top 3",
    score: 34,
    note: "Hồ sơ đã có, nhưng đối thủ đang được Google đẩy lên trước.",
  },
  {
    id: "unstable",
    label: "Đã lên top rồi lại tụt",
    score: 58,
    note: "Nền đã có. Thiếu việc làm đều nên hạng không giữ được.",
  },
  {
    id: "unknown",
    label: "Không rõ đang đứng ở đâu",
    score: 28,
    note: "Chưa đo thì khó sửa. Đây là chỗ nhiều chủ quán bị kẹt.",
  },
] as const;

const LABOR = [
  "Đang xem hồ sơ Google của bạn",
  "So với cửa hàng trong vòng 2 km",
  "Xem bạn đang thiếu chỗ nào trên Maps",
  "Chọn 3 việc nên làm trước",
];

type FormState = {
  industry: string;
  city: string;
  status: string;
  business: string;
  name: string;
  phone: string;
};

const EMPTY: FormState = {
  industry: "",
  city: "",
  status: "",
  business: "",
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
      setError("Chọn thành phố và tình trạng Maps.");
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
            Xem Maps của bạn trước khi đổ thêm tiền quảng cáo.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Ba câu hỏi. Không bị gọi bán hàng. Bạn thấy điểm hồ sơ ngay trên trang.
            Trong 24 giờ, tin Zalo gửi 3 việc nên làm trước.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted">
            {[
              "Miễn phí",
              "Không bị ép mua gói",
              "Bạn bảo dừng là dừng",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {t}
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
              <p className="mt-2 text-sm text-muted">Chọn gần đúng là được.</p>
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
                    placeholder="Ví dụ: Hoa Spa Đa Kao"
                    value={form.business}
                    onChange={(e) => patch({ business: e.target.value })}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">Thành phố</p>
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
              <h3 className="font-display text-2xl tracking-tight">Nhận kết quả qua Zalo</h3>
              <p className="mt-2 text-sm text-muted">
                Một tin trong 24 giờ. Bạn bảo dừng là dừng.
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
            </div>
          )}

          {step === 3 && !done && (
            <div className="py-6">
              <h3 className="font-display text-2xl tracking-tight">Đang xem hộ bạn</h3>
              <p className="mt-2 text-sm text-muted">Khoảng 15 giây. Không phải form bỏ quên.</p>
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
                Bạn vừa xem thẳng Maps — việc nhiều chủ quán cứ để đó.
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-bg p-4">
                  <p className="text-xs text-muted">Điểm hồ sơ</p>
                  <p className="mt-2 font-display text-4xl tabular-nums">{health}</p>
                  <p className="mt-1 text-xs text-muted">trên 100 · sơ bộ</p>
                </div>
                <div className="rounded-xl bg-bg p-4">
                  <p className="text-xs text-muted">Nên làm trước</p>
                  <p className="mt-2 text-sm leading-relaxed">{statusMeta?.note}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {industryLabel ? `${industryLabel} · ` : ""}
                {form.city}
                {form.business ? ` · ${form.business}` : ""}. Tin Zalo gửi 3 việc nên làm trước,
                vào số {normalizePhone(form.phone)}.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="https://maps.bgs.com.vn" target="_blank" rel="noreferrer">
                    Mở Local Growth OS
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.bgs.com.vn" target="_blank" rel="noreferrer">
                    Xem BGS là gì
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
