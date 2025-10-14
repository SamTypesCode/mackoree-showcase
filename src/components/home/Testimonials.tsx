import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselIndicator,
} from "@/components/ui/carousel";

interface TestimonialType {
  name: string;
  avatarUrl: string;
  content: string;
}

const TestimonialsList: TestimonialType[] = [
  {
    name: "Alice Johnson",
    avatarUrl: "",
    content: "The 3D models brought our vision to life flawlessly.",
  },
  {
    name: "Michael Lee",
    avatarUrl: "",
    content: "Incredible animation quality, delivered on time!",
  },
  {
    name: "Sophie Kim",
    avatarUrl: "",
    content: "Creative, professional, and exceeded our expectations.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full pt-32 pb-24 max-md:py-12">
      <div className="max-w-[1440px] mx-auto px-12 max-md:px-5">
        <Carousel className="flex flex-col w-full pb-8">
          <CarouselContent className="flex items-stretch">
            {TestimonialsList.map((testimonial, i) => (
              <CarouselItem
                key={i}
                className="flex-shrink-0 w-full md:w-1/2 relative transition-all"
              >
                <div className="relative z-20 h-full p-4 flex flex-col justify-between">
                  <p className="max-md:text-5xl max-xl:text-6xl text-7xl font-md mb-20">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center space-x-4 mt-4">
                    <Avatar className="h-14 w-14">
                      {testimonial.avatarUrl ? (
                        <AvatarImage
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                        />
                      ) : (
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      )}
                    </Avatar>
                    <p className="font-medium">{testimonial.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicator className="flex gap-2 mt-6" />
        </Carousel>
      </div>
    </section>
  );
}
