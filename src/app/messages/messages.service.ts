import { Injectable } from '@angular/core';
import { Message } from './message';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable()
export class MessagesService {

  private messages: Message[] = [];

  getMessages() {
    this.messages = MOCKMESSAGES;
    return this.messages;
  }

  getMessage(idx: number) {
    return Message[idx];
  }

  constructor() { }

}
