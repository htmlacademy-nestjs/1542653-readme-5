export interface PublicationInterface {
  name: string;
  type: 'text' | 'video' | 'quote' | 'photo' | 'link';
  tags: string[];
}
