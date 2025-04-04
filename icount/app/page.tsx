import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iCount",
  description: "Inventory management app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-900 text-white p-4">
            <h1 className="text-xl font-bold mb-4">iCount</h1>
            <nav className="space-y-2">
              <Link href="/dashboard">Dashboard</Link>
              <br />
              <Link href="/inventory">Inventory</Link>
              <br />
              <Link href="/cycle-counts">Cycle Counts</Link>
              <br />
              <Link href="/users">Users</Link>
              <br />
              <Link href="/settings">Settings</Link>
              <br />
              <Link href="/logout">Logout</Link>
              <br />
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-gray-400">{children}</main>
        </div>
      </body>
    </html>
  );
}
