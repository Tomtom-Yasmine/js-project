import createElement from '../utils/createElement';


const FilterForm = ({
    fields = {}
}) => {
    const children = Object.entries(fields).map(([key, value]) => {
        console.log(key, value);
    });
    return createElement({
        tagName: 'form',
        classes: ['filter-form'],
        children
    });
};


export default FilterForm;
