import { cn } from "@/lib/utils";

interface PromoBarProps {
  message: string;
  className?: string;
}

export default function Promo({ message, className }: PromoBarProps) {
  const defaultClasses =
    "w-full min-h-10 bg-black text-white text-[0.72rem] font-medium z-50 flex justify-center items-center py-2.5";

  return (
    <aside id="promo" className={cn(defaultClasses, className)}>
      <div className="px-2.5">{message}</div>
    </aside>
  );
}
