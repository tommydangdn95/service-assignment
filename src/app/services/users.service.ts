import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UsersService {
  public activeUsers = ['Max', 'Anna'];
  public inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  activeUser(id: number): void {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.countActive();
  }

  inactiveUser(id): void {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.countInActive();
  }
}
