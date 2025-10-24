"use client";

import { XIcon } from "lucide-react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogImage,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";

interface MediaDialogProps {
  src: string;
  name: string;
}

export default function MediaDialog({ src, name }: MediaDialogProps) {
  const isVideo = /\.(mp4|webm)$/i.test(src);

  return (
    <MorphingDialog transition={{ duration: 0.3, ease: "easeInOut" }}>
      <MorphingDialogTrigger>
        {isVideo ? (
          <div className="w-full aspect-video rounded-[6px] overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
            <video src={src} className="w-full h-full object-cover" muted />
          </div>
        ) : (
          <div className="w-full aspect-video rounded-[6px] overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
            <MorphingDialogImage
              src={src}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative">
          {isVideo ? (
            <video
              src={src}
              controls
              className="h-auto w-full max-w-[90vw] rounded-[6px] object-cover lg:h-[90vh]"
            />
          ) : (
            <MorphingDialogImage
              src={src}
              alt={name}
              className="h-auto w-full max-w-[90vw] rounded-[6px] object-cover lg:h-[90vh]"
            />
          )}
        </MorphingDialogContent>

        <MorphingDialogClose
          className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-2 shadow-sm"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
