import React, { useState, useRef } from 'react';

import { useSpring, animated as a } from 'react-spring';

import './CardButton.css'

export function CardButton(props) {

    const [count, setCount] = useState(1)
    
    const h2Text = useRef('???')

    const Flipped = () => {
        setFlipped((state) => !state)

        setCount(count + 1)

        if(count % 2 == 0) {
            h2Text.current = "???"

        } else {
            h2Text.current = props.name

        }
    }

    const h2TextValue = h2Text.current

    const [flipped, setFlipped] = useState(false)
    const { transform, opacity } = useSpring({
          opacity: flipped ? 1 : 0,
          transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
          config: { mass: 5, tension: 500, friction: 80 }
    })

    return (
    <>
    <div className="card" onClick={Flipped}>
                <h2 id="change-opacity" ref={h2Text}>{h2TextValue}</h2>
                <a.div class="c back" style={{ opacity: opacity.interpolate((o) => 1 - o), transform }} />
                <a.div class={props.class} style={{ opacity, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) }} />
    </div>
    </>
    );
}