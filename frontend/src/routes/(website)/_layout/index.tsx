import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(website)/_layout/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-extrabold text-4xl text-gray-900 tracking-tight sm:text-5xl md:text-6xl dark:text-white">
          <span className="block">Nền Tảng Học Lập Trình</span>
          <span className="block text-indigo-600 dark:text-indigo-400">
            Hệ Thống LMS Toàn Diện
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl dark:text-gray-400">
          Xây dựng lộ trình học tập bài bản, theo dõi tiến độ trực quan với hệ
          thống bài giảng chất lượng cao, bài tập trắc nghiệm và mã nguồn thực
          tế.
        </p>
      </div>
    </div>
  );
}
