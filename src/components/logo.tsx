import Image from "next/image";
import { cn } from "@/lib/utils";

export function ZippatekLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden", className)}>
      <Image
        src="/zippatek_logo.png"
        alt="Zippatek Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

export function ZippatekWordmark({ className }: { className?: string }) {
  return <span className={cn("font-headline text-xl font-bold tracking-tight", className)}>Zippatek</span>
}
