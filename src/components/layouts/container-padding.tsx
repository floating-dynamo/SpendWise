import React from 'react';

interface ContainerPaddingProps {
  children: React.ReactNode;
}

const ContainerPadding = ({ children }: ContainerPaddingProps) => {
  return <div className='p-5'>{children}</div>;
};

export default ContainerPadding;
