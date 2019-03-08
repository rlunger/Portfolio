import React, { Component } from 'react'
import Terminal from './components/Terminal'
import { createGlobalStyle } from 'styled-components'
import MonitorFrame from './components/MonitorFrame'

const GlobalStyle = createGlobalStyle`
body {
  color: green;
  /*background-color: black;*/
  font-family: 'Fira Code', Consolas;
  font-size: 18px;
  margin: 0;
  padding: 0;
  border: 0;
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  z-index: 1;

}
  @keyframes flicker {
    0% {
      opacity: 0.27861;
    }
    5% {
      opacity: 0.34769;
    }
    10% {
      opacity: 0.23604;
    }
    15% {
      opacity: 0.90626;
    }
    20% {
      opacity: 0.18128;
    }
    25% {
      opacity: 0.83891;
    }
    30% {
      opacity: 0.65583;
    }
    35% {
      opacity: 0.67807;
    }
    40% {
      opacity: 0.26559;
    }
    45% {
      opacity: 0.84693;
    }
    50% {
      opacity: 0.96019;
    }
    55% {
      opacity: 0.08594;
    }
    60% {
      opacity: 0.20313;
    }
    65% {
      opacity: 0.71988;
    }
    70% {
      opacity: 0.53455;
    }
    75% {
      opacity: 0.37288;
    }
    80% {
      opacity: 0.71428;
    }
    85% {
      opacity: 0.70419;
    }
    90% {
      opacity: 0.7003;
    }
    95% {
      opacity: 0.36108;
    }
    100% {
      opacity: 0.24387;
    }
  }
  @keyframes textShadow {
    0% {
      text-shadow: 0.4389924193300864px 0 1px rgba(0, 30, 255, 0.5),
        -0.4389924193300864px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    5% {
      text-shadow: 2.7928974010788217px 0 1px rgba(0, 30, 255, 0.5),
        -2.7928974010788217px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    10% {
      text-shadow: 0.02956275843481219px 0 1px rgba(0, 30, 255, 0.5),
        -0.02956275843481219px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    15% {
      text-shadow: 0.40218538552878136px 0 1px rgba(0, 30, 255, 0.5),
        -0.40218538552878136px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    20% {
      text-shadow: 3.4794037899852017px 0 1px rgba(0, 30, 255, 0.5),
        -3.4794037899852017px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    25% {
      text-shadow: 1.6125630401149584px 0 1px rgba(0, 30, 255, 0.5),
        -1.6125630401149584px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    30% {
      text-shadow: 0.7015590085143956px 0 1px rgba(0, 30, 255, 0.5),
        -0.7015590085143956px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    35% {
      text-shadow: 3.896914047650351px 0 1px rgba(0, 30, 255, 0.5),
        -3.896914047650351px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    40% {
      text-shadow: 3.870905614848819px 0 1px rgba(0, 30, 255, 0.5),
        -3.870905614848819px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    45% {
      text-shadow: 2.231056963361899px 0 1px rgba(0, 30, 255, 0.5),
        -2.231056963361899px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    50% {
      text-shadow: 0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
        -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    55% {
      text-shadow: 2.3758461067427543px 0 1px rgba(0, 30, 255, 0.5),
        -2.3758461067427543px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    60% {
      text-shadow: 2.202193051050636px 0 1px rgba(0, 30, 255, 0.5),
        -2.202193051050636px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    65% {
      text-shadow: 2.8638780614874975px 0 1px rgba(0, 30, 255, 0.5),
        -2.8638780614874975px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    70% {
      text-shadow: 0.48874025155497314px 0 1px rgba(0, 30, 255, 0.5),
        -0.48874025155497314px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    75% {
      text-shadow: 1.8948491305757957px 0 1px rgba(0, 30, 255, 0.5),
        -1.8948491305757957px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    80% {
      text-shadow: 0.0833037308038857px 0 1px rgba(0, 30, 255, 0.5),
        -0.0833037308038857px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    85% {
      text-shadow: 0.09769827255241735px 0 1px rgba(0, 30, 255, 0.5),
        -0.09769827255241735px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    90% {
      text-shadow: 3.443339761481782px 0 1px rgba(0, 30, 255, 0.5),
        -3.443339761481782px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    95% {
      text-shadow: 2.1841838852799786px 0 1px rgba(0, 30, 255, 0.5),
        -2.1841838852799786px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
    100% {
      text-shadow: 2.6208764473832513px 0 1px rgba(0, 30, 255, 0.5),
        -2.6208764473832513px 0 1px rgba(255, 0, 80, 0.3), 0 0 3px;
    }
  }
`

class App extends Component {
  render () {
    return <Terminal />
  }
}

export default App
