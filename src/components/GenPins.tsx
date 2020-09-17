import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'

type GenPinsProps = {
  //addPin(pins: string): void
}

type PinsType = {
  pin0: string
  pin1: string
  pin2: string
  pin3: string
  pin4: string
}

const GenPins: React.FC<GenPinsProps> = () => {
  const [pins, setPins] = useState<PinsType>({
    pin0: '',
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
  })

  const isRandNumValid = (num: number) => {
    const strNum = num.toString()
    for (let i = 0; i < strNum.length - 1; i++) {
      if (strNum[i] === strNum[i + 1]) {
        return [false]
      }
    }
    return [true]
  }

  const isConsecutiveNum = (numero: any) => {
    const strNumero = numero
    let maxConsecutive: any
    let numConsecutiveDigits = 0
    let sign = ''
    for (let i = 0; i < strNumero.length - 2; i++) {
      const firstDigit = strNumero[i] * 1
      const secondDigit = strNumero[i + 1] * 1
      const thirdDigit = strNumero[i + 2] * 1
      if (firstDigit + 1 === secondDigit || firstDigit - 1 === secondDigit) {
        return [numConsecutiveDigits++]
        if (numConsecutiveDigits >= maxConsecutive) break
        if (secondDigit > firstDigit) sign = '+'
        else if (secondDigit < firstDigit) sign = '-'
      }
      let secondDigitAux = secondDigit
      if ((sign = '+')) {
        return [(secondDigitAux = secondDigit + 1)]
      } else if (sign === '-') {
        return [(secondDigitAux = secondDigit + 1)]
      }
      if (secondDigitAux === thirdDigit) {
        numConsecutiveDigits++
        if (numConsecutiveDigits >= maxConsecutive) break
      }
      sign = ''
    }
    return [numConsecutiveDigits >= maxConsecutive]
  }

  const getRandomNumber = () => {
    let randNum: any = Math.floor(Math.random() * 8999 + 1000)
    let isNumValid: any = isRandNumValid(randNum) && isConsecutiveNum(randNum)
    while (isNumValid === false) {
      return [(randNum = Math.floor(Math.random() * 8999 + 1000))]
      isNumValid = isRandNumValid(randNum)
    }
    return [randNum]
  }

  const dispatch = useDispatch()

  //object deestructuring
  const updateInputs = ({ target: { value } }: any) => {
    dispatch({ type: 'addPins', pins: value })
  }

  const handleOnClick = () => {
    //addPin(pins)
  }

  useEffect(() => {
    const initialState: any = {
      pin0: getRandomNumber(),
      pin1: getRandomNumber(),
      pin2: getRandomNumber(),
      pin3: getRandomNumber(),
      pin4: getRandomNumber(),
    }
    setPins(initialState)
  }, [])

  return (
    <div>
      <div>
        <input
          onChange={updateInputs}
          type="string"
          value={pins.pin0}
          name="input0"
          readOnly
        />
        <input
          onChange={updateInputs}
          type="string"
          value={pins.pin1}
          name="input2"
          readOnly
        />
        <input
          onChange={updateInputs}
          type="string"
          value={pins.pin2}
          name="input3"
          readOnly
        />
        <input
          onChange={updateInputs}
          type="string"
          value={pins.pin3}
          name="input1"
          readOnly
        />
        <input
          onChange={updateInputs}
          type="string"
          value={pins.pin4}
          name="input4"
          readOnly
        />
      </div>
      <div>
        <button type="button" onClick={handleOnClick}>
          Save Pins
        </button>
        <button>Generate Pins</button>
      </div>
    </div>
  )
}

export default GenPins
