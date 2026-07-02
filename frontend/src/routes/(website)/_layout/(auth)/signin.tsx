import { createFileRoute } from "@tanstack/react-router";
import { Eye, EyeOff, Lock, LogIn, Mail, User, UserPlus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/(website)/_layout/(auth)/signin")({
  component: SignInPage,
});

type AuthTab = "login" | "register";

function SignInPage() {
  const [tab, setTab] = useState<AuthTab>("login");

  const toggle = (t: AuthTab) => () => setTab(t);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="mb-6 flex rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
          <button
            className={`inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-medium text-sm transition-colors ${
              tab === "login"
                ? "bg-white text-gray-900 shadow-sm dark:bg-gray-950 dark:text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
            onClick={toggle("login")}
            type="button"
          >
            <LogIn size={16} />
            Đăng nhập
          </button>
          <button
            className={`inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-medium text-sm transition-colors ${
              tab === "register"
                ? "bg-white text-gray-900 shadow-sm dark:bg-gray-950 dark:text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
            onClick={toggle("register")}
            type="button"
          >
            <UserPlus size={16} />
            Đăng ký
          </button>
        </div>

        {tab === "login" ? (
          <LoginForm setTab={setTab} />
        ) : (
          <RegisterForm setTab={setTab} />
        )}
      </div>
    </div>
  );
}

function LoginForm({ setTab }: { setTab: (t: AuthTab) => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
          Đăng nhập tài khoản
        </h2>
        <p className="mt-1 text-gray-500 text-sm dark:text-gray-400">
          Nhập email bên dưới để đăng nhập
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            className="block font-medium text-gray-700 text-sm dark:text-gray-300"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative mt-1">
            <Mail className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pr-4 pl-10 text-gray-900 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
              id="email"
              placeholder="m@example.com"
              type="email"
            />
          </div>
        </div>

        <div>
          <label
            className="block font-medium text-gray-700 text-sm dark:text-gray-300"
            htmlFor="login-password"
          >
            Mật khẩu
          </label>
          <div className="relative mt-1">
            <Lock className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pr-10 pl-10 text-gray-900 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
              id="login-password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
            />
            <button
              aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setShowPassword((p) => !p)}
              type="button"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div className="text-right">
          <button
            className="cursor-pointer font-medium text-indigo-600 text-sm hover:text-indigo-500 dark:text-indigo-400"
            type="button"
          >
            Quên mật khẩu?
          </button>
        </div>

        <button
          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-sm text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          type="submit"
        >
          <LogIn size={18} />
          Đăng nhập
        </button>
      </div>

      <p className="text-center text-gray-500 text-sm dark:text-gray-400">
        Chưa có tài khoản?{" "}
        <button
          className="cursor-pointer border-none bg-transparent p-0 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          onClick={() => setTab("register")}
          type="button"
        >
          Đăng ký
        </button>
      </p>
    </div>
  );
}

function RegisterForm({ setTab }: { setTab: (t: AuthTab) => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
          Tạo tài khoản
        </h2>
        <p className="mt-1 text-gray-500 text-sm dark:text-gray-400">
          Nhập thông tin bên dưới để tạo tài khoản
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            className="block font-medium text-gray-700 text-sm dark:text-gray-300"
            htmlFor="name"
          >
            Họ tên
          </label>
          <div className="relative mt-1">
            <User className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pr-4 pl-10 text-gray-900 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
              id="name"
              placeholder="John Doe"
              type="text"
            />
          </div>
        </div>

        <div>
          <label
            className="block font-medium text-gray-700 text-sm dark:text-gray-300"
            htmlFor="register-email"
          >
            Email
          </label>
          <div className="relative mt-1">
            <Mail className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pr-4 pl-10 text-gray-900 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
              id="register-email"
              placeholder="m@example.com"
              type="email"
            />
          </div>
        </div>

        <div>
          <label
            className="block font-medium text-gray-700 text-sm dark:text-gray-300"
            htmlFor="password"
          >
            Mật khẩu
          </label>
          <div className="relative mt-1">
            <Lock className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pr-10 pl-10 text-gray-900 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
              id="password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
            />
            <button
              aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setShowPassword((p) => !p)}
              type="button"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          <p className="mt-1 text-gray-500 text-xs dark:text-gray-400">
            Phải có ít nhất 8 ký tự.
          </p>
        </div>

        <div>
          <label
            className="block font-medium text-gray-700 text-sm dark:text-gray-300"
            htmlFor="confirm-password"
          >
            Xác nhận mật khẩu
          </label>
          <div className="relative mt-1">
            <Lock className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pr-10 pl-10 text-gray-900 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
              id="confirm-password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
            />
            <button
              aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setShowPassword((p) => !p)}
              type="button"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          <p className="mt-1 text-gray-500 text-xs dark:text-gray-400">
            Vui lòng xác nhận mật khẩu.
          </p>
        </div>

        <button
          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-sm text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          type="submit"
        >
          <UserPlus size={18} />
          Tạo tài khoản
        </button>
      </div>

      <p className="text-center text-gray-500 text-sm dark:text-gray-400">
        Đã có tài khoản?{" "}
        <button
          className="cursor-pointer border-none bg-transparent p-0 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          onClick={() => setTab("login")}
          type="button"
        >
          Đăng nhập
        </button>
      </p>
    </div>
  );
}
