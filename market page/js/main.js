function afficheBox1() {
  document.getElementById('list1').style.display = "block"
  document.getElementById('list1').style.height = "fit-content"
  document.getElementById('list1').style.animation = "fade_in 0.3s ease-out forwards"
  console.log("showing Box1...")
}

function hideBox1() {
  document.getElementById('list1').style.display = "none"
  console.log("hiding Box1...")
}

function afficheBox2() {
  document.getElementById('list2').style.display = "block"
  document.getElementById('list2').style.height = "fit-content"
  document.getElementById('list2').style.animation = "fade_in 0.3s ease-out forwards"
  console.log("showing Box1...")
}

function hideBox2() {
  document.getElementById('list2').style.display = "none"
  console.log("hiding Box2...")
}

function afficheBox3() {
  document.getElementById('list3').style.display = "block"
  document.getElementById('list3').style.height = "fit-content"
  document.getElementById('list3').style.animation = "fade_in 0.3s ease-out forwards"
  console.log("showing Box1...")
}

function hideBox3() {
  document.getElementById('list3').style.display = "none"
  console.log("hiding Box3...")
}

function afficheBox4() {
  document.getElementById('list4').style.display = "block"
  document.getElementById('list4').style.height = "fit-content"
  document.getElementById('list4').style.animation = "fade_in 0.3s ease-out forwards"
  console.log("showing Box1...")
}

function hideBox4() {
  document.getElementById('list4').style.display = "none"
  console.log("hiding Box3...")
}

function afficheBox5() {
  document.getElementById('list5').style.display = "block"
  document.getElementById('list5').style.height = "fit-content"
  document.getElementById('list5').style.animation = "fade_in 0.3s ease-out forwards"
  console.log("showing Box1...")
}

function hideBox5() {
  document.getElementById('list5').style.display = "none"
  console.log("hiding Box3...")
}



  // Side bar
const body = document.querySelector("body")
const sideBar = document.querySelector("#side_bar")


function showSideBar() {
  console.log("showing side bar...")
  sideBar.style.display = 'block'
  body.style.overflow = 'hidden'
  sideBar.style.overflow = 'auto'
  sideBar.style.animation = 'showing_side_bar .3s ease-out forwards'
}
function hideSideBar() {
  console.log("hiding side bar...")
  sideBar.style.animation = 'hiding_side_bar .3s ease-out forwards'
  body.style.overflowY = 'auto'
}

      // More
const moreBtn = document.querySelector('#more1_btn')
const more1 = document.querySelector('#more1')
moreBtn.addEventListener('click', (event) => {
  if (moreBtn.getAttribute('data-more1') === 'close'){
    closeAllMore()
    console.log('opening more1...')
    moreBtn.setAttribute('data-more1', 'open')
    more1.style.display = 'block'
    moreBtn.style.transform = 'rotate(90deg)'
  } else {
    console.log('closing more1...')
    moreBtn.setAttribute('data-more1', 'close')
    more1.style.display = 'none'
    moreBtn.style.transform = 'rotate(0deg)'
  }
})

const moreBtn2 = document.querySelector('#more2_btn')
const more2 = document.querySelector('#more2')
moreBtn2.addEventListener('click', (event) => {
  if (moreBtn2.getAttribute('data-more2') === 'close'){
    closeAllMore()
    console.log('opening more2...')
    moreBtn2.setAttribute('data-more2', 'open')
    more2.style.display = 'block'
    moreBtn2.style.transform = 'rotate(90deg)'
  } else {
    console.log('closing more2...')
    moreBtn2.setAttribute('data-more2', 'close')
    more2.style.display = 'none'
    moreBtn2.style.transform = 'rotate(0deg)'
  }
})

const moreBtn3 = document.querySelector('#more3_btn')
const more3 = document.querySelector('#more3')
moreBtn3.addEventListener('click', (event) => {
  if (moreBtn3.getAttribute('data-more3') === 'close'){
    closeAllMore()
    console.log('opening more3...')
    moreBtn3.setAttribute('data-more3', 'open')
    more3.style.display = 'block'
    moreBtn3.style.transform = 'rotate(90deg)'
  } else {
    console.log('closing more3...')
    moreBtn3.setAttribute('data-more3', 'close')
    more3.style.display = 'none'
    moreBtn3.style.transform = 'rotate(0deg)'
  }
})

const moreBtn4 = document.querySelector('#more4_btn')
const more4 = document.querySelector('#more4')
moreBtn4.addEventListener('click', (event) => {
  if (moreBtn4.getAttribute('data-more4') === 'close'){
    closeAllMore()
    console.log('opening more4...')
    moreBtn4.setAttribute('data-more4', 'open')
    more4.style.display = 'block'
    moreBtn4.style.transform = 'rotate(90deg)'
  } else {
    console.log('closing more4...')
    moreBtn4.setAttribute('data-more4', 'close')
    more4.style.display = 'none'
    moreBtn4.style.transform = 'rotate(0deg)'
  }
})

const moreBtn5 = document.querySelector('#more5_btn')
const more5 = document.querySelector('#more5')
moreBtn5.addEventListener('click', (event) => {
  if (moreBtn5.getAttribute('data-more5') === 'close'){
    closeAllMore()
    console.log('opening more5...')
    moreBtn5.setAttribute('data-more5', 'open')
    more5.style.display = 'block'
    moreBtn5.style.transform = 'rotate(90deg)'
  } else {
    console.log('closing more5...')
    moreBtn5.setAttribute('data-more5', 'close')
    // more5.style.animation = 'minus_height .3s ease-out forwards'
    more5.style.display = 'none'
    moreBtn5.style.transform = 'rotate(0deg)'
  }
})

const moreBtn6 = document.querySelector('#more6_btn')
const more6 = document.querySelector('#more6')
moreBtn6.addEventListener('click', (event) => {
  if (moreBtn6.getAttribute('data-more6') === 'close'){
    closeAllMore()
    console.log('opening more6...')
    moreBtn6.setAttribute('data-more6', 'open')
    more6.style.display = 'block'
    moreBtn6.style.transform = 'rotate(90deg)'
  } else {
    console.log('closing more6...')
    moreBtn6.setAttribute('data-more6', 'close')
    more6.style.display = 'none'
    moreBtn6.style.transform = 'rotate(0deg)'
  }
})

function closeAllMore() {
  moreBtn.setAttribute('data-more1', 'close')
  more1.style.display = 'none'
  moreBtn.style.transform = 'rotate(0deg)'
  moreBtn2.setAttribute('data-more2', 'close')
  more2.style.display = 'none'
  moreBtn2.style.transform = 'rotate(0deg)'
  moreBtn3.setAttribute('data-more3', 'close')
  more3.style.display = 'none'
  moreBtn3.style.transform = 'rotate(0deg)'
  moreBtn4.setAttribute('data-more4', 'close')
  more4.style.display = 'none'
  moreBtn4.style.transform = 'rotate(0deg)'
  moreBtn5.setAttribute('data-more5', 'close')
  more5.style.display = 'none'
  moreBtn5.style.transform = 'rotate(0deg)'
  moreBtn6.setAttribute('data-more6', 'close')
  more6.style.display = 'none'
  moreBtn6.style.transform = 'rotate(0deg)'
}




  // styling
document.getElementById("p2h").style.borderColor = 'red'
