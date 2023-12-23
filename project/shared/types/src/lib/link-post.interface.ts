import { PostInterface } from './post.interface';

export interface LinkPostInterface extends PostInterface {
  url: string;
  description?: string;
}
