import asyncGameSavingLoader from '../app';
import read from '../gamesaving/reader';

jest.mock('../gamesaving/reader');
read.mockRejectedValue('Something bad happened');
test('Expect GameSavingLoader to throw error', async () => {
  const save = await asyncGameSavingLoader;
  expect(save instanceof Error).toBe(true);
});
