import { cn } from "@/lib/cn.ts";
import { ReactNode } from "react";

export default function Small({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  );
}
