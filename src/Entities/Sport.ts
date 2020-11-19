import { Entity  }  from "typeorm/decorator/entity/Entity";
import {  PrimaryGeneratedColumn }  from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import {  Column } from "typeorm/decorator/columns/Column";

Entity("sports")
export class Sport{
    
    @PrimaryGeneratedColumn()
    id: number | undefined; 

    @Column("text", { nullable: true })
    name: string | undefined;
}
