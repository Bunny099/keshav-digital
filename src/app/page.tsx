"use client";
import Image from "next/image";
import Hero from "@/app/components/ui/Hero";
import Offering from "@/app/components/ui/Offering";
import Gallery from "@/app/components/ui//Gallery";
import Testimonial from "@/app/components/ui/Testimonial";
import Contact from "@/app/components/ui/Contact";
import Form from "@/app/components/ui/Form";

import LandingLayout from "@/app/landing/layout";

export default function Home() {
  return (
    <LandingLayout>
      <Hero />
      <Offering />
      <Gallery />
      <Testimonial />
      <Contact />
      <Form />
    </LandingLayout>
  );
}
