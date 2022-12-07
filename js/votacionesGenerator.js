fetch("https://especiales.larepublica.pe/congreso-votacion/prueba.json")
    .then(response => response.json())
    .then(data => {
        const votaciones = data;
        let widthDevice = window.innerWidth;
        function renderEspeciales() {
            const especiales__container = document.querySelector('.especiales__container');
            const mesesContainer = votaciones.map(votacion => {
                return (
                    `<div id=${votacion.id} class="date mes">
                        <h3>${votacion.mes}</h3>
                        <div class="button__container" style="display: ${votacion.especiales.length === 1 || widthDevice > 500 ? 'none' : 'flex'}">
                            <button id=prev__button__${votacion.id}>
                                <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="65 80 65 20 35 50 65 80"/>
                                </svg>
                            </button>
                            <button id=next__button__${votacion.id}>
                                <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="35 80 35 20 65 50 35 80"/>
                                </svg>
                            </button>
                        </div>
                    </div>`
                )
            })
            especiales__container.innerHTML = mesesContainer.join('');

            votaciones.forEach(votacion => {
                const especialPorMesContainer = document.querySelector(`#${votacion.id}`);
                const especialPorMes = votacion.especiales.map(especial => {
                    return (
                        `
                            <div class="element especial__${votacion.id}">
                                <a href=${especial.url}>
                                    <img src=${especial.portada} alt='${especial.titulo}'>
                                    <div class="elementText">
                                        <p>${especial.titulo}</p>
                                    </div>
                                </a>
                            </div>
                        `
                    )
                })
                const g = document.createElement('div')
                g.setAttribute("id", `especiales-${votacion.id}`)
                g.setAttribute("class", `votacionesContainer`)
                especialPorMesContainer.appendChild(g).innerHTML = especialPorMes.join('')

                const especiales = document.querySelectorAll(`.especial__${votacion.id}`);

                const onlyShowOne = (a) => {
                    if (widthDevice < 500) {
                        especiales.forEach(especial => {
                            especial.style.display = 'none';
                        })
                        especiales[a].style.display = 'block';
                    }
                }

                onlyShowOne(0)

                const this__next__button = document.querySelector(`#next__button__${votacion.id}`)
                const this__prev__button = document.querySelector(`#prev__button__${votacion.id}`)
                const handleNext = () => {
                    const especialesArray = Array.from(especiales);
                    const a = especialesArray.findIndex(especial => especial.style.display === 'block')
                    if (a < especialesArray.length - 1) {
                        onlyShowOne(a + 1)
                    } else {
                        onlyShowOne(0)
                    }
                }
                const handlePrev = () => {
                    const especialesArray = Array.from(especiales);
                    const a = especialesArray.findIndex(especial => especial.style.display === 'block')
                    if (a > 0) {
                        onlyShowOne(a - 1)
                    } else {
                        onlyShowOne(especialesArray.length - 1)
                    }
                }
                this__next__button.addEventListener('click', handleNext)
                this__prev__button.addEventListener('click', handlePrev)
            })
        }
        window.addEventListener("resize", function () {
            widthDevice = window.innerWidth;
                renderEspeciales()
            }
        );
        renderEspeciales()

    })