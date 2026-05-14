export type Id = number;


export interface Event {
  id: Id;
  title: string;
  description?: string;
  date: Date;
  image_url?: string;
  host_id: number;
  host?: User;
  rsvps?: Rsvp[];

}

interface User {
  id: number;
  name: string;
  email: string;
}


interface Rsvp {
  id: number;
  number: number;
  email: number;
}