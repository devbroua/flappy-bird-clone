const block = document.getElementById("block")
const hole = document.getElementById("hole")
const bird = document.getElementById("bird")
let jumping = 0
let counter = 0
let intervalTime = 10

hole.addEventListener("animationiteration", () => {
  let random = -(Math.random() * 300 + 150)
  hole.style.top = random + "px"
  counter++
})

setInterval(() => {
  let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"))

  if (jumping === 0) {
    bird.style.top = birdTop + 3 + "px"
  }

  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  )
  let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
  let bTop = -(500 - birdTop)

  if (
    birdTop > 480 ||
    (blockLeft < 20 &&
      blockLeft > -50 &&
      (bTop < holeTop || bTop > holeTop + 130))
  ) {
    alert("Game Over. Score: " + (counter - 1))
    bird.style.top = 100 + "px"
    counter = 0
  }
}, intervalTime)

const jump = () => {
  jumping = 1
  let jumpCount = 0
  const jumpInterval = setInterval(() => {
    let birdTop = parseInt(
      window.getComputedStyle(bird).getPropertyValue("top")
    )

    if (birdTop > 6 && jumpCount < 15) {
      bird.style.top = birdTop - 5 + "px"
    }

    if (jumpCount > 20) {
      clearInterval(jumpInterval)
      jumping = 0
      jumpCount = 0
    }

    jumpCount++
  }, intervalTime)
}
