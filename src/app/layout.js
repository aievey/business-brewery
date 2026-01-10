import "./globals.css";

export const metadata = {
  title: "Business brewery",
  description:
    "update/ renew/ or even create from scratch your business profile online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <div className="fixed inset-0 -z-10">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-400/50 rounded-full blur-3xl" />
          <div className="absolute bottom-1/2 right-0 w-120 h-120 bg-fuchsia-500/50 rounded-full blur-3xl" />
        </div> */}

        {children}
      </body>
    </html>
  );
}
