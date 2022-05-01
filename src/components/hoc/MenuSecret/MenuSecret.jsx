import React from 'react';
import { useState } from "react";
import Button from "../../ui/Button/Button";

export default function MenuSecret({ children, labelOpen, labelClose }) {

    const [isMenuShown, setIsMenuShown ] = useState(false);

    function toggleMenu() {
        //1:
        // if (isMenuShown) {
        //   setIsMenuShown(false);
        // } else {
        //   setIsMenuShown(true);
        // }
    
        //2:
        // setIsMenuShown(isMenuShown ? false : true);
    
        //3:
        setIsMenuShown(!isMenuShown);
      }

    



    return (
        <div>
          <Button action={toggleMenu}>
            {isMenuShown ? labelOpen : labelClose}
          </Button>
    
          {isMenuShown && children}
        </div>
  );
}
