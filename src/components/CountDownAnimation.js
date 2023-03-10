import { useContext } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingsContext } from '../context/SettingsContext'
const CountdownAnimation = ({key, timer, animate, children}) => {

  const { stopAimate } = useContext(SettingsContext)

    return (
      <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={["#ffb6c1"]}
        strokeWidth={7}
        size={220}
        trailColor="#151932"
        onComplete={ () => {
          stopAimate()
        }}
      >
        {children}
      </CountdownCircleTimer>
    )
}

export default CountdownAnimation