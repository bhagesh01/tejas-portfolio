
"use client"
import { ConnectMe } from "@/components/pages/ConnectMe";
import { Hero } from "@/components/pages/Hero";
import LoadingPage from "@/components/pages/LoadingPage";
import Projects from "@/components/pages/Projects";
import { Testimonials } from "@/components/pages/Testimonials";
import Footer from "@/components/shared/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";
import { useEffect, useState } from "react";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // If the window is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Listen for the load event
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);


  if(isLoading){
    return(
      <LoadingPage/>
    )
  }


  return (
    <div className="min-h-screen border-b-2">
      <FloatingNav navItems={navItems} />
      <Hero/>
      <div className="flex items-center justify-center">
      <Projects/>
      </div>
      <Testimonials/>
      <ConnectMe/>
      <Footer/>
    </div>
  );
}
