import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KỶ NGUYÊN HEALTH CARE - Giải pháp chăm sóc sức khỏe cá nhân",
  description:
    "KỶ NGUYÊN HEALTH CARE - Giải pháp chăm sóc sức khỏe cá nhân toàn diện và tận tâm tại nhà và bệnh viện. Đội ngũ chăm sóc viên chuyên nghiệp, được đào tạo bài bản.",
  icons: {
    icon: "https://raw.githubusercontent.com/thanhtran1607/kynguyenhealthcare_1/refs/heads/main/image/LogoDon@4x.png",
    apple:
      "https://raw.githubusercontent.com/thanhtran1607/kynguyenhealthcare_1/refs/heads/main/image/LogoDon@4x.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
