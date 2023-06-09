import { EntityBase } from "src/base/base.entity";
import { Column, Entity} from "typeorm";

@Entity("school")
export class SchoolEntity extends EntityBase{
@Column()
name: string

@Column()
adress: String
}

