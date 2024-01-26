import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('order_book_snapshots')
export class OrderBookSnapshot {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pair: string;

    @Column('jsonb')
    asks: any; // JSONBデータ型を使用して、すべてのasksを保存

    @Column('jsonb')
    bids: any; // JSONBデータ型を使用して、すべてのbidsを保存

    @Column('bigint')
    timestamp: number;

    @Column('bigint')
    sequence_id: string;
}