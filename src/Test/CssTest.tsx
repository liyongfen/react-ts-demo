import { CSSProperties } from 'react';

const css: CSSProperties = {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
};

console.log(css);

interface TProps {
  style: CSSProperties;
}
export const CSSTest = ({ style }: TProps): JSX.Element => {
  return <div style={style}></div>;
};
