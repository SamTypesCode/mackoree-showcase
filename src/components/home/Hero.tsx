import Image from "next/image";
import { InfiniteSlider } from "../ui/infinite-slider";

interface SliderItemType {
  name?: string | null;
  image_path: string;
}

const SliderItems: SliderItemType[] = [
  {
    name: "Bombay Shaving Render 1",
    image_path: "/projects/Bombay Shaving/Mackoree-shot1.jpg",
  },
  {
    name: "Bombay Shaving Render 2",
    image_path: "/projects/Bombay Shaving/Mackoree-shot2.jpg",
  },
  {
    name: "Nike Render 1",
    image_path: "/projects/Nike/Nike Airforce-render-01.jpg",
  },
  {
    name: "Nike Render 2",
    image_path: "/projects/Nike/Nike Airforce-render-05.jpg",
  },
  {
    name: "Rolex Render 1",
    image_path: "/projects/Rolex/010.jpg",
  },
  {
    name: "Vehicle Render 1",
    image_path: "/projects/Vehicle/Buggati 001.png",
  },
  {
    name: "Vehicle Render 2",
    image_path: "/projects/Vehicle/Buggati 002.png",
  },
  {
    name: "Vehicle Render 3",
    image_path: "/projects/Vehicle/image02.png",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full pt-16 pb-24 max-md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-20px)] overflow-x-hidden"
    >
      <div className="w-full max-w-screen-lg px-6 sm:px-12 flex flex-col items-center justify-start text-center">
        <h1 className="font-medium leading-tight text-[clamp(3rem,6vw,4.5rem)] max-w-[95%] mx-auto mb-8 break-words">
          Providing{" "}
          <span className="font-serif font-thin italic">high quality</span> 3D
          design work.
        </h1>

        <p className="text-lg sm:text-xl font-medium text-zinc-600 max-w-[90%] sm:max-w-lg mx-auto break-words leading-relaxed">
          For over 5 years, we have been providing high quality and neat 3D
          design and animation work for many of our satisfied clients.
        </p>
      </div>
      <div className="mt-10 w-full overflow-hidden">
        <InfiniteSlider
          speed={200}
          speedOnHover={100}
          gap={125}
          reverse
          className="py-9"
        >
          {SliderItems.map((item, index) => (
            <figure
              key={index}
              className="w-[300px] sm:w-[426px] h-[180px] sm:h-[240px] flex items-center justify-center shrink-0"
            >
              <Image
                src={item.image_path}
                width={426}
                height={240}
                alt={item.name || `Item ${index}`}
                className="h-auto w-full object-contain shadow-md"
                loading="lazy"
              />
            </figure>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
