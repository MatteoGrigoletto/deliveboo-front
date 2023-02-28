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
  {
  name:'indiano',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxnknt5zorMtwrsQ-u2bQan-uE_dZDKAmTg&usqp=CAU'
  },
  {
  name:'coreano',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0E3OSY-gBiQKRL6J34NzkVd2xS32Uo8wEw&usqp=CAU'
  },
  {
  name:'francese',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtbUnZAkzojti9CTZ-BuGxpolt9Q8W0qkrA&usqp=CAU'
  },
  {
  name:'thailandese',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqvYZRX0-wvMF4aXWpsb2OyFD0TbF7rVyWg&usqp=CAU'
  },
  {
  name:'australiano',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6RRRT1C5_VKfrL4X9f5C4WZwJHT91FbIdg&usqp=CAU'
  },
        
],

SideCategory: ['italiano', 'internazionale', 'cinese', 'giapponese', 'messicano', 'indiano', 'coreano', 'francese', 'thailandese', 'australiano'],

inputKitchens : '',

cart: [],

// 
productQuantity: '',


// modal show
showModal: false,

});
