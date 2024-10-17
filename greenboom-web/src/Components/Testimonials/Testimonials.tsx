import React from "react";
import { Card, Carousel } from "antd";
// import "../App.css";
import "./Testimonials.css";
import Title from "../Title/Title";

const testimonialsData = [
  {
    name: "MARK S.",
    feedback:
      "My first impression of Green Boom included a good experience, and the product seemed well made. It has interesting technology with a recycled agricultural byproduct. Green Boom products’ durability of the canvas/burlap sleeve stood out the most.",
    verification: "Verified Customer",
  },
  {
    name: "TRAVIS M.",
    feedback:
      "I would recommend Green Boom’s products. As an environmental consultant, it's nice to use something that's recycled/environmentally friendly.",
    verification: "Verified Customer",
  },
  {
    name: "RACHEL L.",
    feedback:
      "Green Boom's loose absorbent worked better than other absorbents we have used in the past. We wouldn't go back.",
    verification: "Verified Customer",
  },
];

const Testimonials = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "0px" }}>Testimonials</h2>
      <div className="carousel-container ">
        <Carousel
          dots={true}
          dotPosition="bottom"
          arrows={true}
          autoplay={false}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div key={index}>
              <Card
                bordered={false}
                style={{
                  margin: "0 auto",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Title weight="semibold" color="primaryA" height="6">
                  {testimonial.feedback}
                </Title>
                <Title marginTop="mt-2" fontSize="sm">
                  {testimonial.name}
                </Title>
                <Title marginTop="mt-1" fontSize="xs">
                  {testimonial.verification}
                </Title>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
