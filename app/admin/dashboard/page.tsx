import Link from "next/link";

export default function DashboardPage() {
  const cards = [
    "Hero",
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Contact",
    "Settings",
  ];

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-8 text-4xl font-bold">Portfolio Admin</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h2 className="text-2xl font-semibold">{card}</h2>

            <p className="mt-2 text-sm text-gray-400">
              Manage {card} section
            </p>

            {card === "Hero" ? (
              <Link
                href="/admin/dashboard/hero"
                className="mt-6 inline-block rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black"
              >
                Open
              </Link>
            ) : (
              <button className="mt-6 rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black">
                Open
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}