import styled from 'styled-components';

export const StyledBannerImage = styled.div`
    display: flex;
    flex-direction: column;
    width: 156px;
    height: auto;

    @media(min-width: 1030px) {
        width: 176px;

    }
`;

export const StyledTitleBannerImage = styled.span`
    // font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    padding-top: 10px;
`

export const StyledSubTitleBannerImage = styled.span`
    // font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #646464;

`