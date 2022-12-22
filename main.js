import CharacterCard from './src/components/CharacterCard';
import CharacterCardList from './src/components/CharacterCardList';
import TabManager from './src/utils/TabManager';
import api from './src/utils/Api';


const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  characters: {
    component: CharacterCardList,
    params: [(await api.getCharacters()).map((character) => CharacterCard(character))]
  },
  // page2: {
  //   component: ListOfPost,
  //   params: ['https://jsonplaceholder.typicode.com/posts']
  // }
});

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'));
  });
});

// tabManager.openTabById('page1')

// import api from './src/utils/Api';

// console.log(await api.getCharacters({ gender: "female" }));