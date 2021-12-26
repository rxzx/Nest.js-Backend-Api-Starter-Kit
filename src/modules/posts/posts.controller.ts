import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequestStatus, SwaggerApiConfig } from 'src/constants';
import { ApiResponseModel } from 'src/models';
import { PostsService } from './posts.service';

@ApiTags(SwaggerApiConfig.Tags.Posts)
@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) { }

    // @ApiOperation({ summary: 'Get Posts'})
    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: 'The found record' })
    @Get()
    getPosts(): ApiResponseModel {
      let response: ApiResponseModel = new ApiResponseModel();
      try {
        response.data = this.postService.getPosts();
      } catch (ex: any) {
        response.statusCode = RequestStatus.RequestFailed.StatusCode;
        response.statusText =  RequestStatus.RequestFailed.StausText;
        response.message = ex;
      }
      return response;
    }
  
    @ApiResponse({ status: 200, description: 'The found record' })
    @Get(':id')
    getPostById(@Param('id') id: number): any {
      let response: ApiResponseModel = new ApiResponseModel();
      try {
        response.data = this.postService.getPostById(id);
      } catch (ex: any) {
        response.statusCode = RequestStatus.RequestFailed.StatusCode;
        response.statusText =  RequestStatus.RequestFailed.StausText;
        response.message = ex;
      }
      return response;
    }
  
  
}
