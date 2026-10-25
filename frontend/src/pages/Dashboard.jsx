import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import CourseCard from "../components/dashboard/CourseCard";

const courses = [
  {
    title: "React Fundamentals",
    category: "Frontend",
    lessons: 24,
    progress: 68,
    icon: "⚛️",
    color: "bg-indigo-50",
  },
  {
    title: "JavaScript Essentials",
    category: "Programming",
    lessons: 18,
    progress: 100,
    icon: "⚡",
    color: "bg-amber-50",
  },
  {
    title: "UI Design Basics",
    category: "Design",
    lessons: 16,
    progress: 35,
    icon: "🎨",
    color: "bg-pink-50",
  },
];

export default function DashboardPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  function handleLogout() {
    navigate("/", { replace: true });
  }

  return (
    <div className="min-h-screen bg-slate-50 md:flex">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <Navbar user={user} onLogout={handleLogout} />

        <main className="mx-auto max-w-7xl p-5 sm:p-8">
          <section>
            <p className="text-sm font-medium text-indigo-600">
              YOUR LEARNING SPACE
            </p>

            <h1
              className="mt-2 text-3xl font-bold tracking-tight
              text-slate-900"
            >
              Welcome back, {user.name.split(" ")[0]}! 👋
            </h1>

            <p className="mt-2 text-slate-500">
              Keep going. You're making progress toward your goals.
            </p>
          </section>

          <section className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Enrolled courses", value: "03", icon: "📚" },
              { label: "Lessons completed", value: "28", icon: "✓" },
              { label: "Learning hours", value: "16.5", icon: "◷" },
            ].map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-slate-200
                  bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <span className="text-xl">{stat.icon}</span>
                </div>
                <p className="mt-4 text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </article>
            ))}
          </section>

          <section className="mt-10">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Continue learning
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Pick up where you left off.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
