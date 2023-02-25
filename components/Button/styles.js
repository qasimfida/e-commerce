import styled, { css } from 'styled-components';

export const StyledButton = styled.button(
  ({ size, variant, shape, theme: { button, font }, children, ...rest }) => ({
    boxSizing: 'border-box',
    fontFamily: `${font.base}`,
    display: 'flex',
    alignItems: 'center',
    transition: '0.2s all ease',
    height: `${button[size].height}`,
    padding: `${button[size].padding}`,
    fontSize: `${button[size].font}`,
    borderRadius: `${button[shape].borderRadius}`,
    background: `${button[variant].background}`,
    border: `1px solid ${button[variant].border}`,
    color: `${button[variant].color}`,
    cursor: 'pointer',
    ...rest,
  })
);
