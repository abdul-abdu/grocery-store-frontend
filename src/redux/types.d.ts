interface ICart {}

interface IUser {
	_id: string | null;
	firstname: string;
	lastname: string;
	email: string;
	cart: ICart[];
}

interface IProduct {}