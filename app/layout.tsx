import './globals.css';
import { ReactNode } from 'react';
import { HomeIcon, DocumentTextIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <nav className="w-64 bg-blue-600 text-white p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl font-bold">🌐 Acme</span>
              </div>
              <div className="space-y-2">
                <a
                  href="/home"
                  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-500 focus:bg-blue-700 bg-blue-700"
                  aria-current="page"
                >
                  <HomeIcon className="w-5 h-5" />
                  Home
                </a>
                <a
                  href="/invoices"
                  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-500 focus:bg-blue-700"
                >
                  <DocumentTextIcon className="w-5 h-5" />
                  Invoices
                </a>
                <a
                  href="/customers"
                  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-500 focus:bg-blue-700"
                >
                  <UsersIcon className="w-5 h-5" />
                  Customers
                </a>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 bg-black text-white p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}