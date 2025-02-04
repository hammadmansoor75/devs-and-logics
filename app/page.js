import EnoughTalkBar from "@/components/EnoughTalkBar";
import HomeAbout from "@/components/HomeAbout";
import Homebar from "@/components/Homebar";
import HomeChooseUs from "@/components/HomeChooseUs";
import HomeSection from "@/components/HomeSection";
import HomeServices from "@/components/HomeServices";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="" >
      <HomeSection />
      <Homebar/>
      <HomeAbout/>
      <HomeServices/>
      <HomeChooseUs />
      <Testimonials />
      <EnoughTalkBar />
    </main>
  );
}
