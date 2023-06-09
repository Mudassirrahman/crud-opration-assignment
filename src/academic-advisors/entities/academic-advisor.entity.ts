import { EntityBase } from "src/base/base.entity";
import { Column, Entity} from "typeorm";

@Entity("academicAdvisor")
export class AcademicAdvisorEntity extends EntityBase{
@Column()
name: string

@Column()
adress: String
}


