import { Injectable, NotFoundException } from '@nestjs/common';
import { PostEntity } from './post.abstract';
import { BasePrismaRepository } from '@project/shared/core';
import { PrismaClientService } from '@project/shared/config/blog';
import { PostInterface } from '@project/shared/types';

@Injectable()
export class PostRepository extends BasePrismaRepository<PostEntity, PostInterface> {
    constructor(
      protected readonly client: PrismaClientService,
    ) {
      super(client, PostEntity.fromObject)
    }

    public async findById(id: PostEntity['id']): Promise<PostEntity> {
      const document = await this.client.post.findFirst({
        where: { id: id },
        include: {
          tags: true,
          comments: true,
        }
      });

      if (!document) {
        throw new NotFoundException(`Post with id: ${id} not found`);
      }

      return this.createEntityFromDocument(document);
    }

    public async save(entity: PostEntity): Promise<PostEntity> {
      const document = entity.toPOJO();
      const authorId = entity.authorId;
      const createdPost = await this.client.post.create({
        data: {
          name: document.name,
          status: document.status,
          type: document.type,
          tags: {
            connect: document.tags.map((tag) => {
              return { id: tag.id }
            })
          },
          author: {
            connect: { id: authorId }
          }
        },
      });
      entity.id = createdPost.id;
      return entity;
    }

    public async find(authorId: string, limit: number): Promise<PostEntity[]> {
      const documents = await this.client.post.findMany({
        where: { authorId: authorId },
        include: {
          tags: true,
          comments: true,
        },
        take: limit
      })

      return documents.map((document) => this.createEntityFromDocument(document));

    }

    public async update(id: string, entity: PostEntity): Promise<PostEntity> {
      const updatedDocument = entity.toPOJO();
      const authorId = entity.authorId;
      const updatedEntity = await this.client.post.update({
        where: { id: id },
        data: {
          ...updatedDocument,
          tags: {
            connect: updatedDocument.tags.map((tag) => {
              return { id: tag.id }
            })
          },
          author: {
            connect: { id: authorId }
          },
        },
        include: {
          comments: true,
          tags: true,
        }
      });

      return this.createEntityFromDocument(updatedEntity);
    }

    public async deleteById(id: string): Promise<void> {
      await this.client.post.delete({
        where: { id: id }
      });
    }
}
