import { useState } from "react";
import FormInput from "./FormInput";
import { validateLogin } from "../utils/validateAuth";
import { loginUser } from "../services/authService";

const demoCredentials = {
  email: "demo@learnify.com",
  password: "Learnify123",
};

export default function LoginForm({ onSuccess }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setMessage("");
  }

  function handleQuickFill() {
    setForm(demoCredentials);
    setErrors({});
    setMessage("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateLogin(form);
    setErrors(validationErrors);
    setMessage("");

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const user = await loginUser(form);
      onSuccess(user);
    } catch (error) {
      setMessage(error.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <p className="text-sm font-semibold tracking-wide text-indigo-600">
          LEARNIFY ACCOUNT
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          Welcome back!
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Sign in to continue your learning journey.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <FormInput
          label="Email address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          error={errors.email}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          autoComplete="current-password"
          error={errors.password}
        />

        {message && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50
              px-4 py-3 text-sm text-red-700"
          >
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2
            rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-semibold
            text-white shadow-lg shadow-indigo-600/20 transition
            hover:bg-indigo-700 focus:outline-none focus:ring-4
            focus:ring-indigo-200 disabled:cursor-not-allowed
            disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in to Learnify"}
          {!loading && <span aria-hidden="true">→</span>}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs text-slate-400">OR TRY THE DEMO</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-slate-800">Demo account</p>

          <button
            type="button"
            onClick={handleQuickFill}
            className="rounded-lg bg-white px-3 py-1.5 text-xs
              font-semibold text-indigo-700 shadow-sm transition
              hover:bg-indigo-100"
          >
            Quick Fill
          </button>
        </div>

        <div className="mt-3 space-y-2 text-sm">
          <p className="text-slate-600">
            Email:{" "}
            <span className="font-medium text-slate-800">
              {demoCredentials.email}
            </span>
          </p>

          <p className="text-slate-600">
            Password:{" "}
            <span className="font-medium text-slate-800">
              {demoCredentials.password}
            </span>
          </p>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        © 2026 Learnify.
      </p>
    </div>
  );
}
