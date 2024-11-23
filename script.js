const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = 'https://semegenkep.github.io/json/example.json'

const request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function()
{
    const superHeroes = request.response
    populateHeader(superHeroes)
    showHeroes(superHeroes)
    console.log(superHeroes)
}

function populateHeader(superHeroes) {
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = superHeroes.squadName;

    const headerPara = document.createElement('p');
    headerPara.textContent = `Hometown: ${superHeroes.homeTown} // Formed: ${superHeroes.formed}`;

    header.appendChild(headerTitle);
    header.appendChild(headerPara);
}

function showHeroes(superHeroes) {
    superHeroes.members.forEach(member => {
        const article = document.createElement('article');

        const heroName = document.createElement('h2');
        heroName.textContent = member.name;
        article.appendChild(heroName);

        const heroSecretIdentity = document.createElement('p');
        heroSecretIdentity.textContent = `Secret identity: ${member.secretIdentity}`;
        article.appendChild(heroSecretIdentity);

        const heroAge = document.createElement('p');
        heroAge.textContent = `Age: ${member.age}`;
        article.appendChild(heroAge);

        const heroPowers = document.createElement('ul');
        member.powers.forEach(power => {
            const listItem = document.createElement('li');
            listItem.textContent = power;
            heroPowers.appendChild(listItem);
        });
        article.appendChild(heroPowers);

        section.appendChild(article);
    });
}
