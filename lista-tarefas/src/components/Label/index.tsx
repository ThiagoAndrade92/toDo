type LabelProps = React.ComponentProps<'label'>;

export const Label =  ({children, ...props}: LabelProps) => {


   return (
      <label {...props}>
         {children}
      </label>
   );
};