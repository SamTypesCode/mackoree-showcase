import { cn } from "@/lib/utils";

interface PromoBarProps {
  message: string;
  className?: string;
}

export default function Promo({ message, className }: PromoBarProps) {
  const defaultClasses =
    "fixed top-0 left-0 w-full min-h-10 bg-black text-white text-[0.72rem] font-medium z-50 flex justify-center items-center py-2";

  return (
    <aside id="promo" className={cn(defaultClasses, className)}>
      <div className="px-5">{message}</div>
    </aside>
  );
}
