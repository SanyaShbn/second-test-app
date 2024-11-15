// StyledText.tsx
import React, { ReactNode } from 'react';
import { Text } from 'native-base';

interface StyledTextProps {
  children: ReactNode;
}

const StyledText: React.FC<StyledTextProps> = ({ children }) => {
  return <Text style={{
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    textAlign: 'center',
    color: 'white',
  }}>{children}</Text>;
};

export default StyledText;
