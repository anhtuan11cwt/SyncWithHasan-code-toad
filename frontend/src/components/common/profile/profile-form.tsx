import type { TUpdateUserProfile } from "@packages/definitions";
import { Save } from "lucide-react";
import type {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import { Controller } from "react-hook-form";
import { Button } from "../../common/button";
import { InputField } from "../../common/form/input-field";

interface UserDisplay {
  email?: string;
  imageUrl?: string;
  name: string;
  username?: string;
}

interface ProfileFormProps {
  control: Control<TUpdateUserProfile>;
  errors: FieldErrors<TUpdateUserProfile>;
  handleSubmit: UseFormHandleSubmit<TUpdateUserProfile>;
  isSubmitting: boolean;
  onSubmit: (data: TUpdateUserProfile) => Promise<void>;
  user: UserDisplay;
}

export function ProfileForm({
  user,
  control,
  errors,
  isSubmitting,
  onSubmit,
  handleSubmit,
}: ProfileFormProps) {
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
        <h2 className="mb-4 font-semibold text-gray-900 text-lg dark:text-white">
          Thông tin tài khoản
        </h2>

        <div className="space-y-4">
          <InputField
            disabled
            label="Tên đăng nhập"
            name="username"
            value={user.username}
          />

          <InputField
            disabled
            label="Email"
            name="email"
            type="email"
            value={user.email}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
        <h2 className="mb-4 font-semibold text-gray-900 text-lg dark:text-white">
          Chỉnh sửa hồ sơ
        </h2>

        <div className="space-y-4">
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <InputField
                error={errors.name?.message}
                info="Tên hiển thị công khai"
                label="Họ và tên"
                name={field.name}
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />

          <Controller
            control={control}
            name="imageUrl"
            render={({ field }) => (
              <InputField
                error={errors.imageUrl?.message}
                info="Đường dẫn đến hình ảnh đại diện"
                label="URL ảnh đại diện"
                name={field.name}
                onChange={field.onChange}
                type="url"
                value={field.value}
              />
            )}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          className="cursor-pointer"
          disabled={isSubmitting}
          icon={<Save size={16} />}
          type="submit"
        >
          {isSubmitting ? "Đang lưu..." : "Lưu thay đổi"}
        </Button>
      </div>
    </form>
  );
}
