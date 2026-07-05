const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Description: good')
        return {
            product,
            description
        }
    }

}).mount('#app')
