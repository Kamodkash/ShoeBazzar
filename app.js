const wrapper = document.querySelector(".sliderwrapper")
const menuitem = document.querySelectorAll(".menuitem")

const product = [
    {
        id: 1,
        title: "Nike",
        price: 2000,
        colors: [
            {
                code: "black",
                img: "./img/nike3.png",
            },
            {
                code: "red",
                img: "./img/nike2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Puma",
        price: 2520,
        colors: [
            {
                code: "black",
                img: "./img/puma1.png",
            },
            {
                code: "grey",
                img: "./img/puma2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Woodland",
        price: 1802,
        colors: [
            {
                code: "brown",
                img: "./img/woodland1.png",
            },
            {
                code: "olive",
                img: "./img/woodland2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Addidas",
        price: 1575,
        colors: [
            {
                code: "lightblue",
                img: "./img/addidas1.png",
            },
            {
                code: "purple",
                img: "./img/addidas2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Campus",
        price: 2052,
        colors: [
            {
                code: "yellow",
                img: "./img/campus1.png",
            },
            {
                code: "darkblue",
                img: "./img/campus2.png",
            },
        ],
    },
];

let choosenproduct = product[0]

const currentproductimg = document.querySelector(".productimg");
const currentproducttitle = document.querySelector(".producttitle");
const currentproductprice = document.querySelector(".productprice");
const currentproductcolors = document.querySelectorAll(".color");
const currentproductsizes = document.querySelectorAll(".size");


menuitem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform =`translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenproduct = product[index] 

        //changetext of current product
        currentproducttitle.textContent = choosenproduct.title;
        currentproductprice.textContent = "₹" + choosenproduct.price;
        currentproductimg.src = choosenproduct.colors[0].img;
        
        //assigning new colors
        currentproductcolors.forEach((color,index) => {
            color.style.backgroundColor = choosenproduct.colors[index].code;
        }); 
    });
});


currentproductcolors.forEach((color,index) => {
    color.addEventListener("click", () => {
      currentproductimg.src = choosenproduct.colors[index].img;
    });
  });

currentproductsizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentproductsizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

  //making payment dashboard visible 
  const productbutton = document.querySelector(".productbutton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");

productbutton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});