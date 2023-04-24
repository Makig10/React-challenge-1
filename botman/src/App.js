import logo from './logo.svg';
import './App.css';
import Form from './form';
import Table from './Table';

function App() {
  useEffect(()=>{
    fetch( "http://localhost:3000/transactions")
    .then(response=>(response.json))
    .then(data=>(
      console.log("fetched!!"),[]
    ))
  })
  return (
    <div className="App">
      <Table/>
      <Form/>
    </div>
  );
}

export default App;
