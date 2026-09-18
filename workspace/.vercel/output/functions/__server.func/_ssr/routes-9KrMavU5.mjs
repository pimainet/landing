import { i as __toESM } from "../_runtime.mjs";
import { a as Trigger2, d as require_react, i as Root2, l as Slot, n as Header, r as Item, t as Content2, u as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as ArrowLeft, a as Route, c as Megaphone, d as LoaderCircle, f as Eye, g as ArrowRight, h as Check, i as ShieldCheck, l as MapPinned, m as ChevronDown, n as Timer, o as Phone, p as CircleAlert, r as Star, s as Navigation, u as MapPin } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as Root$1, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-9KrMavU5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg", {
	variants: {
		variant: {
			default: "bg-fg text-bg shadow-sm hover:bg-fg/90",
			accent: "bg-accent text-accent-fg shadow-sm hover:bg-accent-hover",
			outline: "border border-border bg-surface text-fg hover:bg-bg-warm",
			ghost: "text-fg hover:bg-surface-2/70",
			console: "bg-console-fg text-console hover:bg-console-fg/90",
			link: "text-accent underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 rounded-md px-5 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-6 text-base",
			xl: "h-14 rounded-lg px-7 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-12 w-full rounded-md border border-border bg-surface px-4 text-base text-fg shadow-sm transition-[border-color,box-shadow] duration-150", "placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-fg", className),
	...props
}));
Label.displayName = Root.displayName;
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
	ref,
	className: cn("relative h-1.5 w-full overflow-hidden rounded-full bg-surface-2", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full bg-accent transition-[width] duration-300 ease-out",
		style: { width: `${value ?? 0}%` }
	})
}));
Progress.displayName = Root$1.displayName;
var INDUSTRIES$1 = [
	{
		id: "fnb",
		label: "Nhà hàng & F&B"
	},
	{
		id: "spa",
		label: "Spa & thẩm mỹ"
	},
	{
		id: "health",
		label: "Nha khoa & y tế"
	},
	{
		id: "home",
		label: "Nội thất & xây dựng"
	},
	{
		id: "auto",
		label: "Gara & ô tô"
	},
	{
		id: "retail",
		label: "Cửa hàng bán lẻ"
	},
	{
		id: "edu",
		label: "Giáo dục"
	},
	{
		id: "other",
		label: "Ngành khác"
	}
];
var CITIES = [
	"Hà Nội",
	"TP. Hồ Chí Minh",
	"Đà Nẵng",
	"Hải Phòng",
	"Cần Thơ",
	"Bình Dương",
	"Đồng Nai",
	"Tỉnh thành khác"
];
var STATUSES = [
	{
		id: "none",
		label: "Chưa có hồ sơ Google Business",
		score: 18,
		note: "Google gần như không có tín hiệu để xếp bạn vào Local Pack."
	},
	{
		id: "buried",
		label: "Có hồ sơ nhưng không vào Top 3",
		score: 34,
		note: "Hồ sơ tồn tại, nhưng độ nổi bật và tín hiệu hành vi còn yếu hơn đối thủ."
	},
	{
		id: "unstable",
		label: "Đã lên top, không giữ được",
		score: 58,
		note: "Bạn đã có nền. Việc thiếu vận hành hàng ngày đang làm tuột hạng."
	},
	{
		id: "unknown",
		label: "Không chắc đang đứng ở đâu",
		score: 28,
		note: "Không đo thì không sửa. Đây là điểm mù phổ biến nhất ở SME."
	}
];
var LABOR = [
	"Đang đọc tín hiệu Google Business Profile",
	"Đối chiếu đối thủ trong bán kính 2 km",
	"Ước lượng khoảng trống Local Pack",
	"Xếp thứ tự 3 việc có đòn bẩy cao nhất"
];
var EMPTY = {
	industry: "",
	city: "",
	status: "",
	business: "",
	name: "",
	phone: ""
};
function scoreFor(status) {
	return STATUSES.find((s) => s.id === status)?.score ?? 30;
}
function Diagnosis() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [form, setForm] = (0, import_react.useState)(EMPTY);
	const [laborIndex, setLaborIndex] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const progress = done ? 100 : step === 3 ? 88 : step / 3 * 100;
	const industryLabel = INDUSTRIES$1.find((i) => i.id === form.industry)?.label;
	const statusMeta = STATUSES.find((s) => s.id === form.status);
	const health = (0, import_react.useMemo)(() => scoreFor(form.status), [form.status]);
	function patch(p) {
		setForm((f) => ({
			...f,
			...p
		}));
		setError("");
	}
	function nextFromStep0() {
		if (!form.industry) {
			setError("Chọn một ngành để tiếp tục.");
			return;
		}
		setStep(1);
	}
	function nextFromStep1() {
		if (!form.city || !form.status) {
			setError("Chọn khu vực và hiện trạng Maps.");
			return;
		}
		setStep(2);
	}
	function submit() {
		const phone = form.phone.replace(/\s/g, "");
		if (!form.name.trim()) {
			setError("Cho chúng tôi biết tên để gọi cho đúng.");
			return;
		}
		if (!/^0\d{9}$/.test(phone)) {
			setError("Số Zalo/điện thoại gồm 10 số, bắt đầu bằng 0.");
			return;
		}
		setStep(3);
		setLaborIndex(0);
		const lead = {
			...form,
			phone,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const prev = JSON.parse(localStorage.getItem("lgos-leads") ?? "[]");
			localStorage.setItem("lgos-leads", JSON.stringify([lead, ...prev].slice(0, 20)));
		} catch {}
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "chan-doan",
		className: "scroll-mt-24 border-t border-border py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-accent",
					children: "03 — Chẩn đoán"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl tracking-tight md:text-5xl",
					children: "Nhìn Maps của bạn trước khi đổ thêm tiền ads."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-base leading-relaxed text-muted",
					children: "Ba câu hỏi. Không cuộc gọi bán hàng. Bạn nhận điểm hồ sơ sơ bộ ngay trên trang, chuyên gia BGS gửi thứ tự ưu tiên qua Zalo trong 24 giờ."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3 text-sm text-muted",
					children: [
						"Miễn phí, không cần thẻ tín dụng",
						"Bắt đầu bằng hiện trạng, không phải gói dịch vụ",
						"Hủy liên lạc bất kỳ lúc nào"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-accent" }), t]
					}, t))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-muted",
							children: done ? "Báo cáo sơ bộ" : `Bước ${Math.min(step + 1, 3)} / 3`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs tabular-nums text-subtle",
							children: [Math.round(progress), "%"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: progress,
						className: "mb-8"
					}),
					step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl tracking-tight",
							children: "Bạn đang kinh doanh ngành nào?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Chọn sát nhất. Không có đáp án sai."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid grid-cols-2 gap-2",
							children: INDUSTRIES$1.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => patch({ industry: ind.id }),
								className: cn("min-h-12 rounded-lg border px-3 py-3 text-left text-sm transition-colors duration-150", form.industry === ind.id ? "border-fg bg-fg text-bg" : "border-border bg-bg hover:border-fg/40"),
								children: ind.label
							}, ind.id))
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-danger",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								onClick: nextFromStep0,
								children: ["Tiếp tục ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})
					] }),
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl tracking-tight",
							children: "Khu vực và hiện trạng Maps"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "biz",
									children: "Tên cửa hàng (nếu có)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "biz",
									className: "mt-2",
									placeholder: "Ví dụ: Hoa Spa Đa Kao",
									value: form.business,
									onChange: (e) => patch({ business: e.target.value })
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Thành phố kinh doanh"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap gap-2",
									children: CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => patch({ city: c }),
										className: cn("min-h-10 rounded-md border px-3 text-sm transition-colors duration-150", form.city === c ? "border-fg bg-fg text-bg" : "border-border bg-bg hover:border-fg/40"),
										children: c
									}, c))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Google Maps của bạn đang thế nào?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 grid gap-2",
									children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => patch({ status: s.id }),
										className: cn("min-h-12 rounded-lg border px-4 py-3 text-left text-sm transition-colors duration-150", form.status === s.id ? "border-fg bg-fg text-bg" : "border-border bg-bg hover:border-fg/40"),
										children: s.label
									}, s.id))
								})] })
							]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-danger",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								onClick: () => setStep(0),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Quay lại"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								onClick: nextFromStep1,
								children: ["Tiếp tục ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})]
						})
					] }),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl tracking-tight",
							children: "Nhận báo cáo qua Zalo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Không spam. Một tin trong 24 giờ — bạn có thể bảo dừng bất kỳ lúc nào."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Tên bạn"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								className: "mt-2",
								placeholder: "Nguyễn Minh",
								value: form.name,
								onChange: (e) => patch({ name: e.target.value }),
								autoComplete: "name"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "phone",
								children: "Số Zalo / điện thoại"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "phone",
								className: "mt-2",
								placeholder: "09xx xxx xxx",
								inputMode: "numeric",
								value: form.phone,
								onChange: (e) => patch({ phone: e.target.value }),
								autoComplete: "tel"
							})] })]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-danger",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								onClick: () => setStep(1),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Quay lại"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								onClick: submit,
								children: ["Nhận chẩn đoán ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})]
						})
					] }),
					step === 3 && !done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl tracking-tight",
								children: "Đang lập chẩn đoán sơ bộ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Việc này mất khoảng 15 giây — để báo cáo không phải form bỏ quên."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 space-y-3",
								children: LABOR.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 text-sm",
									children: [i < laborIndex ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-accent" }) : i === laborIndex ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin text-accent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-4 rounded-full border border-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: i > laborIndex ? "text-subtle" : "text-fg",
										children: line
									})]
								}, line))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-8 h-1.5 overflow-hidden rounded-full bg-surface-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "labor-bar relative h-full w-1/2 bg-accent" })
							})
						]
					}),
					done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-accent",
							children: "Peak · End"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl tracking-tight",
							children: "Bạn vừa làm việc mà phần lớn chủ doanh nghiệp trì hoãn."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-bg p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs uppercase tracking-widest text-muted",
										children: "Điểm hồ sơ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-display text-4xl tabular-nums",
										children: health
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: "/ 100 · sơ bộ"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-bg p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs uppercase tracking-widest text-muted",
									children: "Ưu tiên"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed",
									children: statusMeta?.note
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted",
							children: [
								industryLabel ? `${industryLabel} · ` : "",
								form.city,
								form.business ? ` · ${form.business}` : "",
								". Chuyên gia BGS sẽ gửi thứ tự 3 việc cần làm trước qua Zalo ",
								form.phone,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://maps.bgs.com.vn",
									target: "_blank",
									rel: "noreferrer",
									children: "Mở Local Growth OS"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.bgs.com.vn",
									target: "_blank",
									rel: "noreferrer",
									children: "Xem hệ thống BGS"
								})
							})]
						})
					] })
				]
			})]
		})
	});
}
function Logo({ inverted = false, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: cn("flex items-center gap-2.5", inverted ? "text-console-fg" : "text-fg"),
		"aria-label": "Local Growth OS",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			className: "size-8 shrink-0",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "16",
					r: "15",
					fill: "none",
					className: inverted ? "stroke-console-line" : "stroke-border",
					strokeWidth: "1.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M16 5.5c-4.6 0-8.3 3.5-8.3 8.4 0 5.6 8.3 14.2 8.3 14.2s8.3-8.6 8.3-14.2c0-4.9-3.7-8.4-8.3-8.4z",
					className: "fill-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "13.6",
					r: "2.5",
					className: inverted ? "fill-console" : "fill-bg"
				})
			]
		}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-sans text-xs font-medium uppercase tracking-widest", inverted ? "text-console-muted" : "text-muted"),
				children: "BGS"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg tracking-tight",
				children: "Local Growth OS"
			})]
		})]
	});
}
var BEFORE = [
	{
		name: "Lien Spa Quận 1",
		rating: 4.8,
		reviews: 312,
		meta: "Mở cửa · 1.2 km"
	},
	{
		name: "Atelier Beauty",
		rating: 4.7,
		reviews: 188,
		meta: "Mở cửa · 0.8 km"
	},
	{
		name: "The Glow Clinic",
		rating: 4.5,
		reviews: 97,
		meta: "Đóng cửa · 1.6 km"
	}
];
var AFTER = [
	{
		name: "Cửa hàng của bạn",
		rating: 4.9,
		reviews: 86,
		meta: "Mở cửa · 0.4 km",
		you: true
	},
	{
		name: "Lien Spa Quận 1",
		rating: 4.8,
		reviews: 312,
		meta: "Mở cửa · 1.2 km"
	},
	{
		name: "Atelier Beauty",
		rating: 4.7,
		reviews: 188,
		meta: "Mở cửa · 0.8 km"
	}
];
function MiniMap({ after }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full min-h-36 overflow-hidden bg-accent-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 opacity-70",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-6 left-4 h-16 w-24 rounded-sm bg-surface-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-10 right-6 h-20 w-16 rounded-sm bg-surface-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-8 left-10 h-14 w-28 rounded-sm bg-surface-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-0 h-1 w-full bg-bg-warm" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/3 h-full w-1 bg-bg-warm" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-2/3 h-full w-px bg-border" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
				className: cn("absolute size-7 drop-shadow-sm transition-all duration-500", after ? "top-1/3 left-1/2 -translate-x-1/2 text-accent" : "top-2/3 left-2/3 text-muted"),
				fill: "currentColor",
				strokeWidth: 1.5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-2 left-2 rounded-sm bg-surface/90 px-2 py-0.5 font-mono text-xs text-muted",
				children: "10.77°N 106.70°E"
			})
		]
	});
}
function Listing({ place, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex gap-3 border-b border-border px-3 py-3 last:border-b-0", place.you && "bg-accent-soft/60"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full font-mono text-xs", place.you ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"),
			children: index + 1
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("truncate text-sm font-medium", place.you && "text-accent"),
						children: place.name
					}), place.you && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-mono text-xs uppercase tracking-wide text-accent",
						children: "Bạn"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-0.5 flex items-center gap-1.5 text-xs text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-accent text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-fg",
							children: place.rating
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums",
							children: [
								"(",
								place.reviews,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["· ", place.meta] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex gap-3 text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3" }), " Gọi"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3" }), " Chỉ đường"]
					})]
				})
			]
		})]
	});
}
function MapsPack() {
	const [after, setAfter] = (0, import_react.useState)(false);
	const list = after ? AFTER : BEFORE;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-lift)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 border-b border-border px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-muted",
					children: "Local Pack"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex rounded-md bg-bg-warm p-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setAfter(false),
						className: cn("rounded-sm px-3 py-1.5 text-xs font-medium transition-colors duration-150", !after ? "bg-fg text-bg" : "text-muted hover:text-fg"),
						children: "Hiện tại"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setAfter(true),
						className: cn("rounded-sm px-3 py-1.5 text-xs font-medium transition-colors duration-150", after ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"),
						children: "Sau 60 ngày"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border bg-bg px-4 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-10 items-center rounded-md border border-border bg-surface px-3 text-sm text-muted",
					children: "spa gần tôi · Quận 1"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniMap, { after }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [list.map((place, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Listing, {
					place,
					index: i
				}, place.name)), !after && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-3 font-mono text-xs text-danger",
					children: "Cửa hàng của bạn không nằm trong 3 vị trí này."
				})] })]
			})
		]
	});
}
var TASKS = [
	{
		label: "Đăng bài Google Business trong tuần",
		done: true
	},
	{
		label: "Trả lời 4 đánh giá mới",
		done: true
	},
	{
		label: "Bổ sung 8 ảnh geo-tag khu vực Q.1",
		done: false
	},
	{
		label: "Đối chiếu NAP với 12 danh bạ",
		done: false
	}
];
var CELLS = [
	22,
	31,
	44,
	58,
	71,
	63,
	48,
	29,
	18,
	35,
	52,
	77,
	81,
	64,
	41,
	26,
	39,
	55,
	69,
	84,
	76,
	60,
	42,
	28
];
function heat(n) {
	if (n >= 75) return "bg-accent";
	if (n >= 55) return "bg-accent/70";
	if (n >= 40) return "bg-accent/40";
	return "bg-console-line";
}
function OsConsole() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl border border-console-line bg-console text-console-fg shadow-[var(--shadow-lift)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-console-line px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs uppercase tracking-widest text-console-muted",
						children: "Local Growth OS · live"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-console-muted",
					children: "maps.bgs.com.vn"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-px bg-console-line md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "console-grid bg-console p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest text-console-muted",
								children: "Điểm hồ sơ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-5xl tabular-nums tracking-tight",
								children: "72"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-console-muted",
								children: "+18 trong 30 ngày"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 h-1.5 overflow-hidden rounded-full bg-console-line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-3/4 bg-accent" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-console p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest text-console-muted",
								children: "Heatmap xếp hạng"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid grid-cols-8 gap-1",
								children: CELLS.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									title: `${n}`,
									className: cn("aspect-square rounded-xs", heat(n))
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-console-muted",
								children: "Bán kính 2 km · theo ô phố"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-console p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-console-muted",
							children: "Việc tuần này"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2.5",
							children: TASKS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-sm",
								children: [t.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-accent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 size-4 shrink-0 text-console-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: t.done ? "text-console-muted line-through" : "",
									children: t.label
								})]
							}, t.label))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 border-t border-console-line px-4 py-3 text-xs text-console-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Spa Quận 1 · Top 3 cho 4/7 từ khóa lõi" })]
			})
		]
	});
}
function SiteNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/70 bg-bg/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 text-sm text-muted md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#van-de",
							className: "hover:text-fg",
							children: "Vấn đề"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#os",
							className: "hover:text-fg",
							children: "Hệ điều hành"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cach-lam",
							className: "hover:text-fg",
							children: "Cách làm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#chan-doan",
							className: "hover:text-fg",
							children: "Chẩn đoán"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						className: "hidden sm:inline-flex",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://maps.bgs.com.vn",
							target: "_blank",
							rel: "noreferrer",
							children: "Đăng nhập"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#chan-doan",
							children: "Chẩn đoán Maps"
						})
					})]
				})
			]
		})
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b border-border", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-medium transition-colors hover:text-accent [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm text-muted data-[state=closed]:animate-none data-[state=open]:animate-none",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-5 leading-relaxed", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-fg text-bg",
		accent: "border-transparent bg-accent text-accent-fg",
		outline: "border-border bg-transparent text-muted",
		soft: "border-transparent bg-accent-soft text-accent"
	} },
	defaultVariants: { variant: "outline" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var STATS = [
	{
		k: "42%",
		v: "lượt bấm tìm kiếm địa phương rơi vào 3 vị trí trên bản đồ"
	},
	{
		k: "76%",
		v: "người tìm “gần tôi” ghé cửa hàng trong vòng 24 giờ"
	},
	{
		k: "3",
		v: "vị trí Local Pack — ngoài đó, bạn gần như không tồn tại"
	}
];
var PAINS = [
	{
		icon: Megaphone,
		title: "Ads đang nuôi đối thủ trên Maps",
		body: "Bạn trả tiền để khách tìm. Họ mở bản đồ, bấm vào cửa hàng đang chiếm Top 3 — thường không phải bạn."
	},
	{
		icon: Eye,
		title: "Hồ sơ im lặng bị đọc như cửa đã đóng",
		body: "Google Business không phải trang giới thiệu. Nếu không có bài, ảnh, đánh giá, chỉ đường — thuật toán hạ bạn."
	},
	{
		icon: MapPinned,
		title: "Không thiếu sản phẩm. Thiếu mặt.",
		body: "Khách đứng cách vài phút đi bộ. Họ không thấy tên bạn. Đây không phải bài toán branding. Đây là bài toán hiện diện."
	}
];
var STEPS = [
	{
		n: "01",
		title: "Chẩn đoán hiện trạng",
		body: "Không bắt đầu bằng gói dịch vụ. BGS đọc hồ sơ, đối thủ, khoảng trống Local Pack — rồi mới nói bạn cần làm gì."
	},
	{
		n: "02",
		title: "Ba việc có đòn bẩy",
		body: "Giảm ma sát trước khi cố tăng động lực. OS chỉ ưu tiên việc dễ làm, ra tín hiệu mạnh với Google."
	},
	{
		n: "03",
		title: "Vận hành mỗi ngày",
		body: "Bài đăng, ảnh, đánh giá, danh bạ NAP, hỏi-đáp. Prompt đúng lúc, không để hồ sơ ngủ."
	},
	{
		n: "04",
		title: "Giữ Top 3, báo cáo cuối tuần",
		body: "Trải nghiệm được nhớ ở điểm cao và điểm kết. Bạn nhận báo cáo rõ: lên, trượt, việc tuần sau."
	}
];
var COMPARE = [
	{
		name: "Tự làm",
		items: [
			"Rẻ, nhưng dễ bỏ dở",
			"Không đo đối thủ",
			"Google đổi luật, bạn không kịp"
		]
	},
	{
		name: "Local Growth OS",
		featured: true,
		items: [
			"Chẩn đoán trước khi bán",
			"Việc hàng ngày đã xếp sẵn",
			"Nhìn hạng theo ô phố, không đoán"
		]
	},
	{
		name: "Thuê agency",
		items: [
			"Báo cáo đẹp, bạn vẫn mù",
			"Phụ thuộc account",
			"Khó dừng, khó hiểu đang mua gì"
		]
	}
];
var INDUSTRIES = [
	"Nhà hàng, quán cafe, bakery",
	"Spa, nail, thẩm mỹ viện",
	"Nha khoa, phòng khám",
	"Nội thất, xây dựng, showroom",
	"Gara, rửa xe, phụ tùng",
	"Cửa hàng bán lẻ, thời trang",
	"Trung tâm giáo dục",
	"Mọi dịch vụ khách tìm “gần tôi”"
];
var FAQS = [
	{
		q: "Tôi chưa có website thì có làm Maps được không?",
		a: "Được. Local Pack xếp hạng chủ yếu từ Google Business Profile, đánh giá, khoảng cách và độ nổi bật — không bắt buộc phải có website hoàn hảo. Website giúp, nhưng không phải cửa vào."
	},
	{
		q: "Bao lâu thì vào Top 3?",
		a: "Tùy mật độ đối thủ và độ hoàn thiện hồ sơ. Thị trường ít cạnh tranh có thể thấy tín hiệu trong vài tuần. Khu vực nóng (spa, nha khoa, F&B trung tâm) thường tính bằng 45–90 ngày vận hành liên tục — không phải một lần “setup”."
	},
	{
		q: "Khác thuê SEO Maps ở chỗ nào?",
		a: "BGS không bắt đầu bằng giải pháp. Local Growth OS là lớp vận hành: chẩn đoán nguyên nhân, xếp việc, theo dõi hạng. Bạn thấy hệ thống, không mua một hộp đen."
	},
	{
		q: "Tôi có phải rành kỹ thuật không?",
		a: "Không. Form chẩn đoán 3 bước. Việc tuần được viết bằng tiếng Việt, một việc mỗi lần. OS chịu phần nhắc và theo dõi."
	},
	{
		q: "Có bị khóa hồ sơ Google không?",
		a: "Chúng tôi không nhồi từ khóa vào tên, không mua đánh giá ảo, không tạo hồ sơ giả. Làm đúng tín hiệu Google muốn: hồ sơ thật, hoạt động thật, khách thật."
	},
	{
		q: "Chẩn đoán có bị gọi điện bán hàng không?",
		a: "Một tin Zalo trong 24 giờ với thứ tự việc cần làm. Bạn bảo dừng là dừng. Không cần thẻ, không hợp đồng ngay trên landing."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-bg pb-20 text-fg md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden atlas-grid",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "soft",
							className: "rise-in",
							children: "Local SEO OS cho chủ doanh nghiệp nhỏ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "rise-in rise-in-delay-1 mt-6 font-display text-4xl leading-tight tracking-tight md:text-6xl",
							children: [
								"Người cần bạn đang cách vài phút đi bộ.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "Maps đang chỉ họ sang chỗ khác."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise-in rise-in-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted",
							children: "Local Growth OS giúp cửa hàng địa phương chiếm và giữ Top 3 Google Maps — nơi gần một nửa lượt bấm tìm kiếm gần đây rơi vào — mà không cần thuê agency hay tự mò thuật toán."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise-in rise-in-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "xl",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#chan-doan",
									children: ["Nhận chẩn đoán Maps miễn phí", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "xl",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#os",
									children: "Xem hệ điều hành"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rise-in rise-in-delay-4 mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "size-3.5" }), " 3 phút"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), " Không cần thẻ"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hủy liên lạc bất kỳ lúc nào" })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rise-in rise-in-delay-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapsPack, {})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-bg-warm/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3",
					children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl tabular-nums tracking-tight text-accent",
						children: s.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: s.v
					})] }, s.k))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "van-de",
				className: "scroll-mt-24 py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-accent",
							children: "01 — Nỗi đau"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-3xl font-display text-3xl tracking-tight md:text-5xl",
							children: "Cửa hàng mở cửa. Google đang đóng hộp bạn ở trang không ai kéo tới."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-4 md:grid-cols-3",
							children: PAINS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
										className: "size-5 text-accent",
										strokeWidth: 1.75
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-display text-xl tracking-tight",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted",
										children: p.body
									})
								]
							}, p.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-accent",
							children: "02 — Vì sao Maps trước"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl tracking-tight md:text-5xl",
							children: "Vì khách không “nghiên cứu”. Họ đang muốn tới."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted",
							children: "Tìm “spa gần tôi” hay “nha khoa quận 3” không phải hành trình 12 bước. Não bộ Hệ thống 1 chọn 3 cái tên có sao, khoảng cách, nút gọi. Nếu bạn không nằm trong đó, website đẹp cũng không được mở."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-muted",
							children: "BGS™ không bán thêm một chiến dịch. Chúng tôi chỉnh đúng chỗ ma sát: hồ sơ, tín hiệu, vận hành — rồi mới nói tới quảng cáo."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "rounded-2xl bg-fg p-8 text-bg md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl leading-snug tracking-tight md:text-3xl",
							children: "“65% vấn đề doanh thu không nằm ở marketing. Nằm ở chỗ khách không tìm thấy bạn vào đúng giây họ cần.”"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
							className: "mt-6 font-mono text-xs uppercase tracking-widest text-bg/60",
							children: "BGS · Business Growth System"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "os",
				className: "scroll-mt-24 bg-console py-20 text-console-fg md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-accent",
							children: "Hệ điều hành"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "max-w-2xl font-display text-3xl tracking-tight md:text-5xl",
								children: "Một OS, không phải một file Excel hạng Maps."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-sm text-sm leading-relaxed text-console-muted",
								children: "Điểm hồ sơ, heatmap theo ô phố, việc tuần — cùng một màn hình. Bạn vận hành Local SEO như vận hành ca làm việc, không phải “nhờ bạn đăng giúp”."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OsConsole, {})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "cach-lam",
				className: "scroll-mt-24 py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-accent",
							children: "Cách làm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-3xl font-display text-3xl tracking-tight md:text-5xl",
							children: "Giảm ma sát trước. Tăng động lực sau. Prompt mỗi ngày."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4",
							children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "bg-surface p-6 md:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs text-subtle",
										children: s.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-xl tracking-tight",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted",
										children: s.body
									})
								]
							}, s.n))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-accent",
							children: "So sánh"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl tracking-tight md:text-5xl",
							children: "Chọn cách có mặt — không chọn cách bận."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-4 md:grid-cols-3",
							children: COMPARE.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: c.featured ? "rounded-2xl bg-fg p-6 text-bg shadow-[var(--shadow-lift)] md:p-8" : "rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs uppercase tracking-widest opacity-60",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-3 text-sm leading-relaxed",
									children: c.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
								})]
							}, c.name))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden border-t border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/street.jpg",
						alt: "Phố cửa hàng địa phương về đêm",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-console/80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-6xl px-5 py-24 md:py-32",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-3xl font-display text-3xl tracking-tight text-console-fg md:text-5xl",
							children: "Từ phố cổ đến hẻm Sài Gòn — khách mở Maps trước khi bước vào cửa."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 grid gap-3 sm:grid-cols-2",
							children: INDUSTRIES.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-console-line/80 py-2 text-sm text-console-fg/90",
								children: i
							}, i))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diagnosis, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "faq",
				className: "border-t border-border py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-accent",
						children: "Lo lắng"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl tracking-tight md:text-5xl",
						children: "Những câu hỏi trước khi bấm gửi."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						children: FAQS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: `q-${i}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: f.a })]
						}, f.q))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-bg-warm/60 py-20 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-5 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl tracking-tight md:text-5xl",
							children: "Đừng tăng ngân sách ads khi Maps còn để trống ghế."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted",
							children: "Một chẩn đoán. Một thứ tự việc. Rồi hãy quyết định có mở Local Growth OS hay không."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "xl",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#chan-doan",
									children: ["Bắt đầu chẩn đoán", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: "Miễn phí · Không cần thẻ · Phản hồi qua Zalo"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-sm text-muted",
							children: "Một lớp của BGS™ — Business Growth System. Chẩn đoán đúng vấn đề trước khi đầu tư giải pháp."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-muted hover:text-fg",
								href: "https://www.bgs.com.vn",
								target: "_blank",
								rel: "noreferrer",
								children: "bgs.com.vn"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-muted hover:text-fg",
								href: "https://maps.bgs.com.vn",
								target: "_blank",
								rel: "noreferrer",
								children: "maps.bgs.com.vn"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur-md md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					size: "lg",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#chan-doan",
						children: ["Chẩn đoán Maps miễn phí", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, { className: "size-4" })]
					})
				})
			})
		]
	});
}
//#endregion
export { Home as component };
