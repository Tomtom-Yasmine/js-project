import CharacterCard from "./CharacterCard";
import createElement from "../utils/createElement";

const CharacterCardList = (characterCards) => {
    const element = createElement({
        tagName: 'div',
        classList: ['list-of-character-cards'],
    });
    characterCards.forEach(characterCard => {
        element.appendChild(characterCard);
    });

    return element;
};
export default CharacterCardList;