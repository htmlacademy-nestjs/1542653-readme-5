import { TagInterface } from './tag.interface';

export interface PostInterface {
  id?: string;
  name: string;
  type: 'text' | 'video' | 'quote' | 'photo' | 'link';
  tags: TagInterface[];
  authorId?: string;
  status: 'draft' | 'published';
  likesCount: number;
}
