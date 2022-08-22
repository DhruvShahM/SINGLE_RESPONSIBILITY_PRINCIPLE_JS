// class Store{
//     constructor(user){
//         this.paypal=new Paypal(user)
//         this.user=user
//         // this.stripe=new Stripe(user)
//     }

//     purchaseBike(qunatity){
//         // this.stripe.makePayment(200*qunatity*100)
//         this.paypal.makePayment(this.user,200*qunatity*100)

//     }

//     purchaseHelmet(qunatity){
//         // this.stripe.makePayment(15*qunatity*100)
//         this.paypal.makePayment(this.user,15*qunatity*100)
//     }
// }


class Store{
    constructor(paymentProcessor){
        this.paymentProcessor=paymentProcessor;
    }

    purchaseBike(qunatity){
        this.paymentProcessor.pay(200*qunatity)
    }

    purchaseHelmet(qunatity){
        // this.stripe.makePayment(15*qunatity*100)
        this.paymentProcessor.pay(15*qunatity)
    }
}

class StripePaymentProcessor{
    constructor(user){
        this.stripe=new Stripe(user);
    }

    pay(amountInCents){
        this.stripe.makePayment(amountInCents*100)
    }
}

class Stripe{
    constructor(user){
        this.user=user;
    }

    makePayment(amountInCents){
        console.log(`${this.user} made the payment of ${amountInCents/100} with stripe`);
    }

}

class PaypalPaymentProcessor{
    constructor(user){
        this.user=user
        this.paypal=new Paypal();
    }

    pay(amountInDollars){
        this.paypal.makePayment(this.user,amountInDollars*100)
    }
}

class Paypal{
    makePayment(user,amountInDollars){
        console.log(`${user} made payment of ${amountInDollars} with Paypal`);
    }
}


const store=new Store(new StripePaymentProcessor('John'))
store.purchaseBike(2)
store.purchaseHelmet(2)


const store2=new Store(new PaypalPaymentProcessor('Harry'))
store2.purchaseBike(2)
store2.purchaseHelmet(2)