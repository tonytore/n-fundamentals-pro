import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { connection } from 'src/common/constants/connection';

// const MockSongsService = {
//   findAll() {
//     return [
//       {
//         id: 1,
//         title: 'Song 1',
//         artists: ['Artist 1'],
//         releaseDate: new Date(),
//         duration: new Date(),
//       },
//     ];
//   },
// };
@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    // {
    //   provide: SongsService,
    //   useValue: MockSongsService,
    // },
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongsModule {}
