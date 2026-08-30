import Footer from "@/components/footer";
import Hero from "@/components/hero";
import AppNavBar from "@/components/nav";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5efe6]">
      <AppNavBar />
      <main className="flex flex-1 flex-col">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
