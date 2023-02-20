// eslint-disable-next-line
import { Knex } from 'knex';

declare module 'knex/types/tables' {
	export interface Tables {
		transactions: {
			id: string;
			title: string;
			amount: number;
			createAt: string;
			sessionId?: string;
		};
	}
}
