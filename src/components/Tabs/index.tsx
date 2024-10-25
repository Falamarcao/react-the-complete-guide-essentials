import { ElementType, ReactNode } from 'react';

interface TabsProps {
  buttonsContainer: ElementType;
  buttons: ReactNode;
  children: ReactNode;
}

const Tabs = ({ buttonsContainer, buttons, children }: TabsProps) => {
  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
