import { cn } from "@/lib/cn.ts";

export default function MutedParagraph({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
}
