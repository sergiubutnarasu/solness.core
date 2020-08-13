import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity()
@ObjectType()
@InputType({ isAbstract: true })
export class Address extends BaseEntity {
  @Field()
  @Column({ length: 250 })
  street: string;

  @Column({ length: 50 })
  @Field()
  city: string;

  @Column({ nullable: true, length: 50 })
  @Field({ nullable: true })
  county?: string;

  @Column({ length: 50 })
  @Field()
  country: string;

  @Column({ nullable: true, length: 50 })
  @Field({ nullable: true })
  postcode?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  latitude?: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  longitude?: number;
}
