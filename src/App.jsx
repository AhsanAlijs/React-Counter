import { useState } from "react"


function App() {

  const [num, setNum] = useState(0)

  const addNum = () => {
    if (num > 100) {
      alert('The is lager')
    }else{
      setNum(num + 1);
    }
  }

  const subNum = () => {
    if (num === 0) {
      alert('Zero se neche nhi ja sakte Majrat')
    } else {
      setNum(num - 1);
    }
  }


  return (
    <>
      <h1>Counter App</h1>
      <button onClick={addNum}>Add</button>
      <span>{num}</span>
      <button onClick={subNum}>Sub</button>
    </>
  )
}

export default App