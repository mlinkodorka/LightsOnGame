import Jatekter from "../View/Jatekter.js";
import JatekterModell from "../Modell/LightOnModell.js";

class JatekController {
    constructor() {
        const meret = 5;
        const jatekterView = new Jatekter(meret);
        const jatekterModell = new JatekterModell(meret);

        $(window).on("lampaKapcsolas", (event) => {
            console.log('lampakapcsolas')
            jatekterModell.szomszedokSzinenekValtoztatasa(event.detail);
            const tomb = jatekterModell.getJatekterTomb();
            jatekterView.setLampaAllapota(tomb);
        });
    }
}

export default JatekController;
