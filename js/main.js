'use strict'
console.log('Starting up');

function initPage() {
    renderProjs();
}

function renderProjs() {
    var projs = getProjs();
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
    
    // using jQuery
    var $elProj = $('.proj-grid');
    $elProj.html(strHTMLs);
    // using Javascript
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
    var link = `https://mail.google.com/mail/?view=cm&fs=1&to=${elName}&su=${elSubject}&body=${elMessage}`;
    window.open(link, '_blank');
}

function onOpenProj(proj) {
    // var link = `https://bari-avni.github.io/Sprint1/`;
    var link = `https://bari-avni.github.io/${proj.name}/`;
    window.open(link, '_blank');
}
