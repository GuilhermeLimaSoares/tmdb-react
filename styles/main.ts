import styled from 'styled-components';

const StyledMainContainer = styled.main`
    background: #2D0C5E;
    padding: 40px 16px;

    @media(min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
    }
`;

export default StyledMainContainer;