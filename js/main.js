'use strict'
console.log('Starting up');

function initPage() {
    renderProjs()
}

function renderProjs() {
    var projs = getProjs();
    /*
    var strHTMLs = projs.map(function (proj) {
        return `<tr>
                        <td>${books.indexOf(book) + 1}</td>
                        <td>${book.name}</td>
                        <td>${book.price}</td>
                        <td><button class="read" onclick="onReadBook('${book.id}')">Read</button></td>
                        <td><button class="update" onclick="onUpdateBook('${book.id}')">Update</button></td>
                        <td><button class="dalete" onclick="onRemoveBook('${book.id}')">Delete</button></td>
                    </tr>`;
    })
    var elBoard = document.querySelector('.table-data');
    elBoard.innerHTML = strHTMLs.join('');
    */

    var strHTMLs = projs.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item item-${gProjs.id}" >
                    <a class="portfolio-link" data-toggle="modal" href="#projModal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/projs/${proj.url}" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${proj.name}</h4>
                        <p class="text-muted-proj">${proj.desc}</p>
                    </div>
                </div>`;
    })
    var elProj = document.querySelector('.proj-grid');
    elProj.innerHTML = strHTMLs.join('');
}

function onModal() {
    var elModal = document.querySelector('.modal-body1');
    elModal.querySelector('h2').innerText = 'aa'; // proj.name;


}


// elModal.querySelector('.portfolio-caption h4').innerText = proj.name;
// elModal.querySelector('.img-fluid').src = `img/projs/${proj.url}`;
// elModal.querySelector('.text-muted-proj').innerText = proj.desc;
// console.log('proj', proj);
// console.log('elModal', elModal);




// var elModal = document.querySelector('.modal');
// elModal.querySelector('.portfolio-caption h4').innerText = gProjs.name;
// elModal.querySelector('.book-price').innerText = book.price;
// elModal.querySelector('.book-rate').innerText = book.rate;
// elModal.querySelector('p').innerText = bookReview;
// var elBookId = document.querySelector('.book-id');
// elBookId.innerText = book.id;
// elBookId.hidden = true;
// document.querySelector('.img-fluid').src = `img/${book.imgUrl}.jpg`;
// elModal.hidden = false;


