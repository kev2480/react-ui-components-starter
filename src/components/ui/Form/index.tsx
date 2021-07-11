import { ReactNode } from "react";
import classnames from "classnames";

interface Props {
  children: ReactNode,
  className?: string,
  // 'Indexer'
  [x: string]: any
};

const Form = ({ children, className = "", ...rest }: Props) => {
  return (
    <form className={classnames("c-form", className)} {...rest}>{children}</form>
  )
};


export default Form;