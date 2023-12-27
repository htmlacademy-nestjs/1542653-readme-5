import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/shared/core';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentRepository extends BaseMemoryRepository<CommentEntity> {
  protected entities: Map<string, CommentEntity> = new Map();

  constructor() {
    super()
  }

  public find(): CommentEntity[] {
    return Array.from(this.entities.entries()).map(([id, comment]) => {
      return new CommentEntity({
        id,
        ...comment,
      })
    })
  }
}

