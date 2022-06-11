import { StyledBannerImage, StyledSubTitleBannerImage, StyledTitleBannerImage } from './styles';
import {Image} from './../../atoms/image';

export function BannerImage({altImageBanner, dateBanner, imgUrlBanner, titleBanner}: {altImageBanner: string, dateBanner: string, imgUrlBanner: string, titleBanner: string}){
    return (
        <StyledBannerImage>
            <Image altImg={altImageBanner} imgUrl={imgUrlBanner}/>
            <StyledTitleBannerImage>
                {titleBanner}
            </StyledTitleBannerImage>
            <StyledSubTitleBannerImage>
                {dateBanner}
            </StyledSubTitleBannerImage>
        </StyledBannerImage>
        )
}