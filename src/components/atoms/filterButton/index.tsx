import StyledFilterButton from './styles';

const FilterButton = ({type, value} : { type: string, value: string }) => 
    <StyledFilterButton type={type} value={value}/>

export default FilterButton;
