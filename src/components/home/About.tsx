import { Menu } from "lucide-react";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ui/image-comparison";

export default function About() {
  return (
    <section
      id="about-us"
      className="relative w-full box-border pt-16 pb-16 md:pt-24"
    >
      <div className="relative mx-auto max-w-[1440px] px-12 max-md:px-5">
        <h2 className="mx-auto mb-6 max-md:mb-4 text-[54px] max-md:text-3xl text-center font-medium md:leading-[60px]">
          Only High Quality Results
        </h2>
        <h2 className="mx-auto mb-12 max-md:mb-9 max-w-[550px] text-center text-xl md:text-2xl font-medium leading-tight tracking-tight">
          We want high quality results as much as you, take a look for yourself.
        </h2>
        <div className="mx-auto w-full max-w-screen-lg flex flex-col items-center">
          <ImageComparison className="w-full rounded-sm max-md:aspect-square aspect-[5/3] border border-zinc-200 dark:border-zinc-800 touch-none">
            <ImageComparisonImage
              src="/bombay-shaving-company-render-1.jpg"
              alt="3D render after refinement"
              position="left"
            />
            <ImageComparisonImage
              src="/bombay-shaving-company-grayscale.jpg"
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
    </section>
  );
}
