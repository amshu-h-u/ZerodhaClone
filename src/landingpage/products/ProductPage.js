import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        image="Media/Images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryMore="#"
        learnMore="#"
        googleStore="Media/Images/googlePlayBadge.svg"
        appStore="Media/Images/appstoreBadge.svg"
      />
      <RightSection image="Media/Images/console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="#"/>
      <LeftSection
        image="Media/Images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryMore="#"
        learnMore="#"
        googleStore="Media/Images/googlePlayBadge.svg"
        appStore="Media/Images/appstoreBadge.svg"
      />
      <RightSection image="Media/Images/kiteconnect.png" productName="Kite Connect API" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations" learnMore="#"/>
      <LeftSection
        image="Media/Images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryMore="#"
        learnMore="#"
        googleStore="Media/Images/googlePlayBadge.svg"
        appStore="Media/Images/appstoreBadge.svg"
      />
      <p className="text-center p-5">Want to know more about our technology stack? Check out the <a href="#">Zerodha.tech blog</a></p>
      <Universe />
    </>
  );
}

export default ProductPage;
