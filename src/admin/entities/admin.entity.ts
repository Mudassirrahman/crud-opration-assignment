import { EntityBase } from "src/base/base.entity";
import { Column, Entity} from "typeorm";

@Entity("admin")
export class AdminEntity extends EntityBase{
@Column()
name: string

@Column()
age: Number
}

