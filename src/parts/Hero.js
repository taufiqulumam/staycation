import React from "react";

import Fade from "react-reveal/Fade";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/icons/ic_cities.svg";
import IconTraveler from "assets/icons/ic_traveler.svg";
import IconTreasure from "assets/icons/ic_treasure.svg";
import Button from "elements/Button";
import FormatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <Fade left>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="font-weight-light mb-4 text-gray-700 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
          </Fade>
          <Fade left delay={200}>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
          </Fade>

          <div className="row" style={{ marginTop: 80 }}>
            <Fade bottom delay={300}>
              <div className="col-auto" style={{ marginRight: 20 }}>
                <img
                  src={IconTraveler}
                  width="36"
                  height="36"
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {FormatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
            </Fade>
            <Fade bottom delay={400}>
              <div className="col-auto" style={{ marginRight: 20 }}>
                <img
                  src={IconTreasure}
                  width="36"
                  height="36"
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  {FormatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>
            </Fade>
            <Fade bottom delay={500}>
              <div className="col-auto" style={{ marginRight: 20 }}>
                <img
                  src={IconCities}
                  width="36"
                  height="36"
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {FormatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </Fade>
          </div>
        </div>

        <Fade right>
          <div className="col-6 pl-5">
            <div style={{ width: 540, height: 410 }}>
              <img
                src={ImageHero}
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                alt=""
              />
              <img
                src={ImageHeroFrame}
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
                alt=""
              />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
