import CharacterCard from './src/components/CharacterCard';
import CharacterCardList from './src/components/CharacterCardList';
import TabManager from './src/utils/TabManager';
import api from './src/utils/Api';


const rootElement = document.querySelector('#app');

const tabManager = new TabManager(rootElement, {
  characters: {
    component: CharacterCardList,
    params: { characterCards: (await api.getCharacters()).map((character) => CharacterCard({ character })) },
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
window.tabManager = tabManager;

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTab(element.getAttribute('data-tabId'), { test: 'bonjour' });
  });
});

// tabManager.openTab('page1')

// import api from './src/utils/Api';

// console.log(await api.getCharacters({ gender: "female" }));