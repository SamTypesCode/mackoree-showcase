import { Button } from "@/components/ui/button";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ui/image-comparison";
import { Menu } from "lucide-react";

export default function Quality() {
  return (
    <section
      id="quality"
      className="relative w-full box-border pt-10 md:pt-12 pb-16"
    >
      <div className="mx-auto max-w-[1440px] px-12 max-md:px-5">
        <div className="flex w-full h-full flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1">
            <p className="mt-20 text-xs font-medium">LOOK YOURSELF</p>
            <h2 className="mt-5 max-w-lg text-[54px] max-md:text-3xl font-medium md:leading-[60px]">
              NEAT & CLEAN
            </h2>
            <p className="mt-6 max-w-[420px] leading-tight text-neutral-700 dark:text-neutral-300">
              High-detail 3D modelling and animation built for impact.
              Realistic, modern, and polished, designed to catch the eye and
              bring ideas to life with clarity and style.
            </p>
            <Button
              asChild
              className="mt-6 w-fit rounded-full bg-neutral-900 px-6 py-[21px] text-[0.73rem] font-medium text-white"
            >
              <a href="#contact-us">GET WORK DONE.</a>
            </Button>
          </div>
          <div className="flex-1">
            <ImageComparison
              className="w-full aspect-[4/3] md:aspect-square lg:aspect-[5/4] rounded-lg border border-zinc-200 dark:border-zinc-800 touch-none"
              enableHover
              springOptions={{ bounce: 0.3 }}
            >
              <ImageComparisonImage
                src="/after.jpg"
                alt="3D render after refinement"
                position="left"
              />
              <ImageComparisonImage
                src="/before.jpg"
                alt="3D render before refinement"
                position="right"
              />
              <ImageComparisonSlider className="w-0.5 bg-black">
                <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black">
                  <Menu className="size-4.5 rotate-90 text-white" />
                </div>
              </ImageComparisonSlider>
            </ImageComparison>
          </div>
        </div>
      </div>
    </section>
  );
}
