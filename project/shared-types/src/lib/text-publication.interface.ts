import { PublicationInterface } from './publication.interface';

export interface TextPublicationInterface extends PublicationInterface {
  announcement: string;
  text: string;
}
