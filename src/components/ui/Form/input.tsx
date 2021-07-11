import classnames from "classnames";

interface Props {
  className?: string,
  id: string,
  hasError?: Boolean,
  // 'Indexer'
  [x: string]: any
};

const Input = ({ className = "", id, hasError = false, ...rest }: Props) => {
  return (
    <input className={classnames("c-form__input", hasError && "c-form__input--hasError", className)} id={id} {...rest} />
  )
};


export default Input;