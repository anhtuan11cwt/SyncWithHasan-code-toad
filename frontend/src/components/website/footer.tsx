interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`border-gray-200 border-t bg-white dark:border-gray-800 dark:bg-gray-950 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-gray-500 text-sm dark:text-gray-400">
        &copy; {new Date().getFullYear()} CodeToad LMS. Đã đăng ký bản quyền.
      </div>
    </footer>
  );
}
