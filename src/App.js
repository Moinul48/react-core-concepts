import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  // var person= {
  //   name: "Dr. Mahfuz",
  //   job: "Singer",
  // }
  // var person2= {
  //   name: "Eva Rahman",
  //   job: "Kokil Konthi",
  // }
  // var style = {
  //   color: "red",
  //   backgroundColor: "yellow",
  // }
  
  const friends = ['Sobuj', 'Maruf', 'Pear'];
  const jobs =['Business', 'Service', 'Foreigner'];
  const nayoks = ['Razzak','Alamgir', 'JaforIqbal', 'Alamgir', 'SalmanSha','Shuvo','Sakib Khan'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premier Eli', price: '$249.99'}
  ]
  // const nayokName = nayoks.map(nayok => nayok);
  // console.log(nayokName);
  // const productNames = products.map(product => product);
  // console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
          {
            products.map(product=> <li>{product.name}</li>)
          }
        </ul>
        
        {products.map(pd=>
          <Product product={pd}></Product>
          )}

        
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {/* <Product product={products[1]}></Product>
        <Friend name = "Billal" job = "PHD"></Friend>
        <Friend name = "Parvez" job = "Guraguri"></Friend>
        <Friend name = {friends[0]} job = "Business"></Friend>
        <Friend name = {friends[2]} job = {jobs[2]}></Friend> */}

        {/* <p style={{fontSize:'40px'}}>I am a React Person</p>
        <Nayok name='Munna' job='football'></Nayok>
        <Nayok name='Masum' job='Dorshok'></Nayok>
        <Nayok></Nayok> */}

        {/* <Person name={nayoks[0]} nayika="Moushumi"></Person>
        <Person name="Jasim" nayika="Shabana"></Person>
        <Person name="BappaRaz" nayika="Cheka"></Person> */}

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}>My Heading: {person.name+" "+person.job}</h1>
        <h3 style={{backgroundColor:'cyan', color:'yellow'}}>Singer: {person2.name + " " + person2.job}</h3>
        <p>My first react paragraph</p> */}
       
      </header>
    </div>
  );
};
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () =>setCount(count + 1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onMouseMove ={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
};
function Users(){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>
            )
        }
      </ul>

    </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}
// function Friend(props){
//   const friendStyle = {
//     border: "2px solid green",
//     width: "200px",
//     margin: "10px"
//   }
//   return(
//     <div style={friendStyle}>
//       <h2>Name: {props.name}</h2>
//       <p>Profession: {props.job}</p>
//     </div>
//   )
// }

// function Nayok(props){
//   return(
//     <div style={{border:'2px solid red', margin:"10px", width:"400px "}}>
//       <h3>My Name: {props.name}</h3>
//       <p>My Profession: {props.job}</p>
//     </div>
//   )
// }

// function Person(props){
//   var presonStyle = {
//     border: '2px solid red',
//     margin: '20px',
//   }
//   console.log(props)
//   return (
//   <div style={{border: '2px solid yellow', margin: '20px'}} >
//     <h1>Nayok: {props.name}</h1>
//     <h3>Hero of : {props.nayika}</h3>
//   </div>
//   )
  
// };

export default App;
