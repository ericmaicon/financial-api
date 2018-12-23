import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  company: string;

  @Column()
  company_segment: string;

  @Column()
  sector: string;

  @Column()
  sub_sector: string;
}
