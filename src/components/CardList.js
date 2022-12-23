import createElement from '../utils/createElement';


const CardList = ({ cards }) => {
    const element = createElement({
        tagName: 'div',
        classes: ['card-list']
    });
    cards.forEach((card) => {
        element.appendChild(card);
    });

    return element;
};


export default CardList;
