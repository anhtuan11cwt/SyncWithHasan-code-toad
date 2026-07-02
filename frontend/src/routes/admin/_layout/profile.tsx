import { createFileRoute } from "@tanstack/react-router";
import toast from "react-hot-toast";

import { ProfileForm } from "../../../components/common/profile/profile-form";
import { useProfileFormController } from "../../../hooks/controllers/account/use-profile-form-controller";

export const Route = createFileRoute("/admin/_layout/profile")({
  component: AdminProfile,
});

const mockUser = {
  email: "admin@codetoad.edu.vn",
  imageUrl: "",
  name: "Quản trị viên",
  username: "admin",
};

function AdminProfile() {
  const { control, errors, isSubmitting, handleSubmit } =
    useProfileFormController({
      imageUrl: mockUser.imageUrl,
      name: mockUser.name,
    });

  const onSubmit = async (data: {
    name: string;
    imageUrl?: string | undefined;
  }) => {
    await toast.promise(
      // Simulate API call
      new Promise<void>((resolve) => setTimeout(resolve, 1500)),
      {
        error: "Không thể cập nhật hồ sơ.",
        loading: "Đang cập nhật hồ sơ...",
        success: "Cập nhật hồ sơ thành công!",
      },
    );
    console.log("Submitted:", data);
  };

  return (
    <div className="p-6">
      <h1 className="mb-1 font-bold text-2xl text-gray-900 dark:text-white">
        Hồ sơ quản trị viên
      </h1>
      <p className="mb-6 text-gray-500 dark:text-gray-400">
        Quản lý thông tin cá nhân và cài đặt tài khoản.
      </p>

      <ProfileForm
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        user={mockUser}
      />
    </div>
  );
}
