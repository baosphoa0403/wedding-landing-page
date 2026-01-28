import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dịch vụ nấu tiệc tại nhà",
  description: "Dịch vụ nấu tiệc tại nhà trọn gói",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
