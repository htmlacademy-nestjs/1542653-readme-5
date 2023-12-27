import { Body, Controller, Delete, Get, Post, Query, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { fillDTO } from '@project/shared/helpers';
import { DEFAULT_LIMIT_ENTITIES } from '@project/shared/constants';
import { CommentService } from './comment.service';
import { CommentDTO } from './dto/comment.dto';
import { CommentRDO } from './rdo/comment.rdo';

@ApiTags('blog-comments')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiResponse({
    type: CommentRDO,
    status: HttpStatus.CREATED,
    description: 'The new comment has been successfully created'
  })
  @Post()
  public async create(
    @Body() dto: CommentDTO
  ): Promise<CommentRDO> {
    const createdComment = await this.commentService.createComment(dto);
    return fillDTO(CommentRDO, createdComment.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The list of comments for post'
  })
  @Get()
  public async index(
    @Query() limit?: string,
  ): Promise<CommentRDO> {
    const commentCount = Number(limit) ? Number(limit) : DEFAULT_LIMIT_ENTITIES;
    const comments = await this.commentService.findComments(commentCount);
    const plainComments = comments.map((comment) => comment.toPOJO());
    return fillDTO<CommentRDO, Record<string, typeof plainComments>>(CommentRDO, {'comments': plainComments});
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Comment has been deleted successfully'
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(
    @Query() id: string
  ): Promise<void> {
    await this.commentService.deleteComment(id);
  }

}
