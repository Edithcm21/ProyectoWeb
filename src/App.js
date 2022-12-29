import Formm from './components/Formm'
import "bootstrap/dist/css/bootstrap.min.css";
import { Coin } from 'react-bootstrap-icons';

function App() {
  return (
    <>     
        <nav className="navbar navbar-expand-sm navbar-light" Style="background-color: #40E0D0;">
          <a className="p-3 navbar-brand" href="/" >
          <Coin size={32} className="d-inline-block align-top"/>
            
              Historial de gastos personales
          </a>            
        </nav>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-md-6"> 
            <h2>Captura el gasto</h2>
          </div>          
        </div>
          <Formm />
        </div>
    </>
  );
}

export default App;
