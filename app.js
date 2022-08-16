let newsSection=document.querySelector(".news-section")
function getNews() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2ad3a07c92msh5cf39f06f19c686p1e0f34jsncec7afa34e32',
            'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
        }
    };
    fetch("https://newscatcher.p.rapidapi.com/v1/latest_headlines?lang=en&media=True", options)
    .then(response => response.json()).then(response=>{
        let htmlstring=""
        response.articles.map(item=>{
               htmlstring+=`<div class="single-card">
               <div class="card-image">
                   <img src="${item.media}"
                       alt="">
               </div>
               <div class="info">
                   <h3>${item.title}</h3>
                   <p class="info-des">${item.summary.substr(0,120)+"..."}</p>
                   <button class="btn2">Read</button>
               </div>
           </div>
           `
        })
        newsSection.innerHTML=htmlstring
    }).catch(error=>console.log(error))
}
getNews()