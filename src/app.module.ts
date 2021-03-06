import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AwsModule } from './aws/aws.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { MatchesModule } from './matches/matches.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    AuthModule,
    AwsModule,
    MatchesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
