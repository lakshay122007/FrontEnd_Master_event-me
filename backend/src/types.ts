interface Event {
  id: number;
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
  event_id: number;
  user_id: number;
}