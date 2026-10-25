import { useNavigate } from "react-router-dom";
import BrandPanel from "../components/BrandPanel";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();

  function handleSuccess(user) {
    navigate("/dashboard", {
      replace: true,
      state: { user },
    });
  }

  return (
    <main className="min-h-screen bg-white lg:flex">
      <BrandPanel />
      <section
        className="flex min-h-screen w-full items-center
        justify-center px-6 py-10 sm:px-10 lg:w-1/2 lg:px-12 xl:px-20"
      >
        <div className="w-full max-w-md">
          <LoginForm onSuccess={handleSuccess} />
        </div>
      </section>
    </main>
  );
}
