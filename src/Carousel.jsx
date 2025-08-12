import { useState } from "react";
import { shortList, list, longList } from "./data";

const Carousel = () => {
     const [people, setPeople] = useState (shortList);
  return (
    <section className="slider-container">
        {people.map((people)=>{
          const {id, image, name, title, quote} = person;
            return (

              <article className="slide" key={id}>
                <img src={image} alt={name} className="person-img"/>
                <h5 className="name">{name}</h5>
              </article>
            )
        })}

    </section>

  )
};
export default Carousel;