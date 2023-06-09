import { EntityBase } from "src/base/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("teacherAssistent")
export class TeacherAssistentEntity extends EntityBase {

    @Column()
    name: String;

    @Column()
    cohortNumber: Number;

    @Column()
    courseAssignd: String;

}
