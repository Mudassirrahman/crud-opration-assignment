import { EntityBase } from "src/base/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop")
export class Shop extends EntityBase {

@Column()
nameProducts: String;

@Column()
priceProduct: Number
}
