import { MouseEvent } from 'react';
import './TabButton.css';

interface TabButtonProps {
  children: string;
  onSelect: (event: MouseEvent<HTMLButtonElement>) => void;
  isSelected: boolean;
}

const TabButton = (props: TabButtonProps) => {
  return (
    <li>
      <button className={props.isSelected ? 'active' : undefined} onClick={props.onSelect}>{props.children}</button>
    </li>
  );
};

export default TabButton;
