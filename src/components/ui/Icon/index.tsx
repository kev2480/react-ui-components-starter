import classnames from "classnames";

interface Props {
  className?: string,
  name: string,
  // 'Indexer'
  [x: string]: any
};

const Icon = ({ className = "", name, ...rest }: Props) => {
  return (
    <img className={classnames("c-icon", className)} src={require(`../../../assets/icons/${name}.svg`).default} alt="" role="presentation" {...rest}/>
  )
};


export default Icon;