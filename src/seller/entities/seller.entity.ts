import { EntityBase } from "src/base/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seller")
export class SellerEntity  extends EntityBase{
    @Column()
    name: String;

    @Column()
    address: String;
}
