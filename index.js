async function getPhotos(){
    let photosData = await fetch('https://jsonplaceholder.typicode.com/photos')
    let content = await photosData.json()
    let numberOfPhotos = 12
    content = content.splice(0, numberOfPhotos)
    
    let list = document.querySelector('.row')

    let item
    for(item in content){

        list.innerHTML += `
            <div class="col-sm-3 mt-3">
                <div class="card">
                    <img class="card-img-top" src="${content[item].url}">
                    <div class="card-body">
                        <h5 class="card-title">${content[item].title}</h5>
                    </div>
                </div>
            </div>
        `
    }
    
}
getPhotos()