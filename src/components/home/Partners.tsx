import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";

interface PartnerType {
  name?: string | null;
  image_path: string;
}

const PartnersList: PartnerType[] = [
  {
    name: "Bombay Shaving",
    image_path: "bombay-shaving-logo.webp",
  },
  {
    name: "KTM",
    image_path: "ktm-logo.png",
  },
  {
    name: "Loreal",
    image_path: "loreal.svg",
  },
  {
    name: "Mama Earth",
    image_path: "mama-earth-logo.png",
  },
  {
    name: "Nike",
    image_path: "nike-logo.svg",
  },
  {
    name: "Sugar Cosmetics",
    image_path: "sugar-cosmetics-logo.png",
  },
  {
    name: "Rolex",
    image_path: "rolex-logo.png",
  },
  {
    name: "Fpgg",
    image_path: "fogg-logo.png",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-10">
      <div className="mt-10">
        <InfiniteSlider gap={200} reverse className="py-9">
          {PartnersList.map((partner, index) => (
            <figure
              key={index}
              className="w-[140px] h-[140px] flex items-center justify-center"
            >
              <Image
                src={`/${partner.image_path}`}
                width={140}
                height={140}
                alt={`${partner.name} Logo`}
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </figure>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
