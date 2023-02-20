import axios from 'axios';

export default class ogrenci{
    constructor(ad){
        this.ad = ad;
    }
    adinisoyle(){
        console.log(`benim adım ${this.ad}`);
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response.data);
        })
    }
}