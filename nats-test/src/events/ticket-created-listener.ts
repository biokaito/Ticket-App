import { Listener } from "@sgtickets/common";
import { Message } from "node-nats-streaming";
import { TicketCreatedEvent } from "@sgtickets/common";
import { Subjects } from "@sgtickets/common";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = "payments-server";

  onMessage(data: TicketCreatedEvent['data'], msg: Message): void {
    console.log("Event data!", data);
    msg.ack();
  }
}
