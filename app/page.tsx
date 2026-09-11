import Campaigns from "@/components/campaigns";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import AppNavBar from "@/components/nav";
import Shop from "@/components/shop";
import OurStory from "@/components/story";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5efe6]">
      <AppNavBar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Shop />
        <OurStory />
        <Campaigns />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
