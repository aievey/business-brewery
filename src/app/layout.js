import "./globals.css";
// import NavigationBar from "@/components/navigation-bar";
import { Header } from "@/components/nav-bar/header";
export const metadata = {
  title: "Business brewery",
  description:
    "update/ renew/ or even create from scratch your business profile online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
