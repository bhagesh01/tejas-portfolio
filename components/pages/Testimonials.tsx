import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Tejas enthusiasm for every facet of development truly stands out.",
      name: "Aftab Attar",
      designation: "Product Manager at TechFlow",
      src: "/aftabTesti.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/model3Testi.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/model2Testi.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/model4Testi.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/model5Testi.jpg",
    },
  ];
  return(
  <>
  <h1 className="heading mt-10" id="about">
        Kind words from
        <span className="text-[#CBACF9]"> satisfied People</span>
      </h1>
  <AnimatedTestimonials testimonials={testimonials} />
  </>
  )
}
