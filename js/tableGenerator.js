const tableGenerator = (dataJson) => {

    let filterVoto = ''
    const congresPersonContainer = document.querySelector("#congresPersonContainer");
    const congresPerson = dataJson;

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const SortArray = (d) => {
        const namesArray = []
        const orderCongresArray = []
        for (element in d) {
            namesArray[element] = d[element].Congresista
        }
        for (ele in namesArray) {
            orderCongresArray[ele] = d.filter(congres => congres.Congresista == namesArray.sort()[ele])[0]
        }
        return orderCongresArray
    }

    tipeVotoAfavor.addEventListener('click', function () {
        if (filterVoto === 'Afavor') {
            const congresPersonContainerHTML = SortArray(congresPerson).map(congresPerson => {
                const identificadorVoto = removeAccents(congresPerson.Vacancia.split(" ").join(""));
                return `
                    <div class="congresPersonText">
                        <div class="identificador ${identificadorVoto}"></div>
                        <div>
                            <p>${congresPerson.Congresista}</p>
                            <span class="partyName">${congresPerson.Bancada}</span>
                        </div>
                    </div>
                `
            }).join("");
            congresPersonContainer.innerHTML = congresPersonContainerHTML;
            filterVoto = ''
            tipeVotoAfavor.className = 'tipe tipe-Afavor'
            votosCantidad.textContent = `${congresPerson.length} votos`
        } else {
            filterVoto = 'Afavor'
            const congresVotoAFavor = SortArray(congresPerson).filter(elm => removeAccents(elm.Vacancia.split(" ").join("")) === filterVoto)
            const congresPersonContainerHTML = congresVotoAFavor.map(congresVotoAFavor => {
                const identificadorVoto = removeAccents(congresVotoAFavor.Vacancia.split(" ").join(""));
                return `
                    <div class="congresPersonText">
                        <div class="identificador ${identificadorVoto}"></div>
                        <div>
                            <p>${congresVotoAFavor.Congresista}</p>
                            <span class="partyName">${congresVotoAFavor.Bancada}</span>
                        </div>
                    </div>
                `
            }).join("");
            congresPersonContainer.innerHTML = congresPersonContainerHTML;
            tipeVotoAfavor.className = 'tipe tipe-Afavor active-filter-Afavor'
            tipeVotoEncontra.className = 'tipe tipe-Encontra'
            tipeVotoAbstencion.className = 'tipe tipe-Abstencion'
            tipeVotoNovoto.className = 'tipe tipe-Novoto'
            votosCantidad.textContent = `${congresVotoAFavor.length} votos`
        }
    })

    tipeVotoEncontra.addEventListener('click', function () {
        if (filterVoto === 'Encontra') {
            const congresPersonContainerHTML = SortArray(congresPerson).map(congresPerson => {
                const identificadorVoto = removeAccents(congresPerson.Vacancia.split(" ").join(""));
                return `
                    <div class="congresPersonText">
                        <div class="identificador ${identificadorVoto}"></div>
                        <div>
                            <p>${congresPerson.Congresista}</p>
                            <span class="partyName">${congresPerson.Bancada}</span>
                        </div>
                    </div>
                `
            }).join("");
            congresPersonContainer.innerHTML = congresPersonContainerHTML;
            filterVoto = ''
            tipeVotoEncontra.className = 'tipe tipe-Encontra'
            votosCantidad.textContent = `${congresPerson.length} votos`
        } else {
            filterVoto = 'Encontra'
            const congresVotoEncontra = SortArray(congresPerson).filter(elm => removeAccents(elm.Vacancia.split(" ").join("")) === filterVoto)
            const congresPersonContainerHTML = congresVotoEncontra.map(congresVotoEncontra => {
                const identificadorVoto = removeAccents(congresVotoEncontra.Vacancia.split(" ").join(""));
                return `
                    <div class="congresPersonText">
                        <div class="identificador ${identificadorVoto}"></div>
                        <div>
                            <p>${congresVotoEncontra.Congresista}</p>
                            <span class="partyName">${congresVotoEncontra.Bancada}</span>
                        </div>
                    </div>
                `
            }).join("");
            congresPersonContainer.innerHTML = congresPersonContainerHTML;
            tipeVotoAfavor.className = 'tipe tipe-Afavor'
            tipeVotoEncontra.className = 'tipe tipe-Encontra active-filter-Encontra'
            tipeVotoAbstencion.className = 'tipe tipe-Abstencion'
            tipeVotoNovoto.className = 'tipe tipe-Novoto'
            votosCantidad.textContent = `${congresVotoEncontra.length} votos`
        }
    })

    tipeVotoAbstencion.addEventListener('click', function () {
        if (filterVoto === 'Abstencion') {
            const congresPersonContainerHTML = SortArray(congresPerson).map(congresPerson => {
                const identificadorVoto = removeAccents(congresPerson.Vacancia.split(" ").join(""));
                return `
                    <div class="congresPersonText">
                        <div class="identificador ${identificadorVoto}"></div>
                        <div>
                            <p>${congresPerson.Congresista}</p>
                            <span class="partyName">${congresPerson.Bancada}</span>
                        </div>
                    </div>
                `
            }).join("");
            congresPersonContainer.innerHTML = congresPersonContainerHTML;
            filterVoto = ''
            tipeVotoAbstencion.className = 'tipe tipe-Abstencion'
            votosCantidad.textContent = `${congresPerson.length} votos`
        } else {
            filterVoto = 'Abstencion'
            const congresVotoAbstencion = SortArray(congresPerson).filter(elm => removeAccents(elm.Vacancia.split(" ").join("")) === filterVoto)
            const congresPersonContainerHTML = congresVotoAbstencion.map(congresVotoAbstencion => {
                const identificadorVoto = removeAccents(congresVotoAbstencion.Vacancia.split(" ").join(""));
                return `
                    <div class="congresPersonText">
                        <div class="identificador ${identificadorVoto}"></div>
                        <div>
                            <p>${congresVotoAbstencion.Congresista}</p>
                            <span class="partyName">${congresVotoAbstencion.Bancada}</span>
                        </div>    
                    </div>
                `
            }).join("");
            congresPersonContainer.innerHTML = congresPersonContainerHTML;
            tipeVotoAfavor.className = 'tipe tipe-Afavor'
            tipeVotoEncontra.className = 'tipe tipe-Encontra'
            tipeVotoAbstencion.className = 'tipe tipe-Abstencion active-filter-Abstencion'
            tipeVotoNovoto.className = 'tipe tipe-Novoto'
            votosCantidad.textContent = `${congresVotoAbstencion.length} votos`
        }
    })

    tipeVotoNovoto.addEventListener('click', function () {
        if (filterVoto === 'Novoto') {
            const congresPersonContainerHTML = SortArray(congresPerson).map(congresPerson => {
                const identificadorVoto = removeAccents(congresPerson.Vacancia.split(" ").join(""));
                return `
                    <div class="congresPersonText">
                        <div class="identificador ${identificadorVoto}"></div>
                        <div>
                            <p>${congresPerson.Congresista}</p>
                            <span class="partyName">${congresPerson.Bancada}</span>
                        </div>
                    </div>
                `
            }).join("");
            congresPersonContainer.innerHTML = congresPersonContainerHTML;
            filterVoto = ''
            tipeVotoNovoto.className = 'tipe tipe-Novoto'
            votosCantidad.textContent = `${congresPerson.length} votos`
        } else {
            filterVoto = 'Novoto'
            const congresVotoNovoto = SortArray(congresPerson).filter(elm => removeAccents(elm.Vacancia.split(" ").join("")) === filterVoto)
            const congresPersonContainerHTML = congresVotoNovoto.map(congresVotoNovoto => {
                const identificadorVoto = removeAccents(congresVotoNovoto.Vacancia.split(" ").join(""));
                return `
                    <div class="congresPersonText">
                        <div class="identificador ${identificadorVoto}"></div>
                        <div>
                            <p>${congresVotoNovoto.Congresista}</p>
                            <span class="partyName">${congresVotoNovoto.Bancada}</span>
                        </div>
                    </div>
                `
            }).join("");
            congresPersonContainer.innerHTML = congresPersonContainerHTML;
            tipeVotoAfavor.className = 'tipe tipe-Afavor'
            tipeVotoEncontra.className = 'tipe tipe-Encontra'
            tipeVotoAbstencion.className = 'tipe tipe-Abstencion'
            tipeVotoNovoto.className = 'tipe tipe-Novoto active-filter-Novoto'
            votosCantidad.textContent = `${congresVotoNovoto.length} votos`
        }
    })

    const congresPersonContainerHTML = SortArray(congresPerson).map(congresPerson => {
        const identificadorVoto = removeAccents(congresPerson.Vacancia.split(" ").join(""));
        return `
                    <div class="congresPersonText">
                        <div class="identificador ${identificadorVoto}"></div>
                        <div>
                            <p>${congresPerson.Congresista}</p>
                            <span class="partyName">${congresPerson.Bancada}</span>
                        </div>
                    </div>
                `
    }).join("");
    congresPersonContainer.innerHTML = congresPersonContainerHTML;
    votosCantidad.textContent = `${congresPerson.length} votos`

}

