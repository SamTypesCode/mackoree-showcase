interface PromoBarProps {
  message: string;
  className?: string;
}

export default function Promo({ message, className }: PromoBarProps) {
  return (
    <aside id="promo" className={className}>
      {message}
    </aside>
  );
}
