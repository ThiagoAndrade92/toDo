import type React from "react"
import style from './Container.module.css'

type ContainerProps = {
   children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {


   return (
      <div className={`${style.container}`} >
         <div className={`${style.content}`}>
            {children}
         </div>
      </div>
   );
};