import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/_layout/profile")({
  component: AdminProfile,
});

function AdminProfile() {
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl text-gray-900 dark:text-white">
        Hồ sơ quản trị viên
      </h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Quản lý thông tin cá nhân và cài đặt tài khoản.
      </p>
    </div>
  );
}
