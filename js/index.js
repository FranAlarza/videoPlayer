const video = document.querySelector('#video');
const play = document.querySelector('#play');
const forward = document.querySelector('#forward');
const backward = document.querySelector('#backward');
const pause = document.querySelector('#pause');

play.addEventListener('click', handlePlay)
pause.addEventListener('click', handlePause)
forward.addEventListener('click', handleForward)
backward.addEventListener('click', handleBackward)

function handlePlay() {
  video.play()
  play.hidden = true
  pause.hidden = false
  forward.hidden = false
  backward.hidden = false
  console.log('Picaste al Play')
}

function handlePause() {
  video.pause()
  pause.hidden = true
  play.hidden = false
  console.log('Picaste al Pause')
}

function handleForward() {
  video.currentTime = video.currentTime + 10
  console.log('10 +')
}

function handleBackward() {
  video.currentTime = video.currentTime - 10
  console.log('10 -')
}

const progress = document.querySelector('#progress');
video.addEventListener('loadedmetadata', handleLoaded)
video.addEventListener('timeupdate', handleTimeUpdate)
progress.addEventListener('input', handleProgress)

function handleLoaded(){
  progress.max = video.duration
  console.log('Ha cargado', video.duration)
}

function handleTimeUpdate() {
  progress.value = video.currentTime
  console.log(progress.value)
}

function handleProgress() {
  video.currentTime = progress.value
}