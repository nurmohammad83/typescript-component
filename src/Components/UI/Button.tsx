import {ReactNode} from 'react';

type ButtonProps ={
    children:ReactNode
    color?:'primary' | 'secondary' | 'success'
    variant?:'filled' | 'outline'
    href?:string
};

type IColor = {
    primary: string;
    success: string;
    secondary: string;
};

type IVariants ={
    filled: string;
    outline: string;
};

const Button = ({children,color='primary',variant='filled',href='/'}:ButtonProps) => {

    const colors:IColor = {
        primary:
          "bg-blue-600 hover:bg-blue-700 hover:text-black text-black  border-blue-600",
        success:
          "bg-green-500 hover:bg-green-600 hover:text-black text-black border-green-600",
          secondary:
          "bg-yellow-500 hover:bg-yellow-600 hover:text-black text-black border-yellow-600",
      };
 
      const variants:IVariants = {
        filled: "",
        outline: "border bg-transparent text-black",
      };
  return (
    <a href={href} className={`${colors[color]} ${variants[variant]} font-semibold py-2 px-6 rounded-md cursor-pointer`}>
        {children}
    </a>
  )
}
export default Button;