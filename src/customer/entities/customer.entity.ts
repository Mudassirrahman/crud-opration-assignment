import { EntityBase } from "src/base/base.entity";
import { Column, Entity} from "typeorm";

@Entity("Customer")
export class CustomerEntity extends EntityBase{
@Column()
name: string

@Column()
adress: String
}

