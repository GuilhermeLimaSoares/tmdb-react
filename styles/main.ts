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

export const StyledBannerSectionContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    row-gap: 32px;
    padding: 29px 16px;
    // background: #E5E5E5;
`

export default StyledMainContainer;