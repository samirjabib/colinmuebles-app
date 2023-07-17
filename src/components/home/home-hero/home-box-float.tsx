import { Paragraph, Title } from "@/design-system";
import HomeSuscribeComponent from "./home-subscribe";

export default function HomeBoxFloat() {
  return (
    <div className="wrapper wrapper-mobile flex flex-col text-center relative top-48">
      <Title as="h1" size={"mainTitle"}>
        Encuentra la propiedad de tus sueños
      </Title>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
        voluptatum voluptatibus nam ipsa error facere, corporis doloremque neque
        inventore nostrum debitis voluptas tempore, pariatur sequi enim
        necessitatibus obcaecati. Quia, earum.
      </Paragraph>
      <HomeSuscribeComponent />
    </div>
  );
}
