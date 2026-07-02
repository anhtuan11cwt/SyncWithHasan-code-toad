import { Link } from "@tanstack/react-router";
import { LogIn, Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/ui/use-theme";

export function Navbar() {
  const { mode, toggle } = useTheme();

  return (
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
              mode === "dark"
                ? "Chuyển sang chế độ sáng"
                : "Chuyển sang chế độ tối"
            }
            className="cursor-pointer rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggle}
            type="button"
          >
            {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
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
  );
}
