export interface TextInterface {
  label: string | React.JSX.Element;
  className: string;
  onClick?: () => void;
}


const Text = ({ ...props }: TextInterface) => {
  return <p {...props}>{props.label}</p>;
};

export default Text;
