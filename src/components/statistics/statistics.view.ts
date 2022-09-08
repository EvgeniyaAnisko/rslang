import './statistics.css';
import { IStatistics } from '../../core/services/models/IStatistics';

export abstract class StatisticsView {
  public static getStatisticsImage(data: IStatistics | null) {
    const res = <IStatistics>data;
    return `<div class="statistic-wrapper">
                        <div>
                            <div class="statistic-text">Max correct answers in Audio game: ${res.optional.maxAudio}</div>
                            <div class="statistic-text">Last result in Audio game: ${res.optional.lastAudio}</div>
                        </div>
                        <div>
                            <div class="statistic-text">Max score in Sprint game: ${res.optional.maxSprint}</div>
                            <div class="statistic-text">Last score in Sprint game: ${res.optional.lastSpring}</div>
                        </div>
                    </div>`;
  }
}
