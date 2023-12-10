//
import styled, { css, Interpolation } from 'styled-components';

export const Gallery = styled.div`
  -webkit-column-count: ${({ columns }) => (columns ? 3 : 5)};
  -moz-column-count: ${({ columns }) => (columns ? 3 : 5)};
  column-count: ${({ columns }) => (columns ? 3 : 5)};
  -webkit-column-width: ${({ columns }) => (columns ? '33%' : '20%')};
  -moz-column-width: ${({ columns }) => (columns ? '33%' : '20%')};
  column-width: ${({ columns }) => (columns ? '33%' : '20%')};
  padding: 0 12px;

  @media (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }

  @media (max-width: 480px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
`;

export const Pics = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
  border-radius: 16px;

  &:hover {
    filter: opacity(0.8);
  }
`;

/* ${({ isLinkExistForScrolling }) =>
    isLinkExistForScrolling
      ? css`
          height: 250px;
          background-color: #fff;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        `
      : css`
          overflow: auto;
          height: 100%;
        `} */
