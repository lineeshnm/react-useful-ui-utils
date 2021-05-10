import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
// import CreditCard from './CreditCard'
import MediaCard from './CardPage'
import data from '../data/cardData'

class MyCarousel extends Component {
    static get CONTAINER_STYLE() {
      return {
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle"
      };
    }
  
    static get CARD_STYLE() {
      return {
        height: "400px",
        width: "400px",
        paddingTop: "80px",
        textAlign: "center",
        background: "#52C0F5",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box"
      };
    }

    render() {
        return (
          <div style={MyCarousel.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={false} autoplay_speed={2500}>
            {
                Object.keys(data.Features).map((key, index) => {
                    console.log(index)
                    return ( 
                        <MediaCard key={index} style={MyCarousel.CARD_STYLE} props={data.Features[key]} />
                    )
                })
            }
            </ReactCardCarousel>
          </div>
        );
      }

    }

export default MyCarousel