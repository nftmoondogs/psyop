import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Hero3DCard() {
  return (
    <CardContainer className="inter-var px-4">
     

        <CardItem
          translateZ="100"
          rotateX={-20}
          rotateZ={360}
          className="w-full mt-4"
        >
          <img
            src="https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F42778%252F9he3k?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=30bb92f09a9288125effe645bbef80da"
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />

        </CardItem>

    </CardContainer>
  );
}
