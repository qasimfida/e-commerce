import styled, { css } from 'styled-components';

export const BlogsContainerWrapper = styled.div`
  ${({ theme: { colors }, bg }) => css`
    background-color: ${colors[bg]};
  `};
  padding-top: 60px;
  padding-bottom: 90px;
`;
