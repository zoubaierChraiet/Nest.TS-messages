import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { createMessageDto } from '../dtos/message.dto';
import { MessagesService } from '../messages.service';

@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessagesService) {
        //* Service is creating it's own dependency
        // !! DO NOT USE THIS IN NEST 
        // this.messagesService = new MessagesService()
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll()
    }

    @Post()
    createMessage(@Body() body: createMessageDto) {
        return this.messagesService.create(body.content)
    }

    @Get("/:id")
    async getMessage(@Param("id") id: string) {
        const message = await this.messagesService.findOne(id)
        if (!message) {
            throw new NotFoundException()
        }
        return message
    }
}
