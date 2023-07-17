import { cn } from "@/lib/cn.ts";
import { ReactNode } from "react";

export default function LargeParagraph({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return <p className={cn("text-lg font-semibold", className)}>{children}</p>;
}
