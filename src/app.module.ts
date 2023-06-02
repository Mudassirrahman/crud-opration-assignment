import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { SchoolModule } from './school/school.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { TeacherAssistentsModule } from './teacher-assistents/teacher-assistents.module';
import { AcademicAdvisorsModule } from './academic-advisors/academic-advisors.module';
import { ShopModule } from './shop/shop.module';
import { CustomerModule } from './customer/customer.module';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [UserModule, AdminModule, SchoolModule, TeachersModule, StudentsModule, TeacherAssistentsModule, AcademicAdvisorsModule, ShopModule, CustomerModule, SellerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
