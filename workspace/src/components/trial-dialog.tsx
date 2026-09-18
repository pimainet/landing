import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { saveTrial } from "@/lib/trial";

type TrialDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function TrialDialog({ open, onOpenChange }: TrialDialogProps) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [mapsUrl, setMapsUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  function reset() {
    setName("");
    setEmail("");
    setClientName("");
    setMapsUrl("");
    setBusy(false);
    setError("");
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) {
      setError("Điền tên và email để tạo workspace.");
      return;
    }
    setBusy(true);
    saveTrial({
      name: name.trim(),
      email: email.trim(),
      clientName: clientName.trim(),
      mapsUrl: mapsUrl.trim(),
    });
    await new Promise((r) => setTimeout(r, 900));
    onOpenChange(false);
    reset();
    void navigate({ to: "/demo" });
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) reset();
        onOpenChange(next);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bắt đầu miễn phí — nhận audit ngay</DialogTitle>
          <DialogDescription>
            Điền thông tin để tạo workspace. Hệ thống sẽ tạo audit mẫu và lộ trình 30 ngày cho cửa hàng của bạn trong vài phút. Không cần thẻ tín dụng.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="trial-name">Tên của bạn *</Label>
            <Input
              id="trial-name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nguyễn Minh"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="trial-email">Email *</Label>
            <Input
              id="trial-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ban@cuahang.vn"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="trial-client">
              Tên cửa hàng / doanh nghiệp
            </Label>
            <Input
              id="trial-client"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Bếp Nhà Đa Kao"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="trial-maps">
              Link Google Maps (nếu có)
            </Label>
            <Input
              id="trial-maps"
              value={mapsUrl}
              onChange={(e) => setMapsUrl(e.target.value)}
              placeholder="https://maps.google.com/..."
            />
          </div>
          {error ? <p className="text-sm text-flag">{error}</p> : null}
          <Button type="submit" size="lg" disabled={busy} className="w-full">
            {busy ? "Đang tạo workspace…" : "Nhận audit + lộ trình 30 ngày"}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Không ràng buộc · Dừng bất kỳ lúc nào · Bắt đầu trong 2 phút
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
