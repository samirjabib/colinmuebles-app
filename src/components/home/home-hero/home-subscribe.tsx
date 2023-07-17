import { SubscribeFormModal } from "@/design-system";
import { cn } from "@/lib/cn.ts";

export default function HomeSuscribeComponent({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("wrapper wrapper-mobile", className)}>
      <SubscribeFormModal />
    </div>
  );
}
