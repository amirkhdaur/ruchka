window.addEventListener('load', function () {
    const stockElement = document.getElementById('stock')
    const buyBtnElement = document.getElementById('buy-btn')
    const stockProgressElement = document.getElementById('stock-progress')
    const progressBarElement = document.getElementById('progress-bar')
    const toastLiveExample = document.getElementById('liveToast')
    let sold = false

    buyBtnElement.addEventListener('click', () => {
        if (!sold) {
            stockElement.innerHTML = '0'
            buyBtnElement.innerHTML = 'Вернуть'
            stockProgressElement.innerHTML = '1'
            progressBarElement.style.width = '100%'
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastBootstrap.show()
        } else {
            stockElement.innerHTML = '1'
            buyBtnElement.innerHTML = 'Купить'
            stockProgressElement.innerHTML = '0'
            progressBarElement.style.width = '0%'
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastBootstrap.hide()
        }
        sold = !sold
    })
})