import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Form from './components/Form';
import Header from './components/Header'



function App() {

  return (
    <div className="App bg-dark p-5">
      <Header></Header>
      <div className='d-flex'>
        <div className='border border-4 border-light rounded p-3 nav-bar m-1'>
          <h3 className=''>Filters</h3>
          <Form></Form>
        </div>
        <div className='m-1'>
          <Routes>
            <Route path='/' element={<Main></Main>}></Route>
            <Route path='/:day' element={<Main></Main>}></Route>
            <Route path='/:day/:craving' element={<Main></Main>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;