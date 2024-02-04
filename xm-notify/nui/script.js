function notify(text, type, duration) {

    let n = document.querySelector('.notifications')

    let newNotification = document.createElement('div')

    if (duration === undefined)
        duration = 5
    let durationT = duration * 1000

    let title   = ''
    let icon    = ''
    switch (type) {
        case 'success':
            icon = 'fa-solid fa-circle-check'
            title = 'Success!'
            break
        case 'error':
            icon = 'fa-solid fa-circle-xmark'
            title = 'Error!'
            break
        case 'info':
            icon = 'fa-solid fa-circle-info'
            title = 'Info!'
            break
        default:
            type = "info"
            icon = 'fa-solid fa-circle-info'
            title = 'Info!'
            break
    }

    newNotification.innerHTML = `
    <div class="noti ${type} show">
        <div class="icon">
            <span class="_icon ${icon}"></span>
        </div>
        <div class="contents">
            <span class="_title">${title}</span>
            <span class="_text">${text}</span>
            <div class="progressbar" style="animation: bar ${duration}s ease forwards;"></div>
        </div>
    </div>
    `
    n.appendChild(newNotification)
    setTimeout(function(){
        newNotification.innerHTML = `
        <div class="noti ${type} hide">
            <div class="icon">
                <span class="_icon ${icon}"></span>
            </div>
            <div class="contents">
                <span class="_title">${title}</span>
                <span class="_text">${text}</span>
                <div class="progressbar"></div>
            </div>
        </div>
        `
    }, durationT)
    setTimeout(function(){
        n.removeChild(newNotification)
    }, durationT + 950)
}

window.addEventListener('message', function (event) {
    const data = event.data
    notify(data.text, data.tType, data.duration)
})