import SideBar from "@/components/ui/sidebar/sideBar";
import TopMenu from "@/components/ui/top-menu/Top-menu";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <SideBar />
      <div className="sm:px-8 px-0">{children}</div>
    </main>
  );
}
