import { Injectable } from '@nestjs/common';
import { CreateTagDTO } from './dto/create-tag.dto';
import { TagEntity } from './tag.entity';
import { TagRepository } from './tag.repository';

@Injectable()
export class TagService {

  constructor(
    private readonly tagRepository: TagRepository,
  ) {}


  public async createTag (dto: CreateTagDTO): Promise<TagEntity> {
    const tagEntity = new TagEntity(dto);
    const tag = await this.tagRepository.save(tagEntity);

    return tag;
  }

}
