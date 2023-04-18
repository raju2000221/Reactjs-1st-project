import logo from './logo.svg';
import './App.css';

function App() {
  const Prioducts = [
    {name:'Laptop', Price:'60000', Brand:'Lenovo'},
    {name:'Phone', Price:'100000', Brand:'Apple'},
    {name:'Watch', Price:'2000', Brand:'Navie Force'},
    {name:'Bike', Price:'60000', Brand:' Honda Repsol'},
    {name:'Bike', Price:'60000', Brand:' Honda Repsol'},
    {name:'Tv', Price:'35000', Brand:' Samsung'},
    
  ]
  return (
    <div className="App">
      {
        Prioducts.map(Produc => <Product Name={Produc.name} Price={Produc.Price} B={Produc.Brand}></Product>)
       
      }
     console.log(Prioducts.name)
    </div>
  );
}

function Product(props){
  return(
    <div className="Product">
      <h3>Name: {props.Name}</h3>
      <p>Price: {props.Price} </p>
      <p>Brand: {props.B}</p>
    </div>
  )
}

export default App;
