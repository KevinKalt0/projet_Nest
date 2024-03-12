import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { StaticModule } from './static/static.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [StaticModule, DynamicModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}

