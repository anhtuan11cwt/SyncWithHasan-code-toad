import { createFileRoute, Outlet } from "@tanstack/react-router";
import {
  BookOpen,
  LayoutDashboard,
  Settings,
  UserCircle,
  Users,
} from "lucide-react";

import { Sidebar } from "../../components/common/layout/sidebar";

export const Route = createFileRoute("/admin/_layout")({
  component: AdminLayout,
});

const adminMenus = [
  { icon: LayoutDashboard, label: "Tổng quan", to: "/admin" },
  { icon: BookOpen, label: "Quản lý khóa học", to: "/admin/courses" },
  { icon: Users, label: "Quản lý học viên", to: "/admin/users" },
  { icon: UserCircle, label: "Hồ sơ", to: "/admin/profile" },
  { icon: Settings, label: "Cài đặt", to: "/admin/settings" },
];

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar
        menus={adminMenus}
        onLogout={() => {
          // TODO: implement logout logic
        }}
        userInfo={{ name: "Quản trị viên" }}
      />
      <main className="flex-1 pt-16 lg:ml-64 lg:pt-0">
        <Outlet />
      </main>
    </div>
  );
}
