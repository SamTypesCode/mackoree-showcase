import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
} from "@/components/ui/carousel";

interface ProjectType {
  client: string;
  description: string;
  imageUrl: string;
  theme: string;
}

const ProjectsList: ProjectType[] = [
  {
    client: "Rolex",
    description:
      "Close-up render of a modern, multi-dial Rolex. Tones and fine detailing emphasize its technical precision.",
    imageUrl: "/rolex-render.jpg",
    theme: "dark",
  },
  {
    client: "Nike",
    description:
      "Close-up render of a modern Nike sneaker, highlighting sleek curves and dynamic textures.",
    imageUrl: "/nike-render.jpg",
    theme: "light",
  },
  {
    client: "Bombay Shaving Company",
    description:
      "Light-themed render of a sleek shaving razor in mid-air. Selective parts lift away to highlight its design.",
    imageUrl: "/bombay-shaving-company-render.jpg",
    theme: "light",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full box-border pt-16 pb-16 md:pt-24"
    >
      <div className="relative mx-auto max-w-[1440px] px-12 max-md:px-5">
        <h2 className="mx-auto mb-12 max-md:mb-9 text-[54px] max-md:text-3xl text-center font-medium max-w-lg md:leading-[60px]">
          Previous Client Projects.
        </h2>

        <div className="hidden md:grid gap-8 md:grid-cols-3">
          {ProjectsList.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden md:aspect-[3/4] flex flex-col"
            >
              <div
                className={`absolute top-4 left-4 z-20 ${
                  p.theme === "dark" ? "bg-neutral-200/80" : "bg-black/80"
                } rounded-full h-8 w-8 flex items-center justify-center`}
              >
                <p
                  className={`text-sm font-medium ${
                    p.theme === "dark" ? "text-black" : "text-white"
                  }`}
                >
                  {i + 1}
                </p>
              </div>

              <img
                src={p.imageUrl}
                alt={`Work for ${p.client}`}
                className="w-full object-cover md:h-full md:transition-all md:duration-500 md:group-hover:h-[calc(100%-144px)] relative z-10 rounded-lg"
              />

              <div className="w-full md:p-4 md:absolute md:bottom-0 md:left-0 z-0 md:pt-0 pt-5">
                <div className="flex flex-row items-start space-x-3">
                  <div className="bg-neutral-200 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <p className="text-sm text-black font-medium">{i + 1}</p>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-xl font-medium mb-2.5">{p.client}</p>
                    <p>{p.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="block md:hidden">
          <Carousel className="pb-8">
            <CarouselContent className="flex">
              {ProjectsList.map((p, i) => (
                <CarouselItem key={i} className="flex-shrink-0 w-full relative">
                  <div className="flex flex-col mx-4">
                    <div
                      className={`absolute top-4 left-8 z-20 ${
                        p.theme === "dark" ? "bg-neutral-200/80" : "bg-black/80"
                      } rounded-full h-8 w-8 flex items-center justify-center`}
                    >
                      <p
                        className={`text-sm font-medium ${
                          p.theme === "dark" ? "text-black" : "text-white"
                        }`}
                      >
                        {i + 1}
                      </p>
                    </div>

                    <img
                      src={p.imageUrl}
                      alt={`Work for ${p.client}`}
                      className="w-full aspect-[3/4] object-cover rounded-lg"
                    />

                    <div className="flex flex-row items-start space-x-3 pt-5">
                      <div className="bg-neutral-200 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <p className="text-sm text-black font-medium">
                          {i + 1}
                        </p>
                      </div>

                      <div className="flex flex-col">
                        <p className="text-xl font-medium mb-2.5">{p.client}</p>
                        <p>{p.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselIndicator />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
