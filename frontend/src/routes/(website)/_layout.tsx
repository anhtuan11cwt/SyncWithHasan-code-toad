import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import { LogIn, Moon, Sun } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/(website)/_layout")({
  component: WebsiteLayout,
});

function WebsiteLayout() {
  const { pathname } = useLocation();
  const hideFooter = pathname === "/signin";

  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute("data-theme") === "dark",
  );

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("code-toad-theme", nextTheme);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-gray-200 border-b bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link
              className="font-bold text-indigo-600 text-xl dark:text-indigo-400"
              to="/"
            >
              CodeToad LMS
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              aria-label={
                isDark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"
              }
              className="cursor-pointer rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleTheme}
              type="button"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-sm text-white transition-colors hover:bg-indigo-500"
              to="/signin"
            >
              <LogIn size={16} />
              Đăng nhập
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {!hideFooter && (
        <footer className="border-gray-200 border-t bg-white dark:border-gray-800 dark:bg-gray-950">
          <div className="mx-auto max-w-7xl px-4 py-6 text-center text-gray-500 text-sm dark:text-gray-400">
            &copy; {new Date().getFullYear()} CodeToad LMS. Đã đăng ký bản
            quyền.
          </div>
        </footer>
      )}
    </div>
  );
}
