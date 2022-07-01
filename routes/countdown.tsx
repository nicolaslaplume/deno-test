/** @jsx h */
import {h} from 'preact';
import Countdown from '../islands/Countdown.tsx';


export default function CountdownPage(){

    const date = new Date();
    date.setSeconds(date.getSeconds() + 10);

    return (
        <main>
            <Countdown target={date.toISOString()}/>
        </main>
    )
}