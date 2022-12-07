//Generación del gráfico
let widthDevice = window.innerWidth;
let widthFotChart

if (widthDevice < 500) {
    widthFotChart = 350;
} else {
    widthFotChart = 600;
}
const parliament = d3.parliament().width(widthFotChart).innerRadiusCoef(0.4);

const chartGenerator = (dataJson) => {
    parliament.enter.fromCenter(true).smallToBig(true);
    parliament.exit.toCenter(true).bigToSmall(true);
    const setData = function (d) {
        d3.select("svg").datum(d).call(parliament);
    };
    d3.json(dataJson, setData);

    window.addEventListener("resize", function () {
        widthDevice = window.innerWidth;
        if (widthDevice < 500) {
            widthFotChart = 350;
        } else {
            widthFotChart = 600;
        }
        const parliament = d3.parliament().width(widthFotChart).innerRadiusCoef(0.4);
        parliament.enter.fromCenter(true).smallToBig(true);
        parliament.exit.toCenter(true).bigToSmall(true);
        const setData = function (d) {
            d3.select("svg").datum(d).call(parliament);
        };
        d3.json(dataJson, setData);
    });
}

inView('.congresImgElement').on('enter', function (figure) {
    parliament.on("click", (function (e) {
        figure.classList.add('is-loading');
        figure.classList.remove('is-loaded');
        imgPerson.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

        figure.classList.add('is-loading');

        newImg = new Image();
        newImg.src = `../../img/people/${e.party.foto}`
        newImg.classList.add('imgPerson');
        newImg.addEventListener('load', function () {

            figure.innerHTML = '';
            figure.appendChild(this);

            setTimeout(function () {
                figure.classList.remove('is-loading');
                figure.classList.add('is-loaded');
            }, 100);
        });

        const edad = getEdad(e.party.Nacimiento)

        const prevActive = document.querySelector(".active");
        if (prevActive) {
            prevActive.className.baseVal = prevActive.className.baseVal.replace("active", "");
            this.className.baseVal = this.className.baseVal + " active";
        } else {
            this.className.baseVal = this.className.baseVal + " active";
        }

        elementImg.className = `elementImg imgPersonBorder-${e.party.id}`
        elementText.className = `elementText imgPersonBorder-${e.party.id}`
        displayPerson.className = `displayPerson`
        noSelectMessage.className = 'close'
        personName.textContent = e.party.Congresista
        personPartido.textContent = e.party.Bancada
        personVacancia.textContent = `Voto: ${e.party.Vacancia}`
        personNacimiento.textContent = `Edad: ${edad} años`
        personGenero.textContent = `Género: ${e.party.Genero}`
        personRegion.textContent = `Región: ${e.party.Region} `
    }))
});
