function archivos() {
    const url = 'http://localhost:3000/archivos';
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            document.querySelector('#archivos').innerHTML = data.data;
        }
    )
}
function guardar(title, markupText) {
    const url = 'http://localhost:3000/guardar'
    const data = {
        titulo: title,
        text: markupText
    }
    console.log(data)
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
    http = fetch(url, request)
    http.then(
        response => response.json()
    ).then(
        data => {
            document.querySelector("#htmlCode").innerHTML = data.text;
        }
    )
}
document.addEventListener('DOMContentLoaded', function () {
    const titulo = document.getElementById('titulo');
    const text = document.querySelector('#markupText')
    document.querySelector('#markupForm').onsubmit = () => {
        guardar(titulo.value, text.value)
        return false;
    }
})