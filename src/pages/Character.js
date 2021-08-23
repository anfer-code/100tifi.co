import getData from "@utils/getData";
import getHash from "@utils/getHash";

const Character = async () => {
    const id = getHash()
    const character = await getData(id)
    

    const view = /*html*/`
        <div class="character__inner">
            <article class="character__card">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>

            <article class="character__card">
                <h3>Episodes: <span>${character.episode.length}</span></h3>
                <h3>Status: <span>${character.status}</h3>
                <h3>Species: <span>${character.species}</h3>
                <h3>Gender: <span>${character.gender}</h3>
                <h3>Origin: <span>${character.origin.name}</a> </h3>
                <h3>Last Location: <span>${character.location.name}</h3>
            </article>
        </div>
    
    `;
    return view;
}

export default Character