import { reactive } from "vue";

export const store = reactive({
  // gli viene assegnato un valore quando viene aperto il sito (tramite API)
  restaurants: [],
  
  // 
  checkbox: [],
  // variabile input v-model
  input: "",

Kitchens:[{
  name:'italiano',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjuCLjIw7roxv0VKvGEtptGPMIdN5kMCxyADEUB9AzTQ&s'
  },
  {
  name:'internazionale',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSrxTs5TXNBm4Mf6AUOu0ivwU3Wg9gBvr0Q&usqp=CAU'
  },
  {
  name:'cinese',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAC5k0i8cYpakS3Jjj7wpJULKiWgUAUBU6wg&usqp=CAU'
  },
  {
  name:'giapponese',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvi6NwYX21qOSxxLPWd-iVEgESLS6oNZTQgQ&usqp=CAU'
  },
  {
  name:'messicano',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6RRRT1C5_VKfrL4X9f5C4WZwJHT91FbIdg&usqp=CAU'
  },
        
],

SideCategory: ['italiano', 'internazionale', 'cinese', 'giapponese', 'messicano', 'indiano', 'coreano', 'francese', 'thailandese', 'australiano'],

inputKitchens : '',

cart: [],

// 
productQuantity: '',
});
