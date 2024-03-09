import { FC, forwardRef, useImperativeHandle, useRef } from 'react';

interface IRefPayload {
  controller: () => void;
}

interface IExtendedRefPayload extends IRefPayload {
  disposer: () => void;
}

export const Child = forwardRef<IRefPayload>((_, ref) => {
  const internalController = () => {
    console.log(
      'xxxx2333333333333333322333322313131231232131232132132132112112112133334444433333333333333333333333333333333333333333333333333333333333'
    );
  };
  useImperativeHandle<IRefPayload, IExtendedRefPayload>(
    ref,
    () => {
      return {
        controller: internalController,
        disposer: () => {},
      };
    },
    []
  );
  return <div></div>;
});

Child.displayName = 'Child';

interface PProps {
  name: string;
}

export const Parent: FC<PProps> = () => {
  const childRef = useRef<IRefPayload>(null);
  const handleClick = () => {
    childRef.current?.controller();
  };
  return (
    <div>
      <Child ref={childRef}></Child>
      <button onClick={handleClick}></button>
    </div>
  );
};
