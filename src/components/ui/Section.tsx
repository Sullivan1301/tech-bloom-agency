import { HTMLAttributes, forwardRef } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: "default" | "sm" | "lg" | "none";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = "", padding = "default", id, ...props }, ref) => {
    const paddingStyles = {
      default: "py-20 md:py-32",
      sm: "py-12 md:py-20",
      lg: "py-32 md:py-48",
      none: "",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={`${paddingStyles[padding]} ${className}`}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
