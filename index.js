document.getElementById('form').addEventListener("submit", sendWhats)

function sendWhats(ev){
    ev.preventDefault()

    const name = document.getElementById('name').value
    const message = document.getElementById('message').value
    const phone = "5522992266180"

    const text = `Olá! Me chamo ${name}, ${message}`
    const formattedMsg = encodeURIComponent(text)

    const url = `https://wa.me/${phone}?text=${formattedMsg }`

    window.open(url, '_blank')    
}