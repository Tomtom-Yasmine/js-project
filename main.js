import { FilterFieldTypes } from './src/components/FilterForm';
import CardListWithFilterForm from './src/components/CardListWithFilterForm';
import CharacterCard from './src/components/CharacterCard';
import LocationCard from './src/components/LocationCard';
import TabManager from './src/utils/TabManager';
import api from './src/utils/Api';


const rootElement = document.querySelector('#app');

const tabData = {
  characters: {
    filterFields: {
      name: {
        label: 'Search by name:',
        type: FilterFieldTypes.Search
      },
      status: {
        label: 'Status:',
        type: FilterFieldTypes.Select
      }
    }
  }
};

export const tabManager = new TabManager(rootElement, {
  characters: {
    component: CardListWithFilterForm,
    params: {
      filterCallback: async (filters) => {
        const cardFilters = Object.entries(filters).reduce((cardFilters, [fieldName, { value }]) => {
          if (value) {
            cardFilters[fieldName] = value;
          }
          return cardFilters;
        }, {});
        tabManager.openTab('characters', {
          fields: tabData.characters.filterFields,
          filters,
          cards: (await api.getCharacters(cardFilters)).map((character) => CharacterCard({ character }))
        });
        Object.entries(filters).forEach(([fieldName, { hasFocus }]) => {
          if (hasFocus) {
            setTimeout(() => {
              document.querySelector(`.field-input[name="${fieldName}"]`).focus();
            }, 0);
          }
        });
      },
      fields: tabData.characters.filterFields,
      cards: (await api.getCharacters()).map((character) => CharacterCard({ character }))
    },
  },
  character: {
    component: CharacterCard,
    params: {}
  },
  locations: {
    component: CardListWithFilterForm,
    params: { cards: (await api.getLocations()).map((location) => LocationCard({ location })) }
  },
  location: {
    component: LocationCard,
    params: {}
  },
});

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTab(element.getAttribute('data-tabId'), { test: 'bonjour' });
  });
});
