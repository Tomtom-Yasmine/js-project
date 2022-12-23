import createElement from '../utils/createElement';
import api from '../utils/Api';
import { tabManager } from '../../main';


const LocationCard = ({ location }) => {
    const {
        id,
        name,
        type,
        dimension,
        residents,
        url,
    } = location;
    return createElement(
        {
            tagName: 'div',
            classes: ['location-card', 'card', 'mb-3', 'ms-3'],
            children: [
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
                                        const location = (await api.getLocationsByIds(id) || [null])[0];
                                        if (!location) {
                                            throw new Error(`Location with id ${id} not found.`);
                                        }
                                        tabManager.openTab('location', { location });
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
                            classes: ['list-group-item', 'type'],
                            text: `Type : ${type}`,
                        },
                        {
                            tagName: 'li',
                            classes: ['list-group-item', 'dimension'],
                            text: `Dimension : ${dimension}`,
                        },
                        // {
                        //     tagName: 'li',
                        //     classes: ['list-group-item', 'residents'],
                        //     text:
                        //         (async () => {
                        //             const ids = [];
                        //             residents.forEach(resident => {
                        //                 ids.push(resident.split("/character/")[1]);
                        //             });
                        //             const characters = (await api.getCharactersByIds(ids) || [null])[0]
                        //             console.log(characters);
                        //             return (`Residents: ${characters.name} `);
                        //         })(),
                        // },
                    ]
                },
            ]
        }
    );
};

export default LocationCard;
