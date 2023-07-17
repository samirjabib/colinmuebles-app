import { cn } from "@/lib/cn.ts";
import { ReactNode } from "react";

export default function LeadParagraph({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
  );
}
