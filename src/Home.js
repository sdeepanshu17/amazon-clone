import React, { useState } from 'react'
import "./Home.css"
import Product from './Product'
import productList from './ProductList'
import { ToastContainer, toast } from 'react-toastify';


function Home() {


    return (
        <div className='home'>


            <div className="home-container">
                <img className='home-img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_-jpg" alt="logo" />
            </div>


            <div className="home-row">
                <Product key={1} id={121} title={productList[0].title} price={productList[0].price} rating={productList[0].rating} image={productList[0].img} />
                <Product key={2} id={122} title={productList[1].title} price={productList[1].price} rating={productList[1].rating} image={productList[1].img} />
            </div>


            <div className="home-row">
                <Product key={3} id={123} title={productList[2].title} price={productList[2].price} rating={productList[2].rating} image={productList[2].img} />
                <Product key={4} id={124} title={productList[3].title} price={productList[3].price} rating={productList[3].rating} image={productList[3].img} />
                <Product key={5} id={125} title={productList[4].title} price={productList[4].price} rating={productList[4].rating} image={productList[4].img} />
            </div>


            <div className="home-row">
                <Product key={6} id={126} title={productList[5].title} price={productList[5].price} rating={productList[5].rating} image={productList[5].img} />
            </div>
            <ToastContainer className="toast-cont" />

        </div>
    )
}

export default Home