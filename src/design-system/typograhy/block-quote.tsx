import { cn } from "@/lib/cn.ts";

export default function Blockquote({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}
