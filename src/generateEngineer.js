function generateCards (data) {
    return `<div class="card ml-5 mb-5" style="width: 18rem;">
    <h1 class="card-img-top bg-primary text-light">${data.name} <br> Engineer </h1> 
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: <a href ="mailto:${data.email}">${data.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}">${data.github}</a> </li>
      </ul>
    </div>`
    }
    
    module.exports = generateCards;