const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

const clock = () => {
  const today = new Date()

  const hr = today.getHours()
  const min = today.getMinutes()
  const sec = today.getSeconds()

  const calcHour = (hr * 30) + (min / 2)
  const calcMins = (min * 6) + (sec /10)
  const calcSec = sec * 6

  hour.style.transform = ('rotate('+ calcHour + 'deg)')
  minute.style.transform = ('rotate('+ calcMins + 'deg)')
  second.style.transform = ('rotate('+ calcSec + 'deg)')
}

const setClock = setInterval(clock, 1000)