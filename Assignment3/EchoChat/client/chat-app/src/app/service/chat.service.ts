import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs/internal/Observable';
import { Message } from '../message';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket:Socket) { }

    public sendMessage(message:Message) {
      console.log(typeof(message));
      this.socket.emit('new-message', message);
    }

    public getMessages = () => {
      return Observable.create((observer:any) => {
              this.socket.on('new-message', (message: Message) => {
                  observer.next(message);
              });
      });
    }
}
