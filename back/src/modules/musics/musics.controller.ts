import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MusicsSevice } from './musics.service';
import { CreateMusicDto } from './dtos/create-music.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@ApiTags('Musics')
@Controller('musics')
export class MusicsController {
  constructor(private musicsService: MusicsSevice) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() data: CreateMusicDto, @Request() req) {
    return this.musicsService.create(data, req.user.id);
  }

  @Get()
  findAll() {
    return this.musicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicsService.findOne(id);
  }

  @Patch('upload/:id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'cover_image', maxCount: 1 },
      { name: 'music', maxCount: 1 },
    ]),
  )
  async upload(
    @UploadedFiles()
    files: { cover_image: Express.Multer.File[]; music: Express.Multer.File[] },
    @Param('id') id: string,
  ) {
    const { cover_image, music } = files;
    return this.musicsService.upload(cover_image[0], music[0], id);
  }
}
