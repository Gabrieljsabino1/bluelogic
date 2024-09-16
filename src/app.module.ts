import { Module } from '@nestjs/common';
import { UsersModule } from './users/item.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
