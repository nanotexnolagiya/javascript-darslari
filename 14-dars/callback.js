
function sleep (timeout, callback) {
    setTimeout(() => {
        console.log('Sleeped')
        callback()
    }, timeout)
}

function showSlider () {
    console.log('Slider showed')
}

sleep(1000, showSlider)


function loadScript (path, callback) {
    const script = document.createElement('script')
    script.src = path
    script.onload = callback
    document.body.append(script)
}

loadScript()

sleep(1000, () => {

    loadScript('script.js', () => {

        // fs.readFile('filename', () => {
            
        //     sendData(obj, () => {

        //     })
        // }) 
    })
})