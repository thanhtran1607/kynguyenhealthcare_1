import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Liên hệ - KỶ NGUYÊN HEALTH CARE",
  description:
    "Liên hệ KỶ NGUYÊN HEALTH CARE - Câu hỏi thường gặp, tư vấn dịch vụ chăm sóc sức khỏe, tuyển dụng nhân sự.",
};

export default function LienHePage() {
  return <ContactPageClient />;
}
