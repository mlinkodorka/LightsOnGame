export default class JatekterModell {
    #jatekterTomb = [];
    constructor(meret) {
        this.meret = meret;
        for (let index = 0; index < meret * meret; index++) {
            this.#jatekterTomb.push(false);
        }
    }

    getJatekterTomb() {
        return this.#jatekterTomb;
    }

    szomszedokSzinenekValtoztatasa(id) {
        this.#jatekterTomb[id] = !this.#jatekterTomb[id];
        console.log('valt', id)
        if (id % this.meret != 0) {
            this.#jatekterTomb[id - 1] = !this.#jatekterTomb[id - 1];
        }
        if (id % this.meret != this.meret - 1) {
            this.#jatekterTomb[id + 1] = !this.#jatekterTomb[id + 1];
        }
        if (id < this.meret * this.meret - this.meret) {
            this.#jatekterTomb[id + this.meret] = !this.#jatekterTomb[id + this.meret];
        }
        if (id >= this.meret) {
            this.#jatekterTomb[id - this.meret] = !this.#jatekterTomb[id - this.meret];
        }
    }
}
