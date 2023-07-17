import { Icons } from "@/design-system";
import Title from "@/design-system/typograhy/title";

export default function Logo() {
  return (
    <div className="flex flex-row gap-x-1 items-center">
      <Title as="h2" size={"textTitle"} className="text-foreground/80">
        <span>Col</span>Inmuebles
      </Title>
    </div>
  );
}
