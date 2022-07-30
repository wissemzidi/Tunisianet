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
  // sideBar.style.right = '0vw'
  body.style.overflow = 'hidden'
  sideBar.style.overflowX = 'hidden'
  sideBar.style.overflow = 'auto'
  sideBar.style.animation = 'showing_side_bar .3s ease-out forwards'
}
function hideSideBar() {
  console.log("hiding side bar...")
  sideBar.style.animation = 'hiding_side_bar .3s ease-out forwards'
  body.style.overflow = 'auto'
}

      // More
const moreBtn = document.querySelector('#more1_btn')
const more1 = document.querySelector('#more1')
moreBtn.addEventListener('click', (event) => {
  if (moreBtn.getAttribute('data-more1') === 'close'){
    console.log('opening more1...')
    moreBtn.setAttribute('data-more1', 'open')
    more1.style.display = 'block'
    // more1.style.animation = 'add_height .3s ease-out forwards'
    moreBtn.style.transform = 'rotate(90deg)'
  } else {
    console.log('closing more1...')
    moreBtn.setAttribute('data-more1', 'close')
    // more1.style.animation = 'minus_height .3s ease-out forwards'
    more1.style.display = 'none'
    moreBtn.style.transform = 'rotate(0deg)'
  }
})





  // styling
document.getElementById("p2h").style.borderColor = 'red'
