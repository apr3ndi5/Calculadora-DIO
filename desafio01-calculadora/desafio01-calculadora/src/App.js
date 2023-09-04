import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row, Column } from "./styles";
import { useState } from "react"
const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirtsNumber] = useState("0");
  const [operation, setOperation] = useState()

  const handleOnClear = () => {
    setCurrentNumber("0")
    setFirtsNumber("0")
    setOperation("")
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === "0" ? "" : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === "0"){
      setFirtsNumber(String(currentNumber));
      setCurrentNumber("0")
      setOperation("+")
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirtsNumber("0")
      setOperation("")
    }
  }

  const handleDivision = () => {
    if (firstNumber === "0"){
      setFirtsNumber(String(currentNumber));
      setCurrentNumber("0")
      setOperation("/")
    } else {
      const division = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(division))
      setFirtsNumber("0")
      setOperation("")
    }
  }

  const handleDecress = () => {
    if (firstNumber === "0"){
      setFirtsNumber(String(currentNumber));
      setCurrentNumber("0")
      setOperation("-")
    } else {
      const division = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(division))
      setFirtsNumber("0")
      setOperation("")
    }
  }

  const handleMultiply = () => {
    if (firstNumber === "0"){
      setFirtsNumber(String(currentNumber));
      setCurrentNumber("0")
      setOperation("x")
    } else {
      const division = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(division))
      setFirtsNumber("0")
      setOperation("")
    }
  }

  const handleEquals = () => {
    if (!firstNumber !== "0" && operation !== ""  && currentNumber !== "0"){
      switch (operation) {
        case "+":
            handleSumNumbers();
            break;
        case "/":
            handleDivision();
            break;
        case "-":
            handleDecress();
            break;
        case "x":
            handleMultiply();
            break
          default:
             break;
      }
    } 
  }


  return (
    <Container>
      <Content>
      <Input value={currentNumber}/>
      <Row>
        <Button label="x" onClick= {handleMultiply}/>
        <Button label="/" onClick= {() => handleDivision("/")}/>
        <Button label="C" onClick= {handleOnClear}/>
        <Button label="X" onClick= {() => handleAddNumber("X")}/>
      </Row>
      <Row>
        <Button label="7" onClick= {() => handleAddNumber("7")}/>
        <Button label="8" onClick= {() => handleAddNumber("8")}/>
        <Button label="9" onClick= {() => handleAddNumber("9")}/>
        <Button label="-" onClick= {handleDecress}/>
      </Row>
      <Row>
        <Button label="4" onClick= {() => handleAddNumber("4")}/>
        <Button label="5" onClick= {() => handleAddNumber("5")}/>
        <Button label="6" onClick= {() => handleAddNumber("6")}/>
        <Button label="+" onClick= {handleSumNumbers}/>
      </Row>
      <Row>
        <Button label="1" onClick= {() => handleAddNumber("1")}/>
        <Button label="2" onClick= {() => handleAddNumber("2")}/>
        <Button label="3" onClick= {() => handleAddNumber("3")}/>
        <Button label="=" onClick= {handleEquals}/>
      </Row>
      <Row>
        <Button label="0" onClick= {() => handleAddNumber("0")}/>
        <Button label="0" onClick= {() => handleAddNumber("0")}/>
        <Button label="0" onClick= {() => handleAddNumber("0")}/>
        <Button label="0" onClick= {() => handleAddNumber("0")}/>
      </Row>
      </Content>
    </Container>
  );
}

export default App;
