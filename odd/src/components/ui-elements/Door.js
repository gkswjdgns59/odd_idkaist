import React, { useEffect, useState } from "react";
import styles from './page.module.css';
import socket from "./../../socket-client";

export default function Door(props) {
    const [doorImg, setDoorImg] = useState(null);
    const [profImg, setProfImg] = useState(null);

    useEffect(() => {
        setDoorImg(`./assets/door_${props.roomNumber}.png`);
        setProfImg(`./assets/prof_${props.roomNumber}.png`);
    }, []);

    const enterRoom = () => {
        socket.emit('knock', props.roomNumber);
    }

    return (
        <div className={styles.doorFrame}>
            <img
                src={doorImg}
                className={styles.doorImg}
                onClick={() => enterRoom()}
            ></img>
            <img
                src={profImg}
                className={styles.profImg}
            ></img>
        </div>
    )
}