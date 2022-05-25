import React, { useState } from 'react';
import {StyledFilterButton} from './styles';

import {IconClose} from './../icons/iconClose';

interface IFilterButton {
    enabled: boolean;
    imgUrl: string;
    title: string
}

// const FilterButton = ({imgUrl, title} : { imgUrl: string, title: string }) =>
function FilterButton({imgUrl, title} : { imgUrl: string, title: string }){
    const [ enabled, setEnabled ] = useState(false); 

const toggleButton = (isActive: boolean) => {
    debugger;
    console.log(isActive);
    return !isActive;
}

    return (
            <StyledFilterButton isActive={enabled}>
                <span onClick={() => setEnabled(!enabled)}>
                    {title}
                </span>
                {enabled && <IconClose />}
            </StyledFilterButton>
            )
};

export default FilterButton;
