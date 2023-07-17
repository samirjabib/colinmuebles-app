import { Paragraph, Title } from "@/design-system";
import HomeSuscribeComponent from "./home-subscribe";

export default function HomeBoxFloat() {
  return (
    <div className="wrapper wrapper-mobile flex flex-col text-center   ">
      <div className="max-w-2xl mx-auto">
        <Title as="h1" size={"mainTitle"} className="">
          Encuentra la propiedad de tus sueños
        </Title>
        <Paragraph className="md:text-lg text-foreground/80">
          Descubre nuestra amplia selección de propiedades, desde acogedoras
          casas familiares hasta espaciosas fincas. Encuentra tu hogar ideal hoy
          mismo. ¡Te ayudamos a hacer realidad tus sueños inmobiliarios!
        </Paragraph>
        <HomeSuscribeComponent className="mt-4" />
      </div>
    </div>
  );
}
