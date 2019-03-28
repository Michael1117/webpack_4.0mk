console.log('hello, my name is Michael')

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').
        then(registration => {
            console.log('Service-worker registed')
        }).catch(error => {
            console.log('service-worker register error')
        })
    })
}