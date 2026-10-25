export default function Navbar({ user, onLogout }) {
  return (
    <header
      className="flex flex-wrap items-center justify-between
      gap-4 border-b border-slate-200 bg-white px-5 py-4 sm:px-8"
    >
      <div>
        <p className="text-sm text-slate-500">Learning space</p>
        <h2 className="text-lg font-bold text-slate-900">Dashboard</h2>
      </div>

      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center
          rounded-full bg-indigo-100 font-bold text-indigo-700"
        >
          {(user?.name || "Learner").charAt(0).toUpperCase()}
        </div>

        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-slate-800">
            {user?.name || "Learner"}
          </p>
          <p className="text-xs text-slate-500">Student account</p>
        </div>

        <button
          onClick={onLogout}
          className="ml-2 rounded-lg border border-slate-200
            px-3 py-2 text-sm font-medium text-slate-600
            transition hover:bg-slate-50 cursor-pointer"
        >
          Log out
        </button>
      </div>
    </header>
  );
}
