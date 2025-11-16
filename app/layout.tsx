import './globals.css';
import { ReactNode } from 'react';
import { navLinks } from '@/app/ui/dashboard/nav-links';

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
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-500 focus:bg-blue-700"
                  >
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </a>
                ))}
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