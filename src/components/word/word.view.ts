import { IWord, Endpoints } from '../../core';
import './word.scss';

export abstract class WordView {
  public static getWordImage(wordObj: IWord): string {
    const {
      word,
      image,
      wordTranslate,
      audio,
      audioMeaning,
      audioExample,
      textMeaning,
      textExample,
      transcription,
      textMeaningTranslate,
      textExampleTranslate,
    } = wordObj;
    return `
    <img src="${Endpoints.AppHost}/${image}" alt="" class="app-word__img">
      <div class="app-word__header">
        <h3 class="app-word__title">${word}</h3>
        <img class="app-word__audio-svg" src="src/assets/svg/noun-audio-1948083.svg" alt="">
      </div>
      <h4 class="app-word__translate">${wordTranslate}</h4>
      <h4 class="app-word__transcription">${transcription}</h4>

      <p class="app-word__meaning">${textMeaning}</p>
      <p class="app-word__meaning-translate">${textMeaningTranslate}</p>
      <p class="app-word__example">${textExample}</p>
      <p class="app-word__example-translate">${textExampleTranslate}</p>

      <audio class="audio app-word__audio" src="${Endpoints.AppHost}/${audio}"></audio>
      <audio class="audio app-word__audio-meaning" src="${Endpoints.AppHost}/${audioMeaning}"></audio>
      <audio class="audio app-word__audio-example" src="${Endpoints.AppHost}/${audioExample}"></audio>
    `;
  }
}
