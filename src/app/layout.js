import "./globals.css";

export const metadata = {
  title: "Week 10 Explorations",
  description: "Demonstration of Next.js for CS290",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
