import React, { useEffect, useState } from "react";

const Carous = () => {
  const [animationMove, setAnimationMove] = useState(false);
  const radius = 300;
  const [anim, setAnim] = useState();

  // function sleep(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  const [images, setImages] = useState([
    { src: "ecommerce.png", alt: "ecommerce", angle: 0, x: 0, y: 0 },
    { src: "speaker.png", alt: "speaker", angle: 0, x: 0, y: 0 },
    {
      src: "social-media-marketing.png",
      alt: "social-media-marketing",
      angle: 0,
      x: 0,
      y: 0,
    },
    { src: "idea.png", alt: "idea", angle: 0, x: 0, y: 0 },
    { src: "advertising.png", alt: "advertising", angle: 0, x: 0, y: 0 },
    { src: "bar-chart.png", alt: "bar-chart", angle: 0, x: 0, y: 0 },
  ]);

  function positioning() {
    for (let i in images) {
      let temp = [...images];
      temp[i].x =
        Math.cos((((i * 360) / images.length) * Math.PI) / 180) * radius;
      temp[i].y =
        Math.sin((((i * 360) / images.length) * Math.PI) / 180) * radius;
      temp[i].angle = (i * 360) / temp.length;
      setImages([...temp]);
    }
  }

  useEffect(() => {
    positioning();
  }, []);

  function changeAnim(animationMove) {
    if (animationMove) {
      setAnim(
        setInterval(() => {
          let temp = [...images];
          for (let k = 0; k < images.length; k++) {
            temp[k].angle += 0.5;
            if (temp[k].angle >= 360) {
              temp[k].angle = 0;
            }
            temp[k].x = Math.cos((temp[k].angle * Math.PI) / 180) * radius;
            temp[k].y = Math.sin((temp[k].angle * Math.PI) / 180) * radius;
          }
          setImages([...temp]);
        }, 20)
      );
    } else {
      clearInterval(anim);
    }
  }

  useEffect(() => {
    changeAnim(animationMove);
  }, [animationMove]);

  return (
    <div className="carouselLayout">
      <div className="content carousel__content">
        <button
          onClick={async () => {
            setAnimationMove(true);
          }}
        >
          Запустить карусель
        </button>

        <div className="logos">
          {images.map((image) => {
            return (
              <img
                className="logos__img"
                src={image.src}
                alt={image.alt}
                key={image.src}
                style={{ top: image.y + "px", left: image.x + "px" }}
              />
            );
          })}
        </div>
        <button
          onClick={async () => {
            setAnimationMove(false);
            console.log("false нажат");
          }}
        >
          Остановить карусель
        </button>
      </div>
    </div>
  );
};

export default Carous;
