const percentage__chart = document.getElementById("percentage__chart");
const figures = document.querySelectorAll('figure');
const congresImgElement = document.querySelector('.congresImgElement');
const imgPerson = document.querySelector(".imgPerson");
const displayPerson = document.querySelector(".displayPerson");
const noSelectMessage = document.querySelector(".noSelectMessage");
const elementImg = document.querySelector('.elementImg');
const elementText = document.querySelector(".elementText");
const personName = document.querySelector(".personName");
const personPartido = document.querySelector(".personPartido");
const personVacancia = document.querySelector(".personVacancia");
const personNacimiento = document.querySelector(".personNacimiento");
const personGenero = document.querySelector(".personGenero");
const personRegion = document.querySelector(".personRegion");
const votosCantidad = document.querySelector(".votosCantidad");
const tipeVotoAfavor = document.querySelector(".tipe-Afavor");
const tipeVotoEncontra = document.querySelector(".tipe-Encontra");
const tipeVotoAbstencion = document.querySelector(".tipe-Abstencion");
const tipeVotoNovoto = document.querySelector(".tipe-Novoto");

const getEdad = (dateString) => {
    let hoy = new Date()
    let fechaNacimiento = new Date(dateString)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
        edad--
    }
    return edad
}