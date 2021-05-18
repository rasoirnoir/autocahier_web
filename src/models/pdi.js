export default class Pdi {
    constructor(
        id = -1,
        noms,
        adresse,
        depot,
        tournee,
        ordre,
        date_crea,
        date_maj,
    ) {
        this.id = id;
        this.noms = noms;
        this.adresse = adresse;
        this.depot = depot;
        this.tournee = tournee;
        this.ordre = ordre;
        this.date_crea = date_crea;
        this.date_maj = date_maj;
    }
}
