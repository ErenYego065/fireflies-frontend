import moment from 'moment';
import React, { useEffect, useState } from 'react'

interface CountDownProps {
    time: moment.Moment
}

const CountDown = ({ time }: CountDownProps) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    const getCountdown = () => {
        const fullDate = moment(time);
        return [
            { label: "Days", value: fullDate.diff(currentTime, 'days') },
            { label: "Hours", value: fullDate.diff(currentTime, 'hours') % 24 },
            { label: "Minutes", value: fullDate.diff(currentTime, 'minutes') % 60 },
            { label: "Seconds", value: fullDate.diff(currentTime, 'seconds') % 60 }
        ];
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex gap-2.5 mt-1">
            {getCountdown()?.map((d, i) => <div key={i} className="flex flex-col items-center gap-0.5 justify-center h-20 w-20 rounded-lg bg-[linear-gradient(25.71deg,_rgba(217,217,217,0)_20.07%,#13AFB6_116.86%)]">
                <p className="font-bold text-3xl text-[#5A5555]">{d?.value}</p>
                <p className="md:text-sm text-xs text-[#5A5555]">{d?.label}</p>
            </div>)}
        </div>)
}

export default CountDown