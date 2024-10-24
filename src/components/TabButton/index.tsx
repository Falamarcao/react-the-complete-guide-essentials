import { MouseEvent } from 'react';
import './TabButton.css';

interface TabButtonProps {
  children: string;
  onSelect: (event: MouseEvent<HTMLButtonElement>) => void;
}

const TabButton = (props: TabButtonProps) => {
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
};

export default TabButton;
