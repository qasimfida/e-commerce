import React from 'react';
import { ChipWrapper, Sup } from './styles';

const Chip = ({ label, count, ...rest }) => {
  return (
    <ChipWrapper {...rest}>
      {label}
      <Sup>{count}</Sup>
    </ChipWrapper>
  );
};

export default Chip;
