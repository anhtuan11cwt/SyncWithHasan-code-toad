import { Link, useRouterState } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ChevronLeft, LogOut, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../utils/cn";

export interface SidebarMenu {
  badge?: string | number;
  icon: LucideIcon;
  label: string;
  to: string;
}

interface SidebarProps {
  menus: SidebarMenu[];
  onLogout?: () => void;
  userInfo?: {
    name: string;
    image?: string;
  };
}

export function Sidebar({ menus, onLogout, userInfo }: SidebarProps) {
  const { location } = useRouterState();
  const [isOpen, setIsOpen] = useState(false);

  const activePath = location.pathname;

  return (
    <>
      <button
        aria-label="Mở menu"
        className={cn(
          "fixed top-4 left-4 z-50 rounded-lg bg-white p-2 shadow-md lg:hidden dark:bg-gray-900",
          isOpen && "hidden",
        )}
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <Menu size={20} />
      </button>

      {isOpen && (
        <button
          aria-label="Đóng menu"
          className="fixed inset-0 z-30 cursor-default bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
          type="button"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-gray-200 border-r bg-white transition-transform duration-300 dark:border-gray-800 dark:bg-gray-950",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="flex h-16 items-center justify-between border-gray-200 border-b px-6 dark:border-gray-800">
          <Link
            className="font-bold text-indigo-600 text-xl dark:text-indigo-400"
            to="/"
          >
            CodeToad LMS
          </Link>
          <button
            aria-label="Thu gọn sidebar"
            className="hidden rounded-lg p-1 hover:bg-gray-100 lg:block dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {menus.map((item) => {
              const Icon = item.icon;
              const pathSegments = item.to.split("/").filter(Boolean);
              const isActive =
                pathSegments.length <= 1
                  ? activePath === item.to
                  : activePath === item.to ||
                    activePath.startsWith(`${item.to}/`);
              return (
                <li key={item.to}>
                  <Link
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-sm transition-colors",
                      isActive
                        ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900",
                    )}
                    onClick={() => setIsOpen(false)}
                    to={item.to}
                  >
                    <Icon size={20} />
                    <span className="flex-1">{item.label}</span>
                    {item.badge != null && (
                      <span className="rounded-full bg-indigo-100 px-2 py-0.5 font-medium text-indigo-700 text-xs dark:bg-indigo-900 dark:text-indigo-300">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-gray-200 border-t p-4 dark:border-gray-800">
          {userInfo && (
            <div className="mb-3 flex items-center gap-3">
              {userInfo.image ? (
                <img
                  alt={userInfo.name}
                  className="h-8 w-8 rounded-full object-cover"
                  src={userInfo.image}
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 font-medium text-indigo-700 text-sm dark:bg-indigo-900 dark:text-indigo-300">
                  {userInfo.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-gray-900 text-sm dark:text-white">
                  {userInfo.name}
                </p>
              </div>
            </div>
          )}
          {onLogout && (
            <button
              className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-gray-600 text-sm transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
              onClick={onLogout}
              type="button"
            >
              <LogOut size={20} />
              Đăng xuất
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
