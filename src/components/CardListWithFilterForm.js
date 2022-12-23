import createElement from '../utils/createElement';
import CardList from './CardList';
import FilterForm from './FilterForm';


const CardListWithFilterForm = (params) => {
    const element = createElement({
        tagName: 'div'
    });
    element.appendChild(FilterForm({ ...params }));
    element.appendChild(CardList({ ...params }));
    return element;
};


export default CardListWithFilterForm;
