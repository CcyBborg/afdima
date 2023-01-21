import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';
import { Chat } from 'src/messages/entities/chat.entity';

export class Message extends CoreEntity {
  content: string;
  chat: Chat;
  user: User;
}
