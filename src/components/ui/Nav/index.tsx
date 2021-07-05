import { ReactNode } from "react";
import classnames from "classnames";
import variants from "constants/variants";

interface Props {
  children?: ReactNode,
  className?: string,
  // 'Indexer'
  [x: string]: any
};

const Nav = ({ children, className = "", variant = variants.default, ...rest }: Props) => {
  return (
    <nav className={classnames("c-nav", className)} {...rest}>
      <div className="c-nav__inner">
        <h1>{process.env.REACT_APP_APP_NAME}</h1>
        {children}
      </div>
    </nav>
  )
};


export default Nav;