const btnTime = document.querySelector('#gettimenow')
const inputTime = document.querySelector('#entertimenow')
const showTimeElement = document.querySelector('#showTime')

let nowTime

const nowTimeArray = []
let counter = 0

// Date.prototype.addHours = function (h) {
//   //   this.setHours(this.getHours() + h)
//   //   this.setMinutes(this.getMinutes() + m)

//   this.setHours(this.getTime() + h)
// }

const showTime = (Hours, Minutes) => {
  const div = document.createElement('div')
  div.classList.add(
    'list-group-item',
    'text-center',
    'w-50',
    'fs-3',
    'list-group-item-light',
    'text-primary'
  )
  if (counter == 1) {
    div.classList.add('active', 'text-light')
  }

  div.innerHTML = `${Hours} : ${Minutes}`
  showTimeElement.appendChild(div)
}

btnTime.addEventListener('click', e => {
  console.log(inputTime)

  counter = 0
  let millisecond = 0
  showTimeElement.innerHTML = ''
  e.preventDefault()
  for (let i = 1; i < 11; i++) {
    counter++
    nowTime = new Date(Date.now() + millisecond)

    nowTimeArray.push(nowTime)
    millisecond += 5400000

    const hours = nowTime.getHours().toString().padStart(2, '0')
    const minutes = nowTime.getMinutes().toString().padStart(2, '0')

    showTime(hours, minutes)
  }
})

const millisecondToHours = myDuration => {
  let result =
    Math.floor(myDuration / (1000 * 60 * 60)) +
    ':' +
    (Math.floor(myDuration / (1000 * 60)) % 60)
  return result
}

inputTime.addEventListener('input', e => {
  counter = 0

  let [hourUser, minUser] = e.target.value.split(':')

  hourUser = hourUser * 3600000
  minUser = minUser * 60000

  let totalHour = hourUser + minUser
  console.log(totalHour)

  for (let i = 0; i < 10; i++) {
    counter++
    const [showH, showM] = millisecondToHours(totalHour).split(':')
    totalHour -= 5400000
    showTime(showH.padStart(2, '0'), showM.padStart(2, '0'))
  }
})
