let requestURL = 'meditation.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    const meditationData = request.response;
    populateHeader(meditationData);
    showMeditation(meditationData);
}
function populateHeader(obj){
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['quote'];
    header.appendChild(myH1);
    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + obj['homeTown'] + ' // Formed: ' + obj['formed'];
    header.appendChild(myPara);
}
function showHeroes(obj){
    const heroes = obj['members'];
    for (let i = 0; i < heroes.length; i++){
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';
        const superPowers = heroes[i].powers;
        for(let j = 0; j < superPowers.length; j++){
            const listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
}