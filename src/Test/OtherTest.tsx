import { CSSProperties, PropsWithChildren, type ComponentProps } from 'react';

interface TProps extends ComponentProps<'button'> {
  style?: CSSProperties;
  name?: string;
}

export const Test = ({
  style,
  name,
  children,
  ...props
}: PropsWithChildren<TProps>): JSX.Element => {
  console.log(name, children);
  return <button style={style} {...props}></button>;
};

export const Test2: React.FC = () => {
  return <Test></Test>;
};
