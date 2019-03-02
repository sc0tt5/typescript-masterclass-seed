// advanced types and practices
// discriminated (tagged) unions

interface Order {
	id: string;
	amount: number;
	currency: string;
}

interface Stripe {
	type: 'stripe'; // to differentiate between this and PayPal -- discriminate types with this common property
	card: string;
	cvc: string;
}

interface PayPal {
	type: 'paypal'; // to differentiate between this and Stripe -- discriminate types with this common property
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
	type: 'stripe',
	card: '1000 2000 3000 4000',
	cvc: '123'
};

const orderPayPal: CheckoutPayPal = {
	...order,
	type: 'paypal',
	email: 'abc@default.com'
};

// custom union type
type Payload = CheckoutCard | CheckoutPayPal;

function checkout(payload: Payload) {
	// how do we detect type here?
	// create union type ...checking one or other
	// type is the discriminated property
	if (payload.type === 'stripe') {
		console.log(payload.card, payload.cvc);
	}
	if (payload.type === 'paypal') {
		console.log(payload.email);
	}
}
