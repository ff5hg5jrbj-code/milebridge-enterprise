import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-10 py-4 flex justify-between items-center fixed top-0 z-50">
      <div className="text-2xl font-bold">MileBridge</div>
      <div className="space-x-8">
        <Link href="/">Home</Link>
        <Link href="/portal">Client Portal</Link>
      </div>
    </nav>
  );
}
