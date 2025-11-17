import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-secondary text-white hover:-translate-y-0.5 hover:bg-navy focus-visible:outline-secondary",
        ghost: "border border-secondary bg-white/80 text-secondary hover:-translate-y-0.5 hover:bg-secondary hover:text-white focus-visible:outline-secondary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, className }))} {...props} />;
}
