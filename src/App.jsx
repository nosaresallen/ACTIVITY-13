import { useState, useEffect } from 'react';
import Header from './Header'
import Counter from './Counter'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'


function App() {

  const [title, setTitle] = useState('Activity 13 - React Components, Props, and useState');
  const [count, setCount] = useState(0);
  const [copyright, setCopyright] = useState('Copyright © BASE404 | Allen Nosares');
  const [cardBackgroundColor, setCardBackgroundColor] = useState('white'); // Initialize with white


  useEffect(() => {
    if (count !== 0 && count % 5 === 0) {
      const randomColor = '#' + ((Math.random() * 0xFFFFFF) << 0).toString(16);
      setCardBackgroundColor(randomColor);
    } else if (count === 0) {
      setCardBackgroundColor('white'); 
    }
  }, [count]);

  return (
    <main className="container-fluid d-flex flex-column min-vh-100 header-and-footer" >
      <Header title={title}/>
        <div className="row flex-grow-1">
          <div className="col-md-6">
            <div className="card mt-5 ms-5 me-5 shadow" style={{ backgroundColor: cardBackgroundColor }}>
                <div className="card-body m-5 p-4 ">
                  <p className='fw-bold text-center text-black'>If you reach 5 and it is divisible by 5, the background color will change to a random color.</p>
                </div>
              </div>
          </div>
          <div className="col-md-6">
            <div className="card m-5 bg-dark shadow">
              <div className="card-body m-5 ">
                {/* <h1 className='fw-bold fs-2 text-center text-white'>COUNTER</h1> */}
                <Counter count={count} setCount={setCount}/>
              </div>
            </div>
          </div>
        </div>
      <Footer copyright={copyright}/>
    </main>
  )
}

export default App
