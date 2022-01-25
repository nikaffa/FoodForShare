import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import {
  SubmitButton,
} from "./Common";

import "../embla.css";

import Countdown from 'react-countdown';
import useCart from '../hooks/useCart'

export default function EmblaCarousel ({ foods }){
  const { cart, addItemToCart } = useCart();

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          
          {Object.keys(foods).map((i) => {
          const food = foods[i];
         
          const subset = ['id', 'name', 'freshness', 'image', 'donation_id', 'leftover'].reduce((a, e) => (a[e] = food[e], a), {})
          
          const date = new Date(food.donation_date);
          const timeLeft = date.getTime() + food.freshness * 3600000;
          const isFresh = Date.now()-(date.getTime() + food.freshness * 3600000);
          const renderer = ({days, hours, minutes, seconds}) => {
            return (
              <span>{days} days {hours} hours {minutes}:{seconds} minutes</span>
            )
          }

          //check availability & freshness
          if (food.leftover > 0 && isFresh < 0 ) {
            return (
            <div className="embla__slide" key={`{food.id}.${i}`}>
              <div className="embla__slide__inner">

                <div className="embla_left">
                  <div>
                    <img className="embla__slide__img_fit" src={food.image} alt="food" />
                  </div> 
                </div>
                <div className="embla_right">
                  <div className="embla_right_text">
                    <h3 >{food.name}</h3>
                    <h3 >{food.description}</h3>
                    <h3 >{food.food_type}</h3>
                    <div style={{backgroundColor: "lightcoral", display: "inline-block"}}>
                    <h3>Ends in <strong><Countdown date={timeLeft} renderer={renderer} /></strong></h3>
                  </div> 
                  <h3 >{food.leftover} left</h3> 
                  {/* <button size={'25px'} onClick={() => {
                    addItemToCart(subset) 
                    }}>Reserve</button>  */}

                    <SubmitButton size={'25px'} onClick={()=>addItemToCart(subset)}>Reserve</SubmitButton>             
                  
                  </div>  
                </div> 
                </div>
            </div>  
            ) 
          }else {
            return null
          }  
        })}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};
