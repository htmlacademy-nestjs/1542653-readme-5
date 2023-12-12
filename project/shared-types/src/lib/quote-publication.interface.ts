import { PublicationInterface } from './publication.interface';

export interface QuotePublicationInterface extends PublicationInterface {
  author: string;
  text: string;
}
