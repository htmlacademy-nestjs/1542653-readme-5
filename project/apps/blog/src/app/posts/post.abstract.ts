import { Entity } from '@project/shared/core';
import { PostInterface, TagInterface } from '@project/shared/types';

export class PostEntity implements PostInterface, Entity<string> {
    public id?: string;
    public name: string;
    public tags: TagInterface[];
    public authorId?: string;
    public status: string;
    public likesCount: number;
    public type: string

    constructor(post: PostInterface) {
        this.populate(post);
    }

    public populate <T extends PostInterface>(post: T): void {
        this.id = post.id;
        this.name = post.name;
        this.tags = post.tags;
        this.authorId = post.authorId;
        this.status = post.status;
        this.likesCount = post.likesCount;
        this.type = post.type;
    }

    public toPOJO() {
        return {
            id: this.id,
            name: this.name,
            tags: this.tags,
            status: this.status,
            likesCount: this.likesCount,
            type: this.type,
        }
    }

    static fromObject (data: PostInterface): PostEntity {
      return new PostEntity(data);
    }
}
