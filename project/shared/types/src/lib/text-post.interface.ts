import { PostInterface } from './post.interface';

export interface TextPublicationInterface extends PostInterface {
  announcement: string;
  text: string;
}
