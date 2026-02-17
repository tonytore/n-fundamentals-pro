import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
// import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongsService {
  songs: CreateSongDto[] = [];
  create(createSongDto: CreateSongDto) {
    const newSongs = {
      id: this.songs.length + 1,
      title: createSongDto.title,
      artists: createSongDto.artists,
      releaseDate: createSongDto.releaseDate,
      duration: createSongDto.duration,
    };
    this.songs.push(newSongs);
    return this.songs;
  }

  findAll() {
    return {
      songs: this.songs,
      total: this.songs.length,
      message: 'Songs retrieved successfully',
    };
  }

  findOne(id: number) {
    const song = this.songs.find((song) => song.id === id);
    if (!song) {
      return { message: `Song with id ${id} not found` };
    }
    return song;
  }

  // update(id: number, updateSongDto: UpdateSongDto) {
  //   return `This action updates a #${id} song`;
  // }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
