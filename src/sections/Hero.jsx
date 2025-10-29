import React from "react";
import ComingSoon from "./ComingSoon";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img
          src="/images/hero-bg.webp"
          alt="background"
          className="scale-out"
        />
        <img
          src="/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out"
        />
        <img
          src="/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo fade-out"
        />
        <div className="play-img fade-out">
          <img src="/images/play.png" alt="play" className="w-7 ml-1" />
        </div>

        <div className="">
          <img
            src="/images/big-hero-text.svg"
            alt="logo"
            className="size-full object-cover mask-logo"
          />
        </div>

        <div className="fale-logo-wrapper">
          <img
            src="/images/big-hero-text.svg"
            alt="logo"
            className="overlay-logo"
          />
        </div>

        <ComingSoon />
      </div>
    </section>
  );
};

export default Hero;
