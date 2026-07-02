import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import {
  BookOpen,
  CreditCard,
  LayoutDashboard,
  Trophy,
  UserCircle,
} from "lucide-react";

import { Sidebar } from "../../components/common/layout/sidebar";

export const Route = createFileRoute("/learner/_layout")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/learner") {
      throw redirect({ to: "/learner/profile" });
    }
  },
  component: LearnerLayout,
});

const learnerMenus = [
  { icon: LayoutDashboard, label: "Tổng quan", to: "/learner" },
  { icon: BookOpen, label: "Khóa học của tôi", to: "/learner/my-courses" },
  { icon: CreditCard, label: "Thanh toán", to: "/learner/billing" },
  { icon: Trophy, label: "Bảng xếp hạng", to: "/learner/leaderboard" },
  { icon: UserCircle, label: "Hồ sơ", to: "/learner/profile" },
];

function LearnerLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar
        menus={learnerMenus}
        onLogout={() => {
          // TODO: implement logout logic
        }}
        userInfo={{ name: "Học viên" }}
      />
      <main className="flex-1 pt-16 lg:ml-64 lg:pt-0">
        <Outlet />
      </main>
    </div>
  );
}
