import { PropsWithChildren, useRef } from 'react';

interface IProps {
  foo: string;
  children: React.ReactNode;
}
export const Test = ({
  foo,
  children,
}: PropsWithChildren<IProps>): JSX.Element => {
  console.log(foo, children);

  const domRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<number>(599);

  const operateRef = () => {
    domRef.current?.getBoundingClientRect();
    valueRef.current += 1;
  };

  console.log(operateRef);

  return <div ref={domRef}>xxx</div>;
};
