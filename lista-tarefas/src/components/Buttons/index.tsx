import type React from "react";

type ButtonsProps = React.ComponentProps<"button">;

export const Buttons = ({children, ...props}: ButtonsProps) => {


   return (
      <button {...props}>
         {children}
      </button>
   );
};