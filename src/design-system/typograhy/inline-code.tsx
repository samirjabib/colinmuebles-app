import { cn } from "@/lib/cn.ts";
import { ReactNode } from "react";

export default function InlineCode({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
}
