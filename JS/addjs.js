window.onscroll = function() {
  if (window.pageYOffset > 80) {
    chng()
  }
  else {
    back()
  }
  if (window.pageYOffset > 10) {
      document.getElementById('arrow').style.visibility = "hidden";
    }
    else {
      document.getElementById('arrow').style.visibility = "visible";
  }
}

function chng() {
  document.getElementById("myDIV").className += (' toast-header-scrolled');
  document.getElementById("img").src = ("/new/Utilities/logo5.png");
  document.getElementById("name").style.visibility = "visible";
}

function back() {
  document.getElementById("myDIV").className = ('toast-header');
  document.getElementById("img").src = ("/new/Utilities/logo.png");
  document.getElementById("name").style.visibility = "hidden";
}

var o = localStorage['ck'] || 'no';
var cookie;

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 50, function(){
      });
    }
  });
});

// ------------------------------English Translation--------------------------------------

function readfileautomaticallyEN () {
  footFileEN();
  var client = new XMLHttpRequest();
  client.open('GET', '/new/lang/en.txt');
  client.onreadystatechange = function() {
    if( client.responseText != '' )
    {
      var txt = client.responseText.split("\n");
      document.getElementById("line1").innerHTML = txt[0];
      document.getElementById("line2").innerHTML = txt[1];
      document.getElementById("line3").innerHTML = txt[2];
      document.getElementById("line4").innerHTML = txt[3];
      document.getElementById("line5").innerHTML = txt[4];
    }
  }
  client.send();
  if (text != 1) {
    indexFileEN();
  }
  else {
    if (text == 1) {
      criatFileEN();
    }
    else {
      if (text == 2) {}
      else {
        indexFileEN();
      }
    }
  }
  document.getElementById('ldiv').setAttribute('onclick','readfileautomaticallyHI()');
  document.documentElement.lang = 'en';
  cookie = 'en';
  ln();
}

function indexFileEN() {
  var client = new XMLHttpRequest();
  client.open('GET', '/new/lang/en.txt');
  client.onreadystatechange = function() {
    if( client.responseText != '' )
    {
      var txt = client.responseText.split("\n");
      document.getElementById("line6").innerHTML = txt[5];
      document.getElementById("line7").innerHTML = txt[6];
      document.getElementById("line8").innerHTML = txt[7];
      document.getElementById("line9").innerHTML = txt[8];
      document.getElementById("line10").innerHTML = txt[9];
      document.getElementById("line11").innerHTML = txt[10];
      document.getElementById("line12").innerHTML = txt[11];
      document.getElementById("line13").innerHTML = txt[12];
      document.getElementById("line14").innerHTML = txt[13];
      document.getElementById("line15").innerHTML = txt[14];
      document.getElementById("line16").innerHTML = txt[15];
      document.getElementById("line17").innerHTML = txt[16];
      document.getElementById("line18").innerHTML = txt[17];
      document.getElementById("line19").innerHTML = txt[18];
      document.getElementById("line20").innerHTML = txt[19];
      document.getElementById("line21").innerHTML = txt[20];
      document.getElementById("line22").innerHTML = txt[21];
      document.getElementById("line23").innerHTML = txt[22];
    }
  }
  client.send();
}

function criatFileEN() {
  var client = new XMLHttpRequest();
  client.open('GET', '/new/lang/en.txt');
  client.onreadystatechange = function() {
    if( client.responseText != '' )
    {
      var txt = client.responseText.split("\n");
      document.getElementById("li1").innerHTML = txt[29];
      document.getElementById("li2").innerHTML = txt[30];
      document.getElementById("li3").innerHTML = txt[31];
      document.getElementById("li4").innerHTML = txt[32];
      document.getElementById("li5").innerHTML = txt[33];
      document.getElementById("li6").innerHTML = txt[34];
      document.getElementById("li7").innerHTML = txt[35];
      document.getElementById("li8").innerHTML = txt[36];
    }
  }
  client.send();
}

function footFileEN () {
  var client = new XMLHttpRequest();
  client.open('GET', '/new/lang/en.txt');
  client.onreadystatechange = function() {
    if( client.responseText != '' )
    {
      var txt = client.responseText.split("\n");
      document.getElementById("l24").innerHTML = txt[23];
      document.getElementById("l25").innerHTML = txt[24];
      document.getElementById("l26").innerHTML = txt[25];
      document.getElementById("l27").innerHTML = txt[26];
      document.getElementById("l28").innerHTML = txt[27];
      document.getElementById("l29").innerHTML = txt[28];
    }
  }
  client.send();
}

// ------------------------------End English Translation----------------------------

// -------------------------Hindi Translation--------------------------------------

function readfileautomaticallyHI () {
  footFileHI();
  var client = new XMLHttpRequest();
  client.open('GET', '/new/Lang/hi.txt');
  client.onreadystatechange = function() {
    if( client.responseText != '' )
    {
      var txt = client.responseText.split("\n");
      document.getElementById("line1").innerHTML = txt[0];
      document.getElementById("line2").innerHTML = txt[1];
      document.getElementById("line3").innerHTML = txt[2];
      document.getElementById("line4").innerHTML = txt[3];
      document.getElementById("line5").innerHTML = txt[4];
    }
  }
  client.send();
  if (text != 1) {
    indexFileHI();
  }
  else {
    if (text == 1) {
      criatFileHI();
    }
    else {
      if (text == 2) {}
      else {
        indexFileHI();
      }
    }
  }
  document.getElementById('ldiv').setAttribute('onclick','readfileautomaticallyEN()');
  document.documentElement.lang = 'hi';
  cookie = 'hi';
  ln();
}

function indexFileHI() {
  var client = new XMLHttpRequest();
  client.open('GET', '/new/lang/hi.txt');
  client.onreadystatechange = function() {
    if( client.responseText != '' )
    {
      var txt = client.responseText.split("\n");
      document.getElementById("line6").innerHTML = txt[5];
      document.getElementById("line7").innerHTML = txt[6];
      document.getElementById("line8").innerHTML = txt[7];
      document.getElementById("line9").innerHTML = txt[8];
      document.getElementById("line10").innerHTML = txt[9];
      document.getElementById("line11").innerHTML = txt[10];
      document.getElementById("line12").innerHTML = txt[11];
      document.getElementById("line13").innerHTML = txt[12];
      document.getElementById("line14").innerHTML = txt[13];
      document.getElementById("line15").innerHTML = txt[14];
      document.getElementById("line16").innerHTML = txt[15];
      document.getElementById("line17").innerHTML = txt[16];
      document.getElementById("line18").innerHTML = txt[17];
      document.getElementById("line19").innerHTML = txt[18];
      document.getElementById("line20").innerHTML = txt[19];
      document.getElementById("line21").innerHTML = txt[20];
      document.getElementById("line22").innerHTML = txt[21];
      document.getElementById("line23").innerHTML = txt[22];
    }
  }
  client.send();
}

function criatFileHI() {
  var client = new XMLHttpRequest();
  client.open('GET', '/new/lang/hi.txt');
  client.onreadystatechange = function() {
    if( client.responseText != '' )
    {
      var txt = client.responseText.split("\n");
      document.getElementById("li1").innerHTML = txt[29];
      document.getElementById("li2").innerHTML = txt[30];
      document.getElementById("li3").innerHTML = txt[31];
      document.getElementById("li4").innerHTML = txt[32];
      document.getElementById("li5").innerHTML = txt[33];
      document.getElementById("li6").innerHTML = txt[34];
      document.getElementById('li7').innerHTML = txt[36];
      document.getElementById('li8').innerHTML = txt[37];
    }
  }
  client.send();
}

function footFileHI () {
  var client = new XMLHttpRequest();
  client.open('GET', '/new/lang/hi.txt');
  client.onreadystatechange = function() {
    if( client.responseText != '' )
    {
      var txt = client.responseText.split("\n");
      document.getElementById("l24").innerHTML = txt[23];
      document.getElementById("l25").innerHTML = txt[24];
      document.getElementById("l26").innerHTML = txt[25];
      document.getElementById("l27").innerHTML = txt[26];
      document.getElementById("l28").innerHTML = txt[27];
      document.getElementById("l29").innerHTML = txt[28];
    }
  }
  client.send();
}

// ----------------------------End Hindi translation-----------------------------------

function ln() {
  var chec = localStorage['ck'] || 'no';
  if (chec=='yes') {

    if (cookie=='hi') {
      localStorage['lng'] = 'hi';
    } else {
      if (cookie=='en') {
        localStorage['lng'] = 'en';
      }
    }
  }
}

function chnglang() {
  // var translate = localStorage['lng'] || 'en';
  // if (translate=='en') {
  //   readfileautomaticallyEN();
  // }
  // else {
  //   readfileautomaticallyHI();
  // }
  var check = localStorage['ck'] || 'no';
  if (check=='yes') {
    var translate = localStorage['lng'] || 'en';
    if (translate=='en') {
      readfileautomaticallyEN();
      // document.getElementById('coo').style.display = "none";
    }
    else {
      readfileautomaticallyHI();
      // document.getElementById('coo').style.display = "none";
    }
  }
  else {
    readfileautomaticallyEN();
  }
}

var k = sessionStorage.getItem("banner");

function clse() {
  sessionStorage.setItem('banner', 'yup');
  document.getElementById('coo').style.display = "none";
}

function cose() {
  document.getElementById('coo').style.display = "none";
}

function acc() {
  localStorage['ck'] = 'yes';
  document.getElementById('coo').style.display = "none";
}

// function show(imgs){
//   var pic = document.getElementById('h');
//   var caption = document.getElementById('c')
//   pic.src = imgs.src;
//   caption.innerHTML = imgs.alt;
//   pic.parentElement.style.display = 'block';
// }
var elem = document.createElement("img");

function show(imgs) {
  var pic = document.getElementById('h');
  var caption = document.getElementById('c');
  caption.innerHTML = imgs.alt;
  elem.setAttribute("src", imgs.src);
  elem.classList.add('contain');
  document.getElementById("h").appendChild(elem);
  pic.parentElement.style.display = "block";
}

function hide() {
  var cross = document.getElementById('hide');
  cross.style.display = 'none';
  document.getElementById('h').removeChild(elem);
}