import { Module } from '@nestjs/common';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesRepository, MessagesService]
})
export class MessagesModule { }
