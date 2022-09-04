import { Words, App } from './components';
import { WordsService, WordsRepository } from './core';

const words = new Words(new WordsService(new WordsRepository()));

words.init();

const app = new App();
app.init();
