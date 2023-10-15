import { defineStore } from 'pinia'
import axios from 'axios';

export const useDataStore = defineStore('dataStore', {
    state: () => ({
        essences: [
            {
                id:1,
                name: 'deal'
            },
            {
                id:2,
                name:'contact'
            },
            {
                id:3,
                name:'company'
            }
        ],
        show: false
    }),
    actions:{
       async PostDataDeal(){       
const apiUrl = 'https://yourdomain.amocrm.ru/api/v4/leads/complex';
const leadData = {
  name: 'Новая сделка',
  custom_fields_values: [
    {
      "name": "Сделка для примера 1",
      "created_by": 0,
      "price": 20000,
      "custom_fields_values": [
          {
              "field_id": 294471,
              "values": [
                  {
                      "value": "Наш первый клиент"
                  }
              ]
          }
      ]
  },
  ],
};
axios.post(apiUrl, leadData, {
    mode: 'no-cors',
    headers: {
    "X-Client-Id": '31334466',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
})
  .then(response => {
    console.log('Сделка создана:', response.data);
  })
  .catch(error => {
    console.error('Ошибка при создании сделки:', error);
  });


},
showTake(){
  this.show = !this.show
}
}
})