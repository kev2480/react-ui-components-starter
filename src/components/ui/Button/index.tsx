import { ReactNode } from "react";
import classnames from "classnames";
import variants from "constants/variants";

interface Props {
  children: ReactNode,
  className?: string,
  variant?: string,
  // 'Indexer'
  [x: string]: any
};

const Button = ({ children, className = "", variant = variants.default, ...rest }: Props) => {
  return (
    <button className={classnames("c-button", `c-button--${variant}`, className)} {...rest}>{children}</button>
  )
};


export default Button;