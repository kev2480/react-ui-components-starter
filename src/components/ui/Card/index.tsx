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

const Card = ({ children, className = "", variant = variants.default, ...rest }: Props) => {
  return (
    <div className={classnames("c-card", `c-card--${variant}`, className)} {...rest}>{children}</div>
  )
};


export default Card;