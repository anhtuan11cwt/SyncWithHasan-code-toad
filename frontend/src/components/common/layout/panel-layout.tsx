import type { ReactNode } from "react";
import { Sidebar, type SidebarMenu } from "./sidebar";

interface PanelLayoutProps {
  children: ReactNode;
  menus: SidebarMenu[];
  onLogout?: () => void;
  userInfo?: { name: string; image?: string };
}

export function PanelLayout({
  menus,
  userInfo,
  onLogout,
  children,
}: PanelLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar menus={menus} onLogout={onLogout} userInfo={userInfo} />
      <main className="flex-1 lg:ml-64">{children}</main>
    </div>
  );
}
