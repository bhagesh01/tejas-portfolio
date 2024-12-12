import React from "react";
import { LocateIcon } from "lucide-react";
import MagicButton from "../shared/MagicButton";
import { BackgroundBeams } from "../ui/background-beams";

export function ConnectMe() {
  return (
   
<div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased" id="contact">
<div className="flex flex-col items-center px-10">
<h1 className="heading text-white lg:max-w-[45vw] text-center relative z-10">
  Ready to take <span className="text-[#CBACF9]">your</span> digital
  presence to the next level?
</h1>
<p className="text-gray-500 md:mt-10 my-5 text-center relative z-10">
  Reach out to me today and let&apos;s discuss how I can help you
  achieve your goals.
</p>
<a className="relative z-10" href="mailto:bansodebhageshbb08@gmail.com">
  <MagicButton
    title="Let's get in touch"
    icon={<LocateIcon />}
    position="right"
    />
</a>
</div>
<BackgroundBeams/>
</div>



  );
}











