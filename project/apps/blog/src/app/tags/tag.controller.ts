import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiQuery, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { fillDTO } from '@project/shared/helpers';
import { CreateTagDTO } from './dto/create-tag.dto';
import { TagRDO } from './rdo/tag.rdo';
import { TagService } from './tag.service';

@ApiTags('blog-tags')
@Controller('tags')
export class TagController {

  constructor(
    private readonly tagService: TagService,
  ) {}

  public async index(): Promise<void> {
    
  }

  @ApiResponse({
    type: TagRDO,
    status: HttpStatus.CREATED,
    description: 'The new tag has been successfully created'
  })
  @Post()
  public async create(
    @Body()
    dto: CreateTagDTO
  ): Promise<TagRDO> {
    const createdTag = await this.tagService.createTag(dto);

    return fillDTO(TagRDO, createdTag.toPOJO());
  }

  update() {

  }

  delete() {

  }
}
