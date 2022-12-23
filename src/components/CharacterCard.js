import createElement from "../utils/createElement";
import api from '../utils/Api';


const CharacterCard = ({ character }) => {
    const {
        id,
        name,
        status,
        gender,
        species,
        origin: { name: originName },
        location: { name: locationName },
        image,
        episode: episodes
    } = character;
    return createElement(
        {
            tagName: 'div',
            classList: ['character-card', 'card', 'mb-3', 'ms-3'],
            children: [
                {
                    tagName: 'img',
                    classList: ['card-img-top'],
                    attributes: {
                        src: image || 'https://via.placeholder.com/150'
                    }
                },
                {
                    tagName: 'div',
                    classList: ['card-body'],
                    children: [
                        {
                            tagName: 'h5',
                            text: name,
                            classList: ['name', 'clickable', 'card-title'],
                            listeners: [
                                {
                                    event: 'click',
                                    callback: async () => {
                                        const character = (await api.getCharactersByIds(id) || [null])[0];
                                        if (!character) {
                                            throw new Error(`Character with id ${id} not found.`);
                                        }
                                        window.tabManager.openTab('character', { character });
                                    }
                                }
                            ]
                        },
                    ]
                },
                {
                    tagName: 'ul',
                    classList: ['list-group', 'list-group-flush'],
                    children: [
                        {
                            tagName: 'li',
                            classList: ['list-group-item', 'species'],
                            text: `Species : ${species}`,
                        },
                        {
                            tagName: 'li',
                            classList: ['list-group-item', 'gender'],
                            text: `Gender : ${gender}`,
                        },
                        {
                            tagName: 'li',
                            classList: ['list-group-item', 'status'],
                            text: `Satus : ${status}`,
                        },
                        {
                            tagName: 'li',
                            classList: ['list-group-item', 'location'],
                            text: `Last know location : ${locationName}`,
                        },
                        {
                            tagName: 'li',
                            classList: ['list-group-item', 'origin'],
                            text: `First seen in : ${originName}`,
                        },
                    ]
                },
            ]
        }
    );
};

export default CharacterCard;