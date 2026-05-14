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

export interface User {
  id: number;
  name: string;
  email: string;
}


export interface Rsvp {
  id: number;
  number: number;
  email: string;
}