import styled from 'styled-components';

const StyledFilterButton = styled.input.attrs(({type, value}: {type: string, value: string}) => ({
    type: type || 'texto',
    value: value || 'value'
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 16px;
    background: #FFFFFF;
    border-radius: 4px;
`;

export default StyledFilterButton;