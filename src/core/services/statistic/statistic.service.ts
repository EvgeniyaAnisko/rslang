import { StatisticRepository } from './statistic.repository';
import { IStatistics } from '../models/IStatistics';

export class StatisticService {
  private statisticRepository: StatisticRepository;

  constructor() {
    this.statisticRepository = new StatisticRepository();
  }

  // Get
  public get() {
    return this.statisticRepository.get();
  }

  // Put
  public put(data: IStatistics) {
    return this.statisticRepository.put(data);
  }
}
