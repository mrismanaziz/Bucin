document.title = 'Mau gk jadi mantanku?'

let waktuPutus = 5

document.querySelector('.say-yes').addEventListener('click', ev => {
  document.querySelector('#slide-1').style.display = 'none'
  document.querySelector('#slide-2').style.display = 'block'
  document.querySelector('#putusKita').innerHTML = waktuPutus
  putusTimeOut()
})

function putusTimeOut() {
  waktuPutus--
  document.querySelector('#putusKita').innerHTML = waktuPutus
  if ( waktuPutus > 0 ) {
    setTimeout(() => {
      putusTimeOut()
    }, 1000)
  } else {
    document.title = 'Keluar sana!'
    document.querySelector('#keluarSana').style.display = 'block'
    setTimeout(() => {
      document.querySelector('#slide-2').style.display = 'none'
      document.querySelector('#slide-3').style.display = 'block'
      let ohMantanku = Math.floor(Math.random()*999)
      console.log(ohMantanku)
      document.querySelector('#jumlahMantan').innerHTML = ohMantanku
      setTimeout(() => {
        document.title = 'Bye bye...'
        document.querySelector('#jumlahMantan').innerHTML = ohMantanku+1
        setTimeout(() => {
          document.querySelector('#byebye').style.display = 'block'
        }, 2000)
      }, 1000)
    }, 5000)
  }
}

document.querySelectorAll('.say-no').forEach((el, i) => {
  el.id = 'no-' + i
  el.addEventListener('mouseover', ev => {
    const showId = ev.target.id == 'no-0' ? 'no-1' :
                    ev.target.id == 'no-1' ? 'no-2' : 'no-0'
    removeStyleBtnNo()
    document.querySelector('#'+showId).style.display = 'block'
  })

  if (i != 0) {
    el.style.display = 'none'
  }
})

function removeStyleBtnNo () {
  document.querySelectorAll('.say-no').forEach(el => {
    el.style.display = 'none'
  })
}

window.onload = function () {
  document.body.style.display = 'grid'
}