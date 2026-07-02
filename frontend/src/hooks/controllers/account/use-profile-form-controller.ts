import { zodResolver } from "@hookform/resolvers/zod";
import type { TUpdateUserProfile } from "@packages/definitions";
import { sUpdateUserProfile } from "@packages/definitions";
import { useForm } from "react-hook-form";

export function useProfileFormController(
  defaultValues?: Partial<TUpdateUserProfile>,
) {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TUpdateUserProfile>({
    defaultValues: {
      imageUrl: defaultValues?.imageUrl ?? "",
      name: defaultValues?.name ?? "",
    },
    resolver: zodResolver(sUpdateUserProfile),
  });

  return {
    control,
    errors,
    handleSubmit,
    isSubmitting,
    reset,
    setValue,
    watch,
  };
}
