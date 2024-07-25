import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
    constructor(public messagesRepository: MessagesRepository) {
        //* Service is creating it's own dependency
        // !! DO NOT USE THIS IN NEST 
        // this.messagesRepository = new MessagesRepository()
    }

    findOne(id: string) {
        return this.messagesRepository.findOne(id)
    }

    findAll() {
        return this.messagesRepository.findAll()
    }

    create(content: string) {
        return this.messagesRepository.create(content)
    }

}