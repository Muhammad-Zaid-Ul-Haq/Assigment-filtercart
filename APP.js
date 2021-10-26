import logo from './logo.svg';
import './App.css';
import {Name, Img, Price, Discriptions} from './cart.js';
import {usestate} from 'react';





function App() {
  let obj = [
   
    { 
    img:"https://www.catfootwear.com/on/demandware.static/-/Sites-catfootwear_us-Library/default/dw38dae461/content/seasonal-content/homepage/2021/06/women-excavator-2.jpg",
    Name:"Shoes",
    Price: 3000,
    Discriptions:"white Shoes",  
  },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd62hA81Cy-YGWHAGnuAZaDtbTlwEPqV-FYQ&usqp=CAU",
    Name: "Shoes",
    Price: 1500,
    Discriptions:"Shoes",
    
  },	
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9lNsWPuO_aBJ5V6Ne6qJPWSrFLFpCp_6uQ&usqp=CAU",
    Name:"Shoes",
    Price: 5300,
    Discriptions:"Shoes",
    },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jKwd6ZlvkQyr9UaH5li_FFbBwgE8TeUC0g&usqp=CAU",
    Name:"Shoes",
    Price: 5300,
    Discriptions:"Shoes",
    },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcbEgyIIqH3FHJj2CrBMpnXhCSov5K4C8Ww&usqp=CAU",
    Name:"Shoes",
    Price: 3500,
    Discriptions:"Shoes",
    },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvIimNG1E-IzqD08Ff9YCjMQoQ0iFxfWWzA&usqp=CAU",
    Name:"Shoes",
    Price: 3500,
    Discriptions:"Shoes",
    },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaW0OZ4QMbWpxg23iHG3YKnYFoTRBRg5hYQ&usqp=CAU",
    Name:"Shoes",
    Price: 3400,
    Discriptions:"Shoes",
    },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOY4X6NbNiBHv5UL4QrnkniYytdBaHBTzwg&usqp=CAU",
    Name:"Shoes",
    Price: 3000,
    Discriptions:"Shoes",
    }
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_AgKxa5HaNIo6q8N1xuQFQaRE0Q8QyEzhA&usqp=CAU",
    Name:"Shoes",
    Price: 3000,
    Discriptions:"Shoes",
    },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToTpUEc3kZJuwGoVkZItVyNNp7xc2fADJ4w&usqp=CAU",
    Name:"Shoes",
    Price: 5000,
    Discriptions:"Shoes",
    }



  ];

let obj2 = [
   
    { 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JMBxvP7ARV9Xwr4clO-l-cbamLEmq-j04A&usqp=CAU", 
    Name:"Shirts",
    Price: 660,
    Discriptions:"cotton shirts",
    
  },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxhbzesoTjyUrmJryBevSjDKhKJFWpBCRBw&usqp=CAU",
    Name: "shirts",
    Price: 500,
    Discriptions:"cotton shirts",
    
  },
    {
    img:"https://stylesatlife.com/wp-content/uploads/2017/04/Men%E2%80%99s-Cotton-Lined-Shirt.jpg.webp",
    Name: "shirts",
    Price: 700,
    Discriptions:"cotton shirts",
    
  },
    {
    img:"https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/13867/137620/top-quality-fashion-men-long-sleeve-cotton-shirts-military-fitness-cargo-outwear-dress-shirts-M-6XL__53093.1544096908.jpg?c=2?imbypass=on",
    Name: "shirts",
    Price: 550,
    Discriptions:"cotton shirts",
    
  },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdsRsBPJfyljx7d4eq1vYpPtIXVQlI9lU2w&usqp=CAU",
    Name: "shirts",
    Price: 600,
    Discriptions:"cotton shirts",
    
  },
    {
    img:"https://sanvt.com/wp-content/uploads/2020/10/SANVT-the-perfect-oxford-shirt-superior-quality-3-510x638.jpg",
    Name: "shirts",
    Price: 900,
    Discriptions:"cotton shirts",
    
  },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmCcF6YxEBRFY18nKXkCoJWHJ-3pmzQts9Q&usqp=CAU",
    Name: "shirts",
    Price: 500,
    Discriptions:"cotton shirts",
    
  },
    {
    img:"https://static-01.daraz.pk/p/6ba6983332f2229ed41c8525bcffcea0.jpg_340x340q80.jpg_.webp",
    Name: "shirts",
    Price: 600,
    Discriptions:"cotton shirts",
    
  },	
    
  ];

let obj3 = [
   
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeXn7XgeKiWR9rqlB9xXanvC0OxYOosrdhYA&usqp=CAU",
    Name:"key chain",
    Price: 1000,
    Discriptions:"bat key chain",
    },
    {
    img:"https://m.media-amazon.com/images/I/51Xo+v2nyTL._AC_UX385_.jpg",
    Name:"key chain",
    Price: 500,
    Discriptions:"bat key chain",
    },
    {
    img:"https://cdn.shopify.com/s/files/1/2076/4997/products/KC-PotionBat-SQ_1024x1024.jpg?v=1572033616",
    Name:"key chain",
    Price: 400,
    Discriptions:"bat key chain",
    },
    {
    img:"https://m.media-amazon.com/images/I/51L9seC1u5L._SL1480_.jpg",
    Name:"key chain",
    Price: 1000,
    Discriptions:"bat key chain",
    },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZO6UQXgyETZyYHdv8H3yzM9OZh_KSTrZ2Q&usqp=CAU",
    Name:"key chain",
    Price: 500,
    Discriptions:"bat key chain",
    },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjSibnaU2HykMqL9M2__0Sp7FaUf0igqrCg&usqp=CAU",
    Name:"key chain",
    Price: 400,
    Discriptions:"bat key chain",
    },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpry71v_mPpsWp8JUzkSCeNK966bIookX4w&usqp=CAU",
    Name:"key chain",
    Price: 500,
    Discriptions:"bat key chain",
    },
    {
    img:"https://www.dhresource.com/260x260/f2/albu/g21/M00/E8/B4/rBVaqmB9HGeANtfTAAKjG_nB-18343.jpg",
    Name:"key chain",
    Price: 1000,
    Discriptions:"bat key chain",
    },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZOOFnGN5xb0si4TzfEBzymuE9aYABi5MQQ&usqp=CAU",
    Name:"key chain",
    Price: 1000,
    Discriptions:"bat key chain",
    },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxu8AumNAmw4rV0lQrGie5ig4LzRNqij_Z2A&usqp=CAU",
    Name:"key chain",
    Price: 1000,
    Discriptions:"bat key chain",
    },



  ];



  return (<>
    <div className = "container">
    <div class="box">
      <Name a={obj[0].Name} />
      <Img a={obj[0].img} />
      <Discriptions a={obj[0].Discriptions} />
      <Price a={obj[0].Price} /></div>

      <div className="box">
        <Name a={obj[1].Name} />
        <Img a={obj[1].img} />
        <Discriptions a={obj[1].Discriptions} />
        <Price a={obj[1].Price} /></div>
        
      <div className="box">
        <Name a={obj[2].Name} />
        <Img a={obj[2].img} />
        <Discriptions a={obj[2].Discriptions} />
        <Price a={obj[2].Price} /></div>
        </div>

      <div className="box">
        <Name a={obj[3].Name} />
        <Img a={obj[3].img} />
        <Discriptions a={obj[3].Discriptions} />
        <Price a={obj[3].Price} /></div>
        </div>

      <div className="box">
        <Name a={obj[4].Name} />
        <Img a={obj[4].img} />
        <Discriptions a={obj[4].Discriptions} />
        <Price a={obj[4].Price} /></div>
        </div>

      <div className="box">
        <Name a={obj[5].Name} />
        <Img a={obj[5].img} />
        <Discriptions a={obj[5].Discriptions} />
        <Price a={obj[5].Price} /></div>
        </div>

      <div className="box">
        <Name a={obj[6].Name} />
        <Img a={obj[6].img} />
        <Discriptions a={obj[6].Discriptions} />
        <Price a={obj[6].Price} /></div>
        </div>

      <div className="box">
        <Name a={obj[7].Name} />
        <Img a={obj[7].img} />
        <Discriptions a={obj[7].Discriptions} />
        <Price a={obj[7].Price} /></div>
        </div>

      <div className="box">
        <Name a={obj[8].Name} />
        <Img a={obj[8].img} />
        <Discriptions a={obj[8].Discriptions} />
        <Price a={obj[8].Price} /></div>
        </div>

      <div className="box">
        <Name a={obj[9].Name} />
        <Img a={obj[9].img} />
        <Discriptions a={obj[9].Discriptions} />
        <Price a={obj[9].Price} /></div>
        </div>
    </>
    
    );
  }



export default App;