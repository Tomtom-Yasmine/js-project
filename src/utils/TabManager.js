class TabManager {
  constructor(rootElement, componentMapping) {
    this.rootElement = rootElement;
    this.componentMapping = componentMapping;
  }

  async openTabById(id) {
    if (id in this.componentMapping) {
      const { component, params: [...props] } = this.componentMapping[id];
      this.rootElement.innerHTML = '';
      this.rootElement.appendChild(await component(...props));
    } else {
      console.error('Invalid id provided');
    }
  }
}

export default TabManager;