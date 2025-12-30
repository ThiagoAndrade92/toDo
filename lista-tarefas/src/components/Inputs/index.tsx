type InputsProps = React.ComponentProps<'input'>

export const Inputs = ({...props}: InputsProps) => {


   return (
      <input {...props}/>
   );
};