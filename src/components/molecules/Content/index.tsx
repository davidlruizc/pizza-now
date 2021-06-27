import * as React from 'react';
import { ContentWrapper } from './styles';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

export default Content;
