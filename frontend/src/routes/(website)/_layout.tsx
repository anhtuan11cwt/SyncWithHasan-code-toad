import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";

import { Footer } from "../../components/website/footer";
import { Navbar } from "../../components/website/navbar";

export const Route = createFileRoute("/(website)/_layout")({
  component: WebsiteLayout,
});

function WebsiteLayout() {
  const { pathname } = useLocation();
  const hideFooter = pathname === "/signin";

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}
