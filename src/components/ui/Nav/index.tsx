import { ReactNode, useEffect, useState } from "react";
import classnames from "classnames";
import variants from "constants/variants";

interface Props {
  children?: ReactNode,
  className?: string,
  // 'Indexer'
  [x: string]: any
};

const Nav = ({ children, className = "", variant = variants.default, ...rest }: Props) => {
  const [lastKnownScrollPosition, setLastKnownScrollPosition] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const callback = (e: Event) => {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          setLastKnownScrollPosition(window.scrollY);
          ticking = false;
        });

        ticking = true;
      }
    }

    document.addEventListener('scroll', callback);

    return () => {
      document.removeEventListener('scroll', callback);
    }
  }, []);

  return (
    <nav className={classnames("c-nav", lastKnownScrollPosition > 50 && "c-nav--scrolled", className)} {...rest}>
      <div className="c-nav__inner">
        <h1>{process.env.REACT_APP_APP_NAME}</h1>
        {children}
      </div>
    </nav>
  )
};


export default Nav;