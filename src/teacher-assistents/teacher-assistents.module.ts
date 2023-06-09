import { Module } from '@nestjs/common';
import { TeacherAssistentsService } from './teacher-assistents.service';
import { TeacherAssistentsController } from './teacher-assistents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherAssistentEntity } from './entities/teacher-assistent.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([TeacherAssistentEntity ])],
  controllers: [TeacherAssistentsController],
  providers: [TeacherAssistentsService]
})
export class TeacherAssistentsModule {}
