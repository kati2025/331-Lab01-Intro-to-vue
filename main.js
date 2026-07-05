const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Description: good')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('http://www.camt.cmu.ac.th')
        const inStock = ref(true)
        return {
            product,
            description,
            image,
            link,
            inStock
        }
    }

}).mount('#app')
