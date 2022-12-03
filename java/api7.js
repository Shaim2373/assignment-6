const news = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/category/07'
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data)
}

const displayNews = news => {
    const createCard = document.getElementById('news-container')
    news.forEach(news => {
        const newsDiv = document.createElement('div')
        newsDiv.classList.add('card')
        newsDiv.innerHTML = `
                <div class="p-4 row g-5">
                    <div class="col-md-5">
                        <img src="${news.image_url}" class="img-fluid alt="...">
                    </div>
                    <div class="col-md-7">
                        <div id="news" class="card-body">
                            <h2 class="card-title">${news.title}</h2>
                            <p class="card-text">${news.details.slice(0, 300)}...</p>
                            <img src="${news.author.img}">
                            <h5>${news.author.name}</h5>
                            <p class="card-viwe d-flex justify-content-center align-item-center"><i class="fa-solid fa-eye"></i>${news.total_view}</p>
                            <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Show all details
                            </button>
                            
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">${news.title}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    ${news.details}
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
        createCard.appendChild(newsDiv);


    });

}


news();

