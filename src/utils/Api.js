class Api {

  constructor() {
    this.baseURL = 'https://rickandmortyapi.com/api';
  }

  // async getData(additionalURL = null) {
  //   const url = new URL(`${this.baseURL}/${additionalURL}`);
  //   const req = await fetch(url);
  //   const res = await req.json();
  //   return res.results;
  // }

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
    // console.log(ids);
    const url = new URL(`${this.baseURL}/character/${ids.join(',')}`);
    const req = await fetch(url);
    const res = await req.json();
    console.log({
      idsLength: ids.length,
      resLength: res.length,
      isOk: ids.length === res.length
    });
    if (ids.length === 1) {
      return [res];
    } else {
      return res;
    }
  }

  async getLocations(filters = {}) {
    const url = new URL(`${this.baseURL}/location`);
    for (const [key, value] of Object.entries(filters)) {
      url.searchParams.append(key, value);
    }
    const req = await fetch(url);
    const res = await req.json();
    return res.results;
  }

  async getLocationsByIds(...ids) {
    // console.log(ids);
    const url = new URL(`${this.baseURL}/location/${ids.join(',')}`);
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
