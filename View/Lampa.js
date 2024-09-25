class Lampa {
    #allapot;
    #index;
    constructor(index, allapot, szuloElem) {
        this.#index = index;
        this.#allapot = allapot;


        szuloElem.append(`<div class="lampa lekapcsolt"></div>`);
        this.lampaElem = szuloElem.children("div:last-child");

        this.setSzin();


        this.lampaElem.on("click", () => {
            this.#allapot = !this.#allapot; 
            this.setSzin();  
            this.kattintasTrigger();
        });
    }

    setAllapot(allapot) {
        this.#allapot = allapot;
        this.setSzin();
    }

    setSzin() {
        if (this.#allapot) {
            this.lampaElem.addClass("felkapcsolt");
            this.lampaElem.removeClass("lekapcsolt");
        } else {
            this.lampaElem.addClass("lekapcsolt");
            this.lampaElem.removeClass("felkapcsolt");
        }
    }

    kattintasTrigger() {
        let esemeny = new CustomEvent("lampaKapcsolas", { detail: this.#index });
        window.dispatchEvent(esemeny);
    }
}

export default Lampa;
