import React,{useState} from 'react';

const App = () => {
 const color = "#8e44ad";
const [bgColor,setColor] = useState(color);
const [name,setName] = useState('click me');

const bgChange = () => {
    let newColor = "#34495e";
    setColor(newColor);
    setName('hello G 🐵');
    
};
const bgNormal= () =>{
    setColor(color);
    setName('welcome Back 🐒🐸');
    
}

    return(
        <>
<div style = {{ backgroundColor: bgColor}}>

<button className = "btn" onClick = {bgChange} onDoubleClick = {bgNormal}>{name}</button>
</div>
</>
    );
    
}
export default App;