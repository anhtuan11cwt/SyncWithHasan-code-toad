import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/learner/_layout/profile")({
  component: LearnerProfile,
});

function LearnerProfile() {
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl text-gray-900 dark:text-white">
        Hồ sơ học viên
      </h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Quản lý thông tin cá nhân và xem tiến độ học tập.
      </p>
    </div>
  );
}
