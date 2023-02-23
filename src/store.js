import { reactive } from "vue";

export const store = reactive({
  // gli viene assegnato un valore quando viene aperto il sito (tramite API)
  restaurants: [],
  // gli viene assegnato un valore quando viene aperta la pagina del singolo ristorante  (tramite API)
  singleRestaurant: [],
  // variabile input v-model
  input: "",

  Kitchens: ['italiano', 'internazionale', 'cinese', 'giapponese', 'messicano', 'indiano', 'coreano', 'francese', 'thailandese', 'australiano'],
});
