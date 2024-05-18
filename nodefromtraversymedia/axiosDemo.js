import axios from 'axios';

async function getData(){
    try{
        const url = "https://my-json-server.typicode.com/typicode/demo/posts";
        const response = await axios.get(url);
        console.log(response.data);
    }catch(error){
        console.log("error is "+ error);
    }
}
getData();