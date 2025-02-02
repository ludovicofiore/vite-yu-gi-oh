
import { reactive } from "vue";

export const store = reactive({
    cardsArray: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",

    // proprietà per select
    selectCards: "",

    // parametro per criterio ricerca
    apiParam: "archetype",

    // api e array per opzioni select
    optionsApi: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    optionsArray: [],
});

