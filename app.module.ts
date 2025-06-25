import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { OrdersModule } from './orders/orders.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        database: 'users',
        username: 'postgres',
        password: 'examplepassword',
        synchronize: true,
        entities,
      }),
      TypeOrmModule.forFeature(entities),
      OrdersModule,
      PaymentModule],
  controllers: [AppController, OrdersController, PaymentController],
  providers: [AppService, OrdersService, PaymentService],
})
export class AppModule {}
