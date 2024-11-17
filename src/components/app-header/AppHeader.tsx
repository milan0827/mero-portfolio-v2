import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/helpers";

export type HeadingVariantProps = VariantProps<typeof heading>;

const heading = cva(["text-gray-200"], {
  variants: {
    variant: {
      primary: "text-gray-200",
      secondary: "text-gray-400",
    },
    size: {
      small: "text-xl",
      medium: "text-2xl",
      large: "text-4xl",
    },
  },

  defaultVariants: {
    size: "medium",
    variant: "primary",
  },
});

interface AppHeaderProps
  extends HeadingVariantProps,
    React.ComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> {
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const AppHeader = ({
  headingLevel = "h2",
  children,
  variant,
  size,
  className,
  ...props
}: AppHeaderProps) => {
  const Heading = headingLevel;
  return (
    <Heading className={cn(heading({ variant, size, className }))} {...props}>
      {children}
    </Heading>
  );
};

export default AppHeader;
