
class Api {

  constructor() {
    this.baseURL = 'https://rickandmortyapi.com/api';
  }

  async getCharacters(filters = {}) {
    const url = new URL(`${this.baseURL}/character`);
    for (const [key, value] of Object.entries(filters)) {
      url.searchParams.append(key, value);
    }
    const req = await fetch(url);
    const res = await req.json();
    return res.results;
  }

  async getCharactersByIds(...ids) {
    const url = new URL(`${this.baseURL}/character/${ids.join(',')}`);
    const req = await fetch(url);
    const res = await req.json();
    if (ids.length === 1) {
      return [res];
    } else {
      return res;
    }
  }
}

export default new Api();