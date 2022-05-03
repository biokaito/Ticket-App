import { Publisher } from "@sgtickets/common";
import { TicketCreatedEvent } from "@sgtickets/common";
import { Subjects } from "@sgtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated; // or readonly subject ... to make sure subject can be changed
}
