import logo from './logo.svg';
import './App.css';

function App() {
  var person= {
    name: "Dr. Mahfuz",
    job: "Singer",
  }
  var person2= {
    name: "Eva Rahman",
    job: "Kokil Konthi",
  }
  var style = {
    color: "red",
    backgroundColor: "yellow",
  }
  return (
    <div className="App">
      <header className="App-header">

        <p style={{fontSize:'40px'}}>I am a React Person</p>
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
}

export default App;
