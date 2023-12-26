import { Expose } from 'class-transformer';
import { TagInterface, PostTypes } from '@project/shared/types';

export class PostRDO {
    @Expose()
    public id: string;

    @Expose()
    public name: string;
    
    @Expose()
    public tags: TagInterface[];

    @Expose()
    public status: string;
    
    @Expose()
    public url: string;

    @Expose()
    public photo: string;
    
    @Expose()
    public text: string;
    
    @Expose()
    public quoteAuthor: string;
    
    @Expose()
    public announcement: string;
    
    @Expose()
    public videoUrl: string;
    
    @Expose()
    public type: PostTypes.Link | PostTypes.Photo | PostTypes.Quote | PostTypes.Text | PostTypes.Video;
}
