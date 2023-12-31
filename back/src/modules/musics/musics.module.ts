import { BadRequestException, Module } from '@nestjs/common';
import { MusicsController } from './musics.controller';
import { MusicsSevice } from './musics.service';
import { MusicsRepository } from './repositories/musics.repository';
import { PrismaService } from 'src/database/prisma.service';
import { MusicsPrismaRepository } from './repositories/prisma/musics.prisma.repository';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './tmp',
        filename: (_, file, cb) => {
          cb(null, file.originalname);
        },
      }),
      fileFilter: (_, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'audio/mpeg') {
          cb(null, true);
        } else {
          cb(new BadRequestException('Only jpeg format allowed'), false);
        }
      },
    }),
  ],
  controllers: [MusicsController],
  providers: [
    MusicsSevice,
    PrismaService,
    { provide: MusicsRepository, useClass: MusicsPrismaRepository },
  ],
})
export class MusicsModule {}
