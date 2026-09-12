import { AdditionalEngineering } from "@/components/sections/AdditionalEngineering";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { AiEngineering } from "@/components/sections/AiEngineering";
import { Contact } from "@/components/sections/Contact";
import { Credentials } from "@/components/sections/Credentials";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Snapshot } from "@/components/sections/Snapshot";
import { Toolkit } from "@/components/sections/Toolkit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <Snapshot />
      <SelectedWork />
      <Impact />
      <Experience />
      <Toolkit />
      <AdditionalEngineering />
      <AiEngineering />
      <Credentials />
      <Contact />
    </>
  );
}
