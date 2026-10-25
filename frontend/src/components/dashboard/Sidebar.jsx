import { NavLink } from "react-router-dom";

const links = [
  { label: "Overview", icon: "▦" },
  { label: "My Courses", icon: "▤" },
  { label: "Learning Progress", icon: "◷" },
  { label: "Certificates", icon: "♧" },
];

export default function Sidebar() {
  return (
    <aside
      className="hidden min-h-screen w-64 shrink-0
      border-r border-slate-200 bg-white p-6 md:block"
    >
      <div className="mb-10 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center
          rounded-xl bg-indigo-600 text-xl text-white"
        >
          💻
        </div>
        <span className="text-lg font-bold text-slate-900">Learnify</span>
      </div>

      <p
        className="mb-4 text-xs font-semibold uppercase tracking-wider
        text-slate-400"
      >
        Learning space
      </p>

      <nav className="space-y-2">
        {links.map((link, index) => (
          <NavLink
            key={link.label}
            to="/dashboard"
            end={index === 0}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm
              font-medium transition ${
                isActive && index === 0
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            <span aria-hidden="true">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-10 rounded-2xl bg-slate-950 p-5 text-white">
        <p className="text-sm font-semibold">Keep learning!</p>
        <p className="mt-2 text-xs leading-5 text-slate-400">
          Small steps every day lead to big achievements.
        </p>
      </div>
    </aside>
  );
}
