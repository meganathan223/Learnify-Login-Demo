export default function CourseCard({ course }) {
  return (
    <article
      className="overflow-hidden rounded-2xl border
      border-slate-200 bg-white transition hover:-translate-y-1
      hover:shadow-lg"
    >
      <div
        className={`flex h-32 items-center justify-center
        text-5xl ${course.color}`}
      >
        <span aria-hidden="true">{course.icon}</span>
      </div>

      <div className="p-5">
        <p
          className="text-xs font-semibold uppercase tracking-wide
          text-indigo-600"
        >
          {course.category}
        </p>

        <h3 className="mt-2 font-bold text-slate-900">{course.title}</h3>

        <p className="mt-1 text-sm text-slate-500">{course.lessons} lessons</p>

        <div className="mt-5 flex items-center justify-between text-xs">
          <span className="font-medium text-slate-600">
            {course.progress}% complete
          </span>
          <span className="text-slate-400">
            {course.progress === 100 ? "Completed" : "In progress"}
          </span>
        </div>

        <div
          className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-label={`${course.title} progress`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={course.progress}
        >
          <div
            className="h-full rounded-full bg-indigo-600 transition-all"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}
