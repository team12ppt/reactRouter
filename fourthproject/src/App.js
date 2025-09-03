import { useState } from 'react';

function App() {

  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const addtodolist = () =>{
    let tempArr = list;
    tempArr.push(value);
    setList(tempArr);
    setValue("")
  };

  const deleteItem = (index) =>{
    let temp=list.filter((irem,i) => i !==index);
    setList(temp);
  }
return(
  <div className='App'>
    <fieldset>
      <h>Add a product to list </h> 
      <input type='text' value={value} onChange={(e) =>
        setValue(e.target.value) 
      }/> <br />
      <button onClick={addtodolist}> Click to add</button> <br /> <br />
      <h>product catalog</h>  <br />  <br />
      <ol>
        {list.map((item,i) => <li onClick={()=> deleteItem(i)}>{item}</li>)}

      </ol>  <br /> <br />
      <h>
        click on product to delete 
      </h>  <br /> 
    </fieldset>

  </div>
)
}

export default App;