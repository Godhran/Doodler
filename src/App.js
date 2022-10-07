import logo from './logo.svg';
import './App.css';
import Colors from './styles/colors'
import DrawingCanvas from './components/DrawingCanvas';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div style={{backgroundColor:Colors.light}}>
        <div className="container">
          <div className="row justify-content-md-center p-0 mx-auto my-auto align-middle" style={{height:'100vh'}}>
            <DrawingCanvas/>
            {/* <Canvas/> */}
          </div>
        </div>
        <ToastContainer         
          position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
   </div>
  );
}

export default App;
