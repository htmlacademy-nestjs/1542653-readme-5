import { PostInterface } from './post.interface';

export interface QuotePublicationInterface extends PostInterface {
  author: string;
  text: string;
}
