//web scrapping - fetch the data from any site 
//scrap - fragment or small part of any

let cheerio = require("cheerio");  
let request = require("request");
let url = "https://romindhandhukiya.github.io/";

request(url, (error, response, html) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(response.statusCode);
        scrapData(html);
    }
})

function scrapData(html){
    let selTool  = cheerio.load(html);
    let h1 = selTool("h1");
    console.log(h1.length);
    for(let i=0; i<h1.length; i++){
        let data = selTool(h1[i]).text();
        console.log(data);
    }
}
