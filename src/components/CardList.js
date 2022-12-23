import createElement from '../utils/createElement';


const CardList = ({ cards }) => {
    const element = createElement({
        tagName: 'div',
        classes: ['card-list', 'd-flex', 'flex-direction-row', 'flex-wrap', 'justify-content-center'],
    });
    cards.forEach((card) => {
        element.appendChild(card);
    });

    return element;
};


export default CardList;
