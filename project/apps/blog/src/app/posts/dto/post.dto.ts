import { ApiProperty } from '@nestjs/swagger';
import { PostTypes, TagInterface } from '@project/shared/types';

export class PostDTO {
    @ApiProperty({
        description: 'The name of blog post',
        example: 'Good news',
        required: true
    })
    public name: string;
    
    @ApiProperty({

    })
    public tags: TagInterface[];
    
    @ApiProperty({

    })
    public status: string;
    
    @ApiProperty({

    })
    public authorId: string;
    
    @ApiProperty({

    })
    public url: string;
    
    @ApiProperty({

    })
    public photo: string;
    
    @ApiProperty({

    })
    public text: string;
    
    @ApiProperty({

    })
    public quoteAuthor: string;
    
    @ApiProperty({

    })
    public announcement: string;
    
    @ApiProperty({

    })
    public videoUrl: string;
    
    @ApiProperty({

    })
    public type: PostTypes.Link | PostTypes.Photo | PostTypes.Quote | PostTypes.Text | PostTypes.Video;
}
