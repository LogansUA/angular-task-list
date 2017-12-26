export class Task {
  id: number;
  name: string;
  liveTime = 5;

  public constructor(name: string, liveTime: number = 5) {
    this.name = name;
    this.liveTime = liveTime;
  }

  public getLiveTime(): number | null {
    if (!this.liveTime) {
      return null;
    }

    return this.liveTime * 1000;
  }
}
