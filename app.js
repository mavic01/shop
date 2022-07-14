const sliderWrapper = document.querySelector('.sliderWrapper')
const menuItem = document.querySelectorAll('.menuItem')

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      desc: "Fresh and cool",
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      desc: "Comfy footware",
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      desc: "Amazing",
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      desc: "Fun",
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      desc: "Lovely",
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
];
let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductDesc = document.querySelector(".productDesc")
const currentProductColor = document.querySelectorAll(".color")
const currentProductSize = document.querySelectorAll(".size")


menuItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        // change the current slide
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)` //cos the vw is 500.. to go to the next, we have to do -100 * 1 = 0, -100 * 1 = -400vw etc.

        //change the chosen product
        chosenProduct = products[index]

        //change texts of chosen product
        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = `$${chosenProduct.price}`
        currentProductDesc.textContent = chosenProduct.desc
        currentProductImg.src = chosenProduct.colors[0].img
        
        //assign new colors
        currentProductColor.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code
            // color.addEventListener('click', () => {
            //     currentProductImg.src = chosenProduct.colors[index].img
            // })
        })
    })
})

currentProductColor.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = chosenProduct.colors[index].img
    })
})

currentProductSize.forEach((size, index) => {
    size.addEventListener('click', () => {
        currentProductSize.forEach((size) => { //resets colors
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black" //change the current ones cicked
        size.style.color = "white"
    })
})

const productButton = document.querySelector('.productButton')
const xBtn = document.querySelector('.x')
const payment = document.querySelector('.payment')

productButton.addEventListener('click', () => {
  payment.style.visibility = "visible"
})
xBtn.addEventListener('click', () => {
  payment.style.visibility = "hidden"
})

// sliderWrapper.style.transform = 'translateX(-200vw)' 

// sliderWrapper.style.backgroundColor = "aqua"
// sliderWrapper.style.transform = 'translateX(-300vw)' //this changes the INITIAL POINT of this div on the x axis from 0 to 100px.. 100vw is gonna make it start at the second item. POSITIVE NUMBER MOVES THE DIV STARTING POINT TO THE RIGHT AND NEVATIVE NUMBER MOVES IT TO THE LEFT. -100VW MOVES THE ENTIRE FIRST DIV AWAY FROM THE SCREEN AND SHOWS THE SECOND ITEM FIRST