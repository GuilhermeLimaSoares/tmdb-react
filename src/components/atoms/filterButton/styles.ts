import styled from 'styled-components';

export const StyledFilterButton = styled.div.attrs(({isActive}: {isActive: boolean}) => ({
    isActive: isActive
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    padding: 6px 16px;
    background: ${({isActive}) => ( isActive ? '#D18000' : '#FFFFFF')};
    border-radius: 4px;
    width: max-content;
    // font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    transitions: 0.3s all;
`;

export const StyledFilterButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 12px;
    row-gap: 12px;
`;

