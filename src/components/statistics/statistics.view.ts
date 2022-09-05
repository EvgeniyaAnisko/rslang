import './statistics.css';
import { IStatistics } from '../../core/services/models/IStatistics';

export abstract class StatisticsView {
  public static getStatisticsImage(data: IStatistics | null) {
    const res = <IStatistics>data;
    return `<div class="statistic-wrapper">
                        <div class="statistic-text">Learned words: ${res.learnedWords}</div>
                    </div>`;
  }
}
