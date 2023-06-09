import { EntityBase } from 'src/base/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('students')
export class StudentEntity extends EntityBase {
  @Column()
  name: String;

  @Column()
  cohort: String;
}
