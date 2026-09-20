/** URL sản phẩm chính (Local Growth OS). Đổi bằng VITE_APP_ORIGIN khi deploy. */
export const APP_ORIGIN =
  (typeof import.meta !== "undefined" &&
    (import.meta as any).env?.VITE_APP_ORIGIN) ||
  "https://maps.bgs.com.vn";

export const ZALO_OA =
  (typeof import.meta !== "undefined" &&
    (import.meta as any).env?.VITE_ZALO_OA) ||
  "https://zalo.me/bgs";

export function appSignupUrl(params?: Record<string, string>) {
  const url = new URL("/signup", APP_ORIGIN);
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v) url.searchParams.set(k, v);
    });
  }
  url.searchParams.set("from", "landing-demo");
  return url.toString();
}

export function appLoginUrl() {
  return new URL("/login", APP_ORIGIN).toString();
}

export function appLeadsUrl() {
  return new URL("/api/public/leads", APP_ORIGIN).toString();
}
