import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Product name="Laptop" price="300"></Product>
     <Product name="Phone" price="5000"></Product>
     <Product name="Chosma" price="200"></Product>
    </div>
  );
}

function Product(props){
  return(
    <div className="Product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
