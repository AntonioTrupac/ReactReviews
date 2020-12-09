import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaApple } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text } = people[index];

    const checkNumber = (number) =>{
        if(number > people.length - 1){
            return 0;
        }
        if(number < 0){
            return people.length -1;
        }
        return number;
    }

    const nextPerson = () =>{
        setIndex((index) =>{
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    const prevPerson = () =>{
        setIndex((index) =>{
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const randomPerson = () =>{
        let randomNumber =Math.floor(Math.random() * people.length);
        if(randomNumber === index){
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

    return (
        <article className="review">
            <div className="img-container">
                <img  className="person-img" src={image} alt={name}/>
                <span className="apple">
                    <FaApple />
                </span>
            </div>
            <h4>{name}</h4>
            <p className="job">{job}</p>
            <p className="text-info">{text}</p>
            <div className="button-container">
                <button className="button-left" onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className="button-right" onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className="surprise-me" onClick={randomPerson}>Surprise Me</button>
        </article>
    );
};

export default Review;