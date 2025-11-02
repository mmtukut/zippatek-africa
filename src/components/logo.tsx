import { cn } from "@/lib/utils";

export function ZippatekLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
        <path
          d="M5 28L20.8077 11.6H11.9231L5 18.8V28Z"
          fill="hsl(var(--primary))"
        />
         <path
          d="M27 4L11.1923 20.4H20.0769L27 13.2V4Z"
          fill="url(#logo-gradient)"
        />
      </svg>
    </div>
  );
}

export function ZippatekWordmark({ className }: { className?: string }) {
    return <span className={cn("font-headline text-xl font-bold tracking-tight", className)}>Zippatek</span>
}
