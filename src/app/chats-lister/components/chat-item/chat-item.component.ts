import {Component, Input} from '@angular/core';
import {GetChats} from '../../../../types';

@Component({
  selector: 'app-chat-item',
  template: `
    <div class="chat-row">
        <div class="chat-recipient">
          <img [src]="chat.picture" width="48" height="48">
          <div>{{ chat.name }} [id: {{ chat.id }}]</div>
        </div>
        <div class="chat-content">{{ chat.lastMessage?.content | truncate : 20 : '...' }}</div>
    </div>
  `,
  styleUrls: ['chat-item.component.scss'],
})
export class ChatItemComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('item')
  chat: GetChats.Chats;
}