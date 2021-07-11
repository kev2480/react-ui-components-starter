import { ReactNode } from "react";
import classnames from "classnames";

interface Props {
  children: ReactNode,
  className?: string,
  hasError?: Boolean,
  htmlFor: string,
  // 'Indexer'
  [x: string]: any
};

const Label = ({ className = "", hasError = false, children, htmlFor, ...rest }: Props) => {
  return (
    <label className={classnames("c-form__label", hasError && "c-form__label--hasError", className)} htmlFor={htmlFor} {...rest}>{children}</label>
  )
};


export default Label;