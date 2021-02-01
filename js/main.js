'use strict'
console.log('Starting up');

function initPage() {
    renderProjs();
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
        return `<div class="col-md-4 col-sm-6 portfolio-item item-${proj.id}" >
                    <a onclick="onModal('${proj.id}')" class="portfolio-link" data-toggle="modal" href="#projModal">
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

    var $elProj = $('.proj-grid');
    $elProj.html(strHTMLs);

    // var elProj = document.querySelector('.proj-grid');
    // elProj.innerHTML = strHTMLs.join('');
}



function onModal(projId) {
    var proj = getProjById(projId)

    $('.modal-body1 h2').text(proj.name);
    $('.item-intro').text(proj.desc);
    $('.img-fluid').attr('src', `img/projs/${proj.url}`);
    $('.open-proj').click(function () {
        onOpenProj(proj);
      });
    renderProjs();
}

function onContact() {
    var elName = document.querySelector('.form-group input[name=email]').value;
    var elSubject = document.querySelector('.form-group input[name=subject]').value;
    var elMessage = document.querySelector('.form-group textarea[name=message]').value;
    console.log('elName', elName);
    console.log('elSubject', elSubject);
    console.log('elMessage', elMessage);
    var link = `https://mail.google.com/mail/?view=cm&fs=1&to=${elName}&su=${elSubject}&body=${elMessage}`;
    console.log('link', link);
    window.open(link, '_blank');
}

function onOpenProj(proj){
    console.log('onOpenProj');
    console.log('proj', proj);
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


