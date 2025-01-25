export interface User {
	id: number;
	name: string;
	username?: string;
	email: string;
	adress?: {
		street?: string;
		suite?: string;
		city?: string;
	};
	phone?: string;
	website: string;
	company: {
		name: string;
		catchPhrase?: string;
		bs?: string;
	};
}