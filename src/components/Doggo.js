import React, { useEffect, useState } from "react";
import doggo from '../images/doggo.png';

const Doggo = (props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setVisible(false);
        }, props.delay);
      }, [props.delay]);

    return visible ? (
        <img src={doggo} className='App-doggo' alt='logo' />
    ) : null;
}

export default Doggo;