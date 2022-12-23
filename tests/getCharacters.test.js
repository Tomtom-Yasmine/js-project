import { test, expect } from 'vitest';
import api from '../src/utils/Api';


test('getCharacters returns a non-empty list', async () => {
    const characters = await api.getCharacters({
        name: 'rick'
    });
    expect(characters).toBeInstanceOf(Array);
    expect(characters.length).toBeGreaterThan(0);
});
