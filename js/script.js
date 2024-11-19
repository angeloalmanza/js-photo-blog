// Prelevo i dati dall'HTML
const rowElem = document.querySelector('.row');

// Chiamata API
const params = {
    _limit : 6
}
const createCard = () => {
    let result = '';

    // Una sola richiesta per ottenere 6 card
    axios.get('https://jsonplaceholder.typicode.com/photos', {params})
        .then((resp) => {
            resp.data.forEach((photo) => {
                result += `
                    <div class="col mb-4">
                        <div class="card">
                            <img src="${photo.url}" class="card-img-top p-3">
                            <div class="card-body">
                                <p class="card-text">${photo.title}</p>
                            </div>
                        </div>
                    </div>
                `;
            });

            // Una volta ottenuti i risultati, aggiorna il DOM
            rowElem.innerHTML = result;
        })
        .catch((error) => {
            console.error('Errore nella richiesta:', error);
        });
}

createCard();