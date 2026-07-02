import { z } from "zod";

export const sUpdateUserProfile = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Tên người dùng phải chứa tối thiểu 3 ký tự"),
  imageUrl: z
    .string()
    .url("Đường dẫn ảnh đại diện không đúng định dạng URL")
    .optional()
    .or(z.literal("")),
});

export type TUpdateUserProfile = z.infer<typeof sUpdateUserProfile>;
