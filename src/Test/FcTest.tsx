import { PropsWithChildren } from 'react';

// 例子1
interface IProps {
  foo: string;
  children: React.ReactNode;
}
export const Test2 = ({ foo, children }: IProps): JSX.Element => {
  console.log(foo, children);
  return <>xxx</>;
};

// 例子2
interface ICellProps<TData> {
  //
  field: keyof TData;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cell = <T extends Record<string, any>>(
  props: PropsWithChildren<ICellProps<T>>
) => {
  console.log(props.children);
  return <p></p>;
};

interface IDataStruct {
  name: string;
  age: string;
}

export const Test = () => {
  return (
    <>
      <Cell<IDataStruct> field="name"></Cell>
      <Cell<IDataStruct> field="age"></Cell>
    </>
  );
};

// 例子3

const Table: React.FC<{ name?: string }> & {
  Column: React.FC<IColumnProps>;
} = () => {
  return <></>;
};

interface IColumnProps {}

const Column: React.FC<IColumnProps> = () => {
  return <></>;
};

Table.Column = Column;

// 例子3，更好的写法
const Table2 = (): JSX.Element => {
  return <></>;
};

const Column2 = (props: IColumnProps): JSX.Element => {
  console.log(props);
  return <></>;
};

Table2.Column2 = Column2;
