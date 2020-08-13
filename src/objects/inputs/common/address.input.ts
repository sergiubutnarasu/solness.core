import { InputType } from '@nestjs/graphql';
import { Address } from '../../entities';

@InputType()
export class AddressInput extends Address {}
