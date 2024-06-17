import { Navigation, SideNavigation } from "@/components/ui";
import appdata from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Dashboard | ${appdata.title}`,
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>
        <SideNavigation />
        {children}
      </main>
    </>
  );
}
