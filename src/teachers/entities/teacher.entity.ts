import { EntityBase } from 'src/base/base.entity';
import { Column, Entity,} from 'typeorm';

@Entity("teachers")
export class TeacherEntity extends EntityBase {
  @Column()
  name: String;

  @Column()
  courseHandeling: String;
}
