import json from './gamesaving/parser';
import read from './gamesaving/reader';

export default (async () => {
  try {
    const buffer = await read();
    const saveString = await json(buffer);
    return JSON.parse(saveString);
  } catch (error) {
    return error;
  }
})();
