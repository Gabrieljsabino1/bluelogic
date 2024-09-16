import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateUserDto extends PartialType(CreateProductDto) {}
