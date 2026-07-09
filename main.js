const { createApp } = Vue

const app = createApp({
    setup() {
        const cart = ref([])
        const premium = ref(false)
        function updateCart(id) {
            cart.value.push(id)
        }
        function removeFromCart(id) {
            const index = cart.value.lastIndexOf(id)

            if (index > -1) {
                cart.value.splice(index, 1)
            }
        }
        return {
            cart,
            premium,
            updateCart,
            removeFromCart
        }
    }
})

app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.component('review-form', reviewForm)
app.component('review-list', reviewList)

app.mount('#app')




/*createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('Description: good')
        //const image = ref('./assets/images/socks_green.jpg')
        const link = ref('http://www.camt.cmu.ac.th')
        //const inStock = ref(true)
        const inventory = ref(9)
        const onSale = ref(true)

        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue',  image: './assets/images/socks_blue.jpg', quantity: 0}
        ])
        const selectedVariant = ref(0)
        const sizes = ref([
            'S','M','L'
        ])
        const cart = ref(0)

            function addToCart() {
                cart.value +=1
            }
        const title = computed(() =>{
            return brand.value + ' ' + product.value
        })
            //function updateImage(variantImage){
                //image.value = variantImage
            //}
            function toggleStock() {
                inStock.value =!inStock.value
            }
            function updateVariant(index){
                selectedVariant.value = index;
            }
            const image = computed(() => {
                return variants.value[selectedVariant.value].image
            })
            const inStock = computed(() => {
                return variants.value[selectedVariant.value].quantity
            })
            const onSaleMessage = computed(() => {
                if (onSale.value) {
                    return brand.value + ' ' + product.value + ' ' + 'is on sale'
                }
            })

        return {
            title,
            description,
            image,
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            toggleStock,
            updateVariant,
            onSaleMessage
        }
    }

}).mount('#app')*/
