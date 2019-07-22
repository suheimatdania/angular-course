import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
    color: white;
  }`]
})
export class ServerComponent {
  serverID = 10;
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus == 'online' ? 'green' : 'blue';
  }
}
