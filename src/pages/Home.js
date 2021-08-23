import getData from "@utils/getData";

const Home = async () => {
    const charactes = await getData()
    const view = /*html */`
        <div class="character">
            ${charactes.results.map( character => `
                <article class="character__item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}"/>
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join("")}
        </div>

        
    `;

    return view;
}

export default Home;