import { ReactNode } from "react";
import classnames from "classnames";

interface Props {
  children: ReactNode,
  className?: string,
  id: string,
  // 'Indexer'
  [x: string]: any
};

const Error = ({ className = "", children, id, ...rest }: Props) => {
  return (
    <span className={classnames("c-form__error", className)} id={id} {...rest}>{children}</span>
  )
};


export default Error;