
document.addEventListener('DOMContentLoaded', () => {
    const username = "tagovertag"; // Nome de usuário do GitHub
    const apiUrl = `https://api.github.com/users/${username}`; // URL da API do GitHub
    
    const requisicao = new XMLHttpRequest();
    requisicao.open("GET", apiUrl, true);
    
    requisicao.onload = () => {
        try {
            if (requisicao.status !== 200) {
                throw new Error(`Erro ao buscar dados: ${requisicao.statusText}`);
                }
                
                const data = JSON.parse(requisicao.responseText);
                
                // Atualizar a imagem no HTML com o avatar do GitHub
                const avatarElement = document.querySelector('.avatar');
                if (avatarElement) {
                    avatarElement.src = data.avatar_url;
                    avatarElement.alt = `Avatar de ${data.login}`;
                    }

                 // Atualizar o nome, usando na API
                const nameElement = document.querySelector('.name');
                if (nameElement) {
                    nameElement.textContent = data.name || "Nome não disponível";
        }
                    
                    // Atualizar o link do perfil no GitHub
                    document.querySelector('.link').href = data.html_url;
                    
                    // Atualizar informações no DOM
                    document.querySelector('.username').textContent = `@${data.login}`;
                    const numbers = document.querySelectorAll('.numbers-item');
                    const [repos, followers, following] = [data.public_repos, data.followers, data.following];
                    
                    numbers[0].innerHTML = `<h4>Repositórios</h4><p>${repos}</p>`;
                    numbers[1].innerHTML = `<h4>Seguidores</h4><p>${followers}</p>`;
                    numbers[2].innerHTML = `<h4>Seguindo</h4><p>${following}</p>`;
                    } catch (error) {
                        console.error(error.message);
                        }
                        };
                
                        requisicao.onerror = () => console.error("Erro ao conectar ao servidor.");
                        requisicao.send();
                        });
