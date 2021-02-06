'use strict'
console.log('Starting up');

function initPage() {
    renderProjs();
}

function renderProjs() {
    var projs = getProjs();
    var strHTMLs = projs.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item item-${proj.id}" >
                    <a onclick="renderModal('${proj.id}')" class="portfolio-link" data-toggle="modal" href="#projModal">
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

    // using jQuery
    var $elProj = $('.proj-grid');
    $elProj.html(strHTMLs);

    // using Javascript
    // var elProj = document.querySelector('.proj-grid');
    // elProj.innerHTML = strHTMLs.join('');
}


debugger
function renderModal(projId) {
    var proj = getProjById(projId)
    var strHTMLs = `
        <div class="col-lg-8 mx-auto">
            <div class="modal-body">
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/projs/${proj.url}" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                    <li>Date Published: ${proj.publishedAt}</li>
                    <li>Clients: Kids</li>
                    <li>Category: Games</li>
                </ul>
                <button onclick="onOpenProj('${proj.name}')" class="btn btn-primary open-proj" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Open Project</button>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
            </div>
        </div>`;

    $('.modal-row').html(strHTMLs);

    renderProjs();
}

function onContact() {
    var elName = document.querySelector('.form-group input[name=email]').value;
    var elSubject = document.querySelector('.form-group input[name=subject]').value;
    var elMessage = document.querySelector('.form-group textarea[name=message]').value;
    var link = `https://mail.google.com/mail/?view=cm&fs=1&to=${elName}&su=${elSubject}&body=${elMessage}`;
    window.open(link, '_blank');
}

function onOpenProj(projName) {
    // var link = `https://bari-avni.github.io/Sprint1/`;
    var link = `https://bari-avni.github.io/${projName}/`;
    window.open(link, '_blank');
}
