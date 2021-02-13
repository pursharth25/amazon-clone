import React from 'react';
import './Home.css';
import Product from './Product.js';
import CarouselPage from './slideFeature';

function Home(){
	return(
 
    <div className="home">
      <div className="home_container">
       <CarouselPage className="carousel" />


           <div className="home_row">
               <Product
            id="11"
            title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6'' Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, Wi-Fi 6, RGB Keyboard"
            price={1196}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51UQDEuqoiL.jpg"
          />

          <Product
            id="14"
            title="Redragon K551 Mechanical Gaming Keyboard RGB LED Rainbow Backlit Wired Keyboard with Red Switches Gaming PC"
            price={43.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71CevTCkBsL.jpg"
          />

           <Product
            id="12"
            title="Razer Basilisk X HyperSpeed Wireless Gaming Mouse: Bluetooth & Wireless Compatible - 16K DPI Optical Sensor"
            price={44.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81W3s4ZWMXL.jpg"
          />
           

         
        </div>

        
        
        <div className="home_row">

         <Product
            id="15"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Headphones with Mic"
            price={29}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/41R+VaxAEbL.jpg"
          />

        <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />

          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />


             <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />

            


         </div>

        <div className="home_row">

        <Product
            id="13"
            title="AMZOYO 23.6'' x 13.7'' Dual-Sided Desk Pad, Office Desk Mat, Multifunctional Table Mat, Waterproof PU Leather Mouse Pad"
            price={9.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/51ZL2A1gW-L.jpg"
          />

       <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />

          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

         
        

        
        </div>

        <div className="home_row">
        
         <Product
            id="16"
            title="Samsung Business SR35 Series 24 inch IPS Panel 1080p 75Hz 5 ms Response time Ultra-Thin Bezel Design Computer Monitor for Business with VGA and HDMI (S24R356FHN), Black"
            price={222.79}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91TS0uHjMbL.jpg"
          />


        <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />

       
        
        </div>

      </div>
    </div>


		);
	}


	export default Home;