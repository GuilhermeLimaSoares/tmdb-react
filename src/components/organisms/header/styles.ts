import styled from 'styled-components';

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  background: #5C16C5;
  padding: 16px 0px;

  @media(min-width: 1030px) {
    justify-content: start;
    padding: 16px 112px;
  };
`;

export const StyledHeaderTitle = styled.span`
  font-size: 24px;
  color: #FFFFFF;
  font-family: Roboto, sans-serif;
  font-weight: 700;
`;

export default StyledHeaderContainer;