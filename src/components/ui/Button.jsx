import { forwardRef } from "react";
import PropTypes from 'prop-types'; // Importa PropTypes
import { cn } from "@/lib/utils";

const Button = forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? "a" : "button"; // Si asChild es true, usa "a", si no, "button"
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-primary text-primary-foreground shadow hover:bg-primary/90": variant === "default",
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90": variant === "destructive",
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground": variant === "outline",
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80": variant === "secondary",
          "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground": variant === "ghost",
          "bg-transparent text-foreground underline-offset-4 hover:underline": variant === "link",
          "h-9 px-4 py-2": size === "default",
          "h-7 rounded-md px-3": size === "sm",
          "h-10 rounded-md px-8": size === "lg",
          "h-9 w-9": size === "icon",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

// Definimos las validaciones de PropTypes para las props
Button.propTypes = {
  className: PropTypes.string, // className es opcional y de tipo string
  variant: PropTypes.oneOf(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']), // variant puede ser uno de estos valores
  size: PropTypes.oneOf(['default', 'sm', 'lg', 'icon']), // size puede ser uno de estos valores
  asChild: PropTypes.bool, // asChild es un booleano
};

export default Button;
