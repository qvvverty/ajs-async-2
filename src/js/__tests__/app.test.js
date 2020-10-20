import asyncGameSavingLoader from '../app';

const expectedSaveObj = {
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1,
    name: 'Hitman',
    level: 10,
    points: 2000,
  },
};

test('Expect GameSavingLoader to return correct object', async () => {
  const save = await asyncGameSavingLoader;
  expect(save).toEqual(expectedSaveObj);
});
