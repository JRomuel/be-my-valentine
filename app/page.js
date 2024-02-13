'use client'
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { motion, animate  } from "framer-motion"

export default function Home() {

  const texts = ['No', 'Are you sure?', 'No Please :(', "Meow :(", "Don't Do this to me :(", "Youre Breaking my Heart", "I', gonna cry..." ];
  const images = ['/cat-giving-flower.jpg', '/crycat-crying-cat.gif', '/cat.gif', "/mean-cat.jpg", "/crazy-cat.jpg", "/sad-cat.jpg", "/crying-cat-2.jpg" ];
  
  const [buttonText, setButtonText] = useState('No');
  const [mainImage, setMainImage] = useState('/cat-giving-flower.jpg');
  const [mainText, setmainText] = useState('Will you be my Valentine?');
  let [count, setCount] = useState(0);
  const button = useRef(null);

  const onMouseEnter = () => {
    
    if(count >= texts.length - 1){
      setCount(0);
    }else{
      setCount(++count);
    }
    setButtonText(texts[count]);
    setMainImage(images[count]);
    animate(button.current, {top: Math.floor(Math.random() * (window.innerHeight - 100)), left: Math.floor(Math.random() * (window.innerWidth - 100))});

  };
  const sheSaidYes = () => {
    
    setMainImage('/in-loved-cat.jpg');
    setmainText('Yeyyy!!!!');
    animate(button.current, {opacity: 0});

  };

  


  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          style={{objectFit:'cover'}}
          className={styles.logo}
          src={mainImage}
          alt="Cat Flower"
          width={300}
          height={300}
          priority
        />

      </div>
      <h1 className={styles.title}>{mainText}</h1>
      <div className={styles.buttons}>
          <button type="button" onClick={sheSaidYes} className={styles.yes}>Yes</button>
          <motion.button ref={button} type="button" onClick={onMouseEnter} onMouseEnter={onMouseEnter} className={styles.no}>{buttonText}</motion.button>
      </div>
    </main>
  );
}
