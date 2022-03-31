const aipUrl = 'https://api.giphy.com/v1/gifs/search';
const defaultKey = '8PlvtkQ4BTiwM2lM3MIyBWCVbMeZkTfd'
search = ()=>{
    const keyword = document.getElementById('keyword').value;
    const quantity = document.getElementById('quantity').value;
    const apikey = document.getElementById('apikey').value?document.getElementById('apikey').value:defaultKey;

    fetch(`${aipUrl}?api_key=${apikey}&q=${keyword}&limit=${quantity}`)
    .then((res)=>{ return res.json()})
    .then(data=>{
        for(const image of data.data){
            const url = image.images.original.url;
            const div = document.createElement("div");            
            div.innerHTML = `<img src="${url}" alt="image">`
            document.getElementById('content').append(div)
        }
    })
}
remove = ()=>{
    document.getElementById('content').innerHTML = ''    
}
