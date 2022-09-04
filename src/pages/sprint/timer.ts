export class Timer {
  private limit: number;

  private startTime: number | null = null;

  private timeLeft = 0;

  private stopped = true;

  constructor(seconds = 60) {
    this.limit = seconds * 1000;
    this.stopped = true;
  }

  public start(): void {
    // if (!this.isStopped()) return;
    this.startTime = Date.now();
    this.timeLeft = this.limit;
    this.stopped = false;
  }

  public pause(): void {
    this.timeLeft = this.getTimeLeft();
    this.startTime = null;
  }

  public continue(): void {
    this.startTime = Date.now();
  }

  public isStopped(): boolean {
    return this.stopped;
  }

  private getTimeLeft(): number {
    if (!this.startTime) {
      return this.timeLeft;
    }

    const now = Date.now();
    const timePassed = now - this.startTime;
    return Math.max(this.timeLeft - timePassed, 0);
  }

  public getSecondsLeft(): number {
    return Math.round(this.getTimeLeft() / 1000);
  }
}
