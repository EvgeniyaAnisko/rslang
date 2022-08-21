import { IWord } from '../../core';

export abstract class WordView {
  public static getWordImage(wordObj: IWord): string {
    const {
      word,
      image,
      wordTranslate,
      textMeaning,
      textExample,
      transcription,
      textMeaningTranslate,
      textExampleTranslate,
    } = wordObj;
    return `
      <img src="${image}" alt="" class="app-word__img">
      <h3 class="app-word__title">${word}</h3>
      <h4 class="app-word__translate">${wordTranslate}</h4>
      <h4 class="app-word__transcription">${transcription}</h4>

      <p class="app-word__meaning">${textMeaning}</p>
      <p class="app-word__meaning-translate">${textMeaningTranslate}</p>
      <p class="app-word__example">${textExample}</p>
      <p class="app-word__example-translate">${textExampleTranslate}</p>
    `;
  }
}
