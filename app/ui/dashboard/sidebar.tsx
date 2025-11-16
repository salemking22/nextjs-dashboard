import { navLinks } from './nav-links';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className="space-y-2 p-4 bg-gray-100 h-full">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded"
        >
          <link.icon className="h-5 w-5" />
          <span>{link.name}</span>
        </Link>
      ))}
    </nav>
  );
}