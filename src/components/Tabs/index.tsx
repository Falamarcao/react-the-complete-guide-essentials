import { ReactNode } from 'react';

interface TabsProps {
  buttons: ReactNode;
  children: ReactNode;
}

const Tabs = ({ buttons, children }: TabsProps) => {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
};

export default Tabs;
