export default function mouseMovement() {
  // I want to make a box shadow that reacts to the user's mouse movements. The mouse will become the "light source", and the shadow will move accordingly.

  const square = document.querySelector('div.square')

  // 1. Get the width and height of the window, and set the number of pixels you want the box shadow spread to be (let's start with 10)
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const shadowSpread = 10

  // 3. Divide the width and height by 2 to get the "halfway" point for both X and Y
  const xHalfway = windowWidth / 2
  const yHalfway = windowHeight / 2

  // Calculate the pixel amount the shadow needs to move for each mouse movement by dividing the shadowSpread / xHalfway (or yHalfway)
  const xShadowAmount = shadowSpread / xHalfway
  const YShadowAmount = shadowSpread / yHalfway

  let currentXCoord = 0
  let currentYCoord = 0

  // Function to calculate the X and Y movements of the cursor based on the direction of the mouse and the number of pixels. Translate that into the box-shadow CSS property.
  function mouseMoveValue(newXCoord, newYCoord) {
    const shadowMoveXAmount = xShadowAmount * newXCoord
    let currentXSpread
    const shadowMoveYAmount = YShadowAmount * newYCoord
    let currentYSpread

    // Calculate the X movements based on the direction you're moving and the number of p
    if (newXCoord > currentXCoord) {
      if (newXCoord <= xHalfway) {
        currentXSpread = 10 - shadowMoveXAmount
      } else {
        currentXSpread = (shadowMoveXAmount - 10) / -1
      }
    } else if (newXCoord < currentXCoord) {
      if (newXCoord > xHalfway) {
        currentXSpread = (shadowMoveXAmount - 10) / -1
      } else {
        currentXSpread = 10 - shadowMoveXAmount
      }
    }

    if (newYCoord > currentYCoord) {
      if (newYCoord <= yHalfway) {
        currentYSpread = 10 - shadowMoveYAmount
      } else {
        currentYSpread = (shadowMoveYAmount - 10) / -1
      }
    } else if (newYCoord < currentYCoord) {
      if (newYCoord > yHalfway) {
        currentYSpread = (shadowMoveYAmount - 10) / -1
      } else {
        currentYSpread = 10 - shadowMoveYAmount
      }
    }

    square.style.boxShadow = `${currentXSpread}px ${currentYSpread}px 3px 5px rgba(0, 0, 0, 0.5)`
    currentXCoord = newXCoord
    currentYCoord = newYCoord
  }

  // Create an event listener to trigger on mousemove and run the mouseMoveValue function
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    mouseMoveValue(mouseX, mouseY)
  })
}
