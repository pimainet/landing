export type Severity = "critical" | "high" | "medium" | "low";

export type AuditIssue = {
  id: string;
  severity: Severity;
  title: string;
  detail: string;
  impact: string;
};

export type RoadmapTask = {
  id: string;
  title: string;
  done: boolean;
};

export type RoadmapWeek = {
  week: number;
  label: string;
  focus: string;
  tasks: RoadmapTask[];
};

export type CriticStatus = "pass" | "flag";

export type GbpPost = {
  id: string;
  title: string;
  body: string;
  critic: CriticStatus;
  criticNote: string;
};

export type SampleAudit = {
  clientName: string;
  category: string;
  address: string;
  mapsHint: string;
  score: number;
  lastPostDays: number;
  photos: number;
  reviews: number;
  rating: number;
  issues: AuditIssue[];
  weeks: RoadmapWeek[];
  posts: GbpPost[];
};

export const SAMPLE_AUDIT: SampleAudit = {
  clientName: "Bếp Nhà Đa Kao",
  category: "Nhà hàng Việt Nam",
  address: "48 Nguyễn Đình Chiểu, Đa Kao, Quận 1, TP.HCM",
  mapsHint: "maps.google.com/bep-nha-dakao",
  score: 61,
  lastPostDays: 47,
  photos: 8,
  reviews: 126,
  rating: 4.4,
  issues: [
    {
      id: "nap",
      severity: "critical",
      title: "NAP không khớp giữa Maps và website",
      detail:
        "Số điện thoại trên Google Business Profile là 028 3822 4411, website đang để 0903 118 226. Tên rút gọn trên bảng hiệu khác với tên listing.",
      impact: "Làm giảm tín hiệu xác thực địa phương và gây nhầm khi khách gọi.",
    },
    {
      id: "posts",
      severity: "high",
      title: "Không có bài đăng trong 47 ngày",
      detail:
        "GBP không có Google Post nào kể từ giữa tháng trước. Đối thủ cùng cụm từ khóa đang đăng 2–3 bài/tuần.",
      impact: "Mất diện tích trên local pack và giảm tương tác từ khách cũ.",
    },
    {
      id: "category",
      severity: "high",
      title: "Danh mục chính quá chung",
      detail:
        "Danh mục đang là “Nhà hàng”. Nên chuyển sang “Nhà hàng Việt Nam” và bổ sung thuộc tính: cơm tấm, bún, không gian gia đình.",
      impact: "Google khó xếp hạng đúng ý định tìm kiếm local.",
    },
    {
      id: "photos",
      severity: "medium",
      title: "Thiếu ảnh món close-up và không gian giờ cao điểm",
      detail:
        "8 ảnh, chủ yếu mặt tiền. Không có ảnh món, menu, hay bàn lúc đông khách.",
      impact: "Tỷ lệ click từ pack thấp hơn đối thủ có album đầy đủ.",
    },
    {
      id: "hours",
      severity: "medium",
      title: "Giờ mở cửa chưa có ghi chú ngày lễ",
      detail:
        "Giờ thường nhật đã đúng, nhưng thiếu special hours cho Tết và nghỉ trưa Chủ nhật.",
      impact: "Khách đến cửa đóng sẽ để review kém.",
    },
    {
      id: "qa",
      severity: "low",
      title: "Hỏi & đáp còn trống",
      detail:
        "Không có câu hỏi nào được chủ động gieo. Khách đang hỏi chỗ gửi xe trên review.",
      impact: "Bỏ lỡ FAQ giàu từ khóa không cạnh tranh.",
    },
    {
      id: "menu",
      severity: "low",
      title: "Chưa khai báo Sản phẩm / Thực đơn",
      detail:
        "Món chủ lực (cơm tấm sườn, bún thịt nướng) chưa được thêm vào mục Products.",
      impact: "Mất rich result cho món và giá.",
    },
  ],
  weeks: [
    {
      week: 1,
      label: "Tuần 1",
      focus: "Sửa nền tảng",
      tasks: [
        { id: "w1-1", title: "Chuẩn hóa NAP trên GBP, website, Facebook", done: false },
        { id: "w1-2", title: "Đổi danh mục chính + 3 thuộc tính món", done: false },
        { id: "w1-3", title: "Tải 12 ảnh: món, không gian, đội ngũ, menu", done: false },
        { id: "w1-4", title: "Thêm special hours cho Tết", done: false },
      ],
    },
    {
      week: 2,
      label: "Tuần 2",
      focus: "Hiện diện & nội dung",
      tasks: [
        { id: "w2-1", title: "Đăng 3 Google Post đã qua bước Critic", done: false },
        { id: "w2-2", title: "Gieo 5 cặp Hỏi & đáp (gửi xe, trẻ em, đặt bàn)", done: false },
        { id: "w2-3", title: "Thêm 6 món vào Products kèm giá", done: false },
      ],
    },
    {
      week: 3,
      label: "Tuần 3",
      focus: "Uy tín",
      tasks: [
        { id: "w3-1", title: "Trả lời 15 review chưa phản hồi", done: false },
        { id: "w3-2", title: "Nhờ 8 khách quen để lại review có từ khóa món", done: false },
        { id: "w3-3", title: "Cập nhật mô tả 750 ký tự, nhắm 3 cụm local", done: false },
      ],
    },
    {
      week: 4,
      label: "Tuần 4",
      focus: "Đo lường & theo dõi",
      tasks: [
        { id: "w4-1", title: "Gắn UTM cho nút website / chỉ đường", done: false },
        { id: "w4-2", title: "Đối chiếu 3 đối thủ cùng phường", done: false },
        { id: "w4-3", title: "Xem lại tuần: điểm audit, bài đăng, việc đã xong", done: false },
      ],
    },
  ],
  posts: [
    {
      id: "p1",
      title: "Cơm trưa văn phòng — set sườn bì chả",
      body: "Từ thứ Hai đến thứ Sáu, 11:00–13:30, Bếp Nhà phục vụ set cơm tấm sườn bì chả cho khách quanh Đa Kao. Ngồi tại chỗ hoặc mang về. Địa chỉ: 48 Nguyễn Đình Chiểu.",
      critic: "pass",
      criticNote: "Khớp giờ mở cửa, món và địa chỉ trên hồ sơ.",
    },
    {
      id: "p2",
      title: "Chỗ gửi xe máy trong hẻm",
      body: "Khách đến ăn tối có thể gửi xe máy trong hẻm bên phải cửa hàng, miễn phí trong giờ mở cửa. Nhân viên chỉ chỗ khi bạn tới.",
      critic: "pass",
      criticNote: "Thông tin vận hành hợp lý, không bịa ưu đãi.",
    },
    {
      id: "p3",
      title: "Giảm 50% toàn bộ menu cuối tuần",
      body: "Cuối tuần này giảm 50% tất cả món, không điều kiện. Đặt bàn trước để giữ chỗ.",
      critic: "flag",
      criticNote:
        "Hồ sơ và dữ liệu khách không có chương trình giảm 50%. Không đưa bài này ra duyệt cho đến khi có bằng chứng.",
    },
    {
      id: "p4",
      title: "Bún thịt nướng cho gia đình cuối tuần",
      body: "Cuối tuần Bếp Nhà mở đến 21:30. Phần bún thịt nướng dành cho 2–4 người, phù hợp gia đình ngồi tầng trệt.",
      critic: "pass",
      criticNote: "Giờ cuối tuần khớp listing. Không bịa giá hay khuyến mãi.",
    },
  ],
};

export const SEVERITY_LABEL: Record<Severity, string> = {
  critical: "Ưu tiên cao",
  high: "Cao",
  medium: "Trung bình",
  low: "Thấp",
};

export function scoreLabel(score: number) {
  if (score >= 80) return "Ổn định";
  if (score >= 60) return "Cần xử lý";
  return "Yếu nền tảng";
}
