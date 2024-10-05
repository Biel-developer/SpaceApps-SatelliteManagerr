// Seleciona a div onde os cards vão aparecer
const satelitesDiv = document.querySelector('.Navbar--Satelites');

// Função para buscar e criar os cards
function fetchAndDisplaySatellites() {
    // Usa fetch para obter o arquivo JSON
    fetch('index.json')
        .then(response => response.json())
        .then(satellites => {
            // Para cada satélite, cria um card
            satellites.forEach(satellite => {
                const card = document.createElement('div');
                card.classList.add('satellite-card');

                // Adiciona as informações do satélite no card
                card.innerHTML = `
                    <div class="card-satelite">
                      <img src="./textures/photo-satelite.png" alt="Satellite Icon" class="satellite-icon">
                        <div class="satellite-info">
                         <h3>${satellite.OBJECT_NAME}</h3>
                         <p><strong>ID:</strong> ${satellite.OBJECT_ID}</p>
                      </div>
                   </div>
                `;

                // Adiciona o card ao container
                satelitesDiv.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar os satélites:', error));
}

// Chama a função para buscar e exibir os satélites
fetchAndDisplaySatellites();
