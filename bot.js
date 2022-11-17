const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
  return [
    "halo selamat datang di rosid bot ya bre. siapa nama kamu?",
    `Halo ${data?.nama}, berapa usia kamu bre?`,
    `Ohhh ${data?.usia}, hobi kamu apa bre?`,
    `wah,sama dong aku juga hobi ${data?.hobi}, btw kamu lagi repot nggak?`,
    `ohhh ${data?.repot}, ya udah kalau gitu. makasih yaa`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
  if (jawaban.value.length < 1) return alert("silahkan isi jawaban dulu")
  init++
  if (init === 1) {
    botDelay({ nama: jawaban.value })
  } else if (init === 2) {
    botDelay({ usia: jawaban.value })
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value })
  } else if (init === 4) {
    botDelay({ repot: jawaban.value })
  } else if (init === 5) {
    finishing()
  } else {
    botEnd()
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block"
  container[0].style.filter = "blur(8px)"
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
  }, [1000])
  usersData.push(jawaban.value)
  jawaban.value = ""
}

function finishing() {
  pertanyaan.innerHTML = `makasi yaa ${usersData[0]} udah main ke rosid bot 😉, kali-kali kita main ${usersData[2]} barengan ya breee!`
  jawaban.value = "siap makasi juga rosid!"
}

function botEnd() {
  alert(
    `Terimakasih ${usersData[0]} sudah berkunjung, sampai jumpa dilain waktu hehehehe.`
  )
  window.location.reload()
}