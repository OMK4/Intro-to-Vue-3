const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id);
        },
        removeLastItem(){
            this.cart.pop();
        }
    }
})
