import Footer from "@/components/footer";
import AppNavBar from "@/components/nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order",
  description:
    "Order NOMA single-origin African coffee — roasted and fulfilled in Dublin, Ireland.",
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppNavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
