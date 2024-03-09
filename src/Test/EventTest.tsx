import { ChangeEvent, ChangeEventHandler, MouseEvent } from 'react';

interface TProps {
  name: string;
}
export const EventTest: React.FC<TProps> = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleChange2: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.clientX);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <input onChange={handleChange2} />
      <button onClick={handleClick}></button>
    </div>
  );
};
