import { HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white border border-gray/20 rounded-md p-8 shadow-sm transition-all duration-300 ${
          hover
            ? "hover:shadow-xl hover:border-teal/30 hover:scale-[1.02]"
            : ""
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
