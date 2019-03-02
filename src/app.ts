// advanced types and practices
// intersection types

interface Order {
	id: string;
	amount: number;
	currency: string;
}

interface Stripe {
	card: string;
	cvc: string;
}

interface PayPal {
	email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
// type CheckoutABC = Order & { name: string };

const order: Order = {
	id: 'jkl59',
	amount: 100,
	currency: 'USD'
};

const orderCard: CheckoutCard = {
	...order,
	card: '1000 2000 3000 4000',
	cvc: '123'
};

const orderPayPal: CheckoutPayPal = {
	...order,
	email: 'abc@default.com'
};

// example of the es5 way before we had the spread operator
const assign = Object.assign({}, order, orderCard);
