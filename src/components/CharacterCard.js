import createElement from "../utils/createElement";

const CharacterCard = ({ name, status, gender, species, origin: { name: originName }, location: { name: locationName }, image, episode }) => createElement(
    {
        tagName: 'div',
        classList: ['character-card'],
        children: [
            {
                tagName: 'div',
                classList: ['character-card-image'],
                children: [
                    {
                        tagName: 'img',
                        attributes: {
                            src: image || 'https://via.placeholder.com/150'
                        }
                    }
                ]
            },
            {
                tagName: 'section',
                classList: ['character-card-main-info'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['section'],
                        children: [
                            {
                                tagName: 'span',
                                classList: ['name'],
                                text: name
                            },
                            {
                                tagName: 'span',
                                classList: ['status'],
                                text: status
                            }
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['section'],
                        children: [
                            {
                                tagName: 'span',
                                classList: ['species'],
                                text: species
                            },
                            {
                                tagName: 'span',
                                classList: ['gender'],
                                text: gender
                            }
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['section'],
                        children: [
                            {
                                tagName: 'p',
                                text: "Last known location:"
                            },
                            {
                                tagName: 'span',
                                classList: ['location'],
                                text: locationName
                            }
                        ]
                    },
                    {
                        tagName: 'div',
                        classList: ['section'],
                        children: [
                            {
                                tagName: 'p',
                                text: "Origin:"
                            },
                            {
                                tagName: 'span',
                                classList: ['origin'],
                                text: originName
                            }
                        ]
                    },
                ]
            },
        ]
    }
)

export default CharacterCard;