import { CoreEntity } from 'src/common/entities/core.entity';
import { Product } from 'src/products/entities/product.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Message } from 'src/messages/entities/message.entity';
import { User } from 'src/users/entities/user.entity';

export class Chat extends CoreEntity {
  messages: Message[] = [];
  users: User[] = [];
  product?: Product;
  order?: Order;
}
