import "./globals.css";
import Sidebar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <div className="min-h-screen bg-linear-to-br from-slate-100 via-white to-blue-50">
          {/* <Sidebar /> */}
          <main className="bg-white border shadow-sm p-6 hover:shadow-md transition">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}