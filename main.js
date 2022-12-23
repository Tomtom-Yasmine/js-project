import CardList from './src/components/CardList';
import { FilterFieldTypes } from './src/components/FilterForm';
import CardListWithFilterForm from './src/components/CardListWithFilterForm';
import CharacterCard from './src/components/CharacterCard';
import TabManager from './src/utils/TabManager';
import api from './src/utils/Api';


const rootElement = document.querySelector('#app');

export const tabManager = new TabManager(rootElement, {
  characters: {
    component: CardListWithFilterForm,
    params: {
      fields: {
        name: {
          type: FilterFieldTypes.Search
        }
      },
      cards: (await api.getCharacters()).map((character) => CharacterCard({ character }))
    },
  },
  character: {
    component: CharacterCard,
    params: {}
  }
  // page2: {
  //   component: ListOfPost,
  //   params: ['https://jsonplaceholder.typicode.com/posts']
  // }
});

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTab(element.getAttribute('data-tabId'), { test: 'bonjour' });
  });
});

// tabManager.openTab('page1')

// import api from './src/utils/Api';

// console.log(await api.getCharacters({ gender: "female" }));
