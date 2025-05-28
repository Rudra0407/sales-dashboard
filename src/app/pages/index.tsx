// pages/index.tsx

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Link
        href="/dashboard"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        View Sales Dashboard
      </Link>
    </main>
  );
}
