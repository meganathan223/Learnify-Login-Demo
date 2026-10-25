export default function BrandPanel() {
  return (
    <section
      className="relative flex min-h-[300px] flex-col
      justify-between overflow-hidden bg-slate-950 p-8 text-white
      sm:p-10 lg:min-h-screen lg:w-1/2 lg:p-14"
    >
      <div
        className="absolute -left-24 top-24 h-72 w-72
        rounded-full bg-indigo-600/30 blur-3xl"
      />

      <div
        className="absolute -right-20 bottom-10 h-72 w-72
        rounded-full bg-violet-600/20 blur-3xl"
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center
            rounded-2xl bg-indigo-800 text-2xl shadow-lg shadow-indigo-500/30"
          >
            💻
          </div>

          <span className="text-xl font-bold tracking-tight">Learnify</span>
        </div>
      </div>

      <div className="relative z-10 my-10 max-w-lg lg:my-0">
        <span
          className="inline-flex rounded-full border border-white/15
          bg-white/5 px-4 py-2 text-xs font-medium text-indigo-200"
        >
          YOUR LEARNING JOURNEY STARTS HERE
        </span>

        <h1
          className="mt-6 text-4xl font-bold leading-tight tracking-tight
          sm:text-5xl xl:text-6xl"
        >
          Learn something new.
          <span className="mt-2 block text-indigo-400">
            Become something more.
          </span>
        </h1>

        <div className="mt-8 space-y-4 text-sm text-slate-200">
          <p>✓ Explore courses across different subjects</p>
          <p>✓ Keep track of your learning progress</p>
          <p>✓ Learn at your own pace, anytime</p>
        </div>
      </div>

      <p className="relative z-10 text-xs text-slate-500">© 2026 Learnify.</p>
    </section>
  );
}
