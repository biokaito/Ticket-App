import { Publisher, Subjects, OrderCreatedEvent } from "@sgtickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}