import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const title = cva("", {
  variants: {
    // intent: {
    //   primary: ["text-white"],
    //   secondary: ["text-black"],
    // },
    size: {
      textSubtitle: ["People stopped telling jokes"],
      textTitle: ["scroll-m-20 text-2xl font-semibold tracking-tight"],
      sectionSubtitle: ["scroll-m-20 text-xl font-semibold tracking-tight"],
      sectionTitle: [
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      ],
      mainTitle: [
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      ],
    },
    family: {
      display: ["font-display"],
      sans: ["font-sans"],
    },
  },
  defaultVariants: {
    // intent: "primary",
    size: "textTitle",
    family: "display",
  },
});

interface TitleProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof title> {
  as?: HeadingLevel;
}

const Title: FC<TitleProps> = ({
  as: Component = "h2",
  className,
  //   intent,
  family,
  size,
  ...props
}) => {
  const classNames = twMerge(title({ size, family }), className);

  return <Component className={classNames} {...props} />;
};

export default Title;
