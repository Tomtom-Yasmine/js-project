import createElement from '../utils/createElement';
import api from '../utils/Api';
import { tabManager } from '../../main';


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
            classes: ['character-card', 'card', 'mb-3', 'ms-3'],
            children: [
                {
                    tagName: 'img',
                    classes: ['card-img-top'],
                    attributes: {
                        src: image || 'https://via.placeholder.com/150'
                    }
                },
                {
                    tagName: 'div',
                    classes: ['card-body'],
                    children: [
                        {
                            tagName: 'h5',
                            text: name,
                            classes: ['name', 'clickable', 'card-title'],
                            listeners: [
                                {
                                    event: 'click',
                                    callback: async () => {
                                        const character = (await api.getCharactersByIds(id) || [null])[0];
                                        if (!character) {
                                            throw new Error(`Character with id ${id} not found.`);
                                        }
                                        tabManager.openTab('character', { character });
                                    }
                                }
                            ]
                        },
                    ]
                },
                {
                    tagName: 'ul',
                    classes: ['list-group', 'list-group-flush'],
                    children: [
                        {
                            tagName: 'li',
                            classes: ['list-group-item', 'species'],
                            text: `Species : ${species}`,
                        },
                        {
                            tagName: 'li',
                            classes: ['list-group-item', 'gender'],
                            text: `Gender : ${gender}`,
                        },
                        {
                            tagName: 'li',
                            classes: ['list-group-item', 'status'],
                            text: `Status : ${status}`,
                        },
                        {
                            tagName: 'li',
                            classes: ['list-group-item', 'location', 'clickable'],
                            text: `Last know location : ${locationName}`,
                            listeners: [
                                {
                                    event: 'click',
                                    callback: async () => {
                                        if (locationName != "unknown") {
                                            const location = (await api.getLocationsByIds(id) || [null])[0];
                                            if (!location) {
                                                throw new Error(`Location with id ${id} not found.`);
                                            }
                                            tabManager.openTab('location', { location });
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            tagName: 'li',
                            classes: ['list-group-item', 'origin'],
                            text: `First seen in : ${originName}`,
                        },
                    ]
                },
            ]
        }
    );
};

export default CharacterCard;
