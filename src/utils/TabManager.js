class TabManager {
  constructor(rootElement, componentMapping) {
    this.rootElement = rootElement;
    this.componentMapping = componentMapping;
  }

  async openTab(id, props = {}) {
    if (id in this.componentMapping) {
      const { component, params } = this.componentMapping[id];
      this.rootElement.innerHTML = '';
      this.rootElement.appendChild(await component({
        ...params,
        ...props
      }));
    } else {
      console.error(`Tab with id ${id} is invalid`);
    }
  }
}


export default TabManager;
