import Lampa from "./Lampa.js";

class Jatekter {
    #LampaLista = [];
    constructor(meret) {
        this.meret = meret;

       
        $(":root").css("--palyaMeret", this.meret);

        let szuloElem = $("article");


        for (let index = 0; index < meret * meret; index++) {
            const lampa = new Lampa(index, false, szuloElem);
            this.#LampaLista.push(lampa);  
        }


        $(window).on("lampaKapcsolas", (event) => {
            console.log('kapcsolasi esemmeny')

        });
    }

    setLampaAllapota(tomb) {
        tomb.forEach((element, index) => {
            this.#LampaLista[index].setAllapot(element);
        });
    }
}

export default Jatekter;
