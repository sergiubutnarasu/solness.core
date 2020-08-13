import { BaseEntity } from '../objects/entities';
import { Repository } from 'typeorm';

export class BaseRepository<T extends BaseEntity> extends Repository<T> {}
