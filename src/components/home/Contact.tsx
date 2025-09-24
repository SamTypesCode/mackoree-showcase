"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-us" className="w-full py-9 max-md:py-10">
      <div className="w-full bg-black py-16 md:py-24 px-5 md:px-12">
        <h2 className="mx-auto mb-12 max-w-[550px] text-center text-xl md:text-2xl font-medium text-white leading-tight tracking-tight">
          Get high quality 3D and animation work done today, contact us by
          entering your email address now!
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center w-full items-center md:items-stretch space-y-4 md:space-y-0 md:space-x-1.5 max-w-[450px] mx-auto"
        >
          <Input
            type="email"
            required
            placeholder="E-MAIL"
            className="w-full rounded-full !bg-neutral-900 text-white px-6 py-[21px] text-[0.73rem] font-medium placeholder:text-[0.73rem] placeholder:text-white border !border-white focus-visible:outline-none focus-visible:ring-0"
          />
          <Button
            type="submit"
            className="w-full md:w-auto rounded-full bg-neutral-900 text-white px-6 py-[21px] text-[0.73rem] font-medium"
          >
            CONTACT US NOW.
          </Button>
        </form>

        {submitted && (
          <p className="text-white mt-4 text-center tracking-tight">
            Thanks! We’ll get back to you soon.
          </p>
        )}
      </div>
    </section>
  );
}
