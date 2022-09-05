import { StatisticService } from '../../core/services/statistic';
import { StatisticsView } from './statistics.view';

export class Statistics {
  private statisticService: StatisticService;

  constructor() {
    this.statisticService = new StatisticService();
  }

  public init() {
    this.render();
  }

  private async render() {
    const statistics = <HTMLElement>document.getElementById('statistic-page');
    statistics.innerHTML = '';
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const data = await this.statisticService.get();
    statistics.insertAdjacentHTML('beforeend', StatisticsView.getStatisticsImage(data));
  }
}
