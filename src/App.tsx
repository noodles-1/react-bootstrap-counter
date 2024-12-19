import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';

function App() {
    const [counter, setCounter] = useState<number>(0);

    return (
        <>
            <div className='bg-white shadow border p-3 rounded-2 text-start' style={{ width: "200px "}}>
                <h5> Counter: {counter} </h5>
                <div className='d-flex justify-content-between w-50'>
                    <Button variant='secondary' className='bg-danger px-3' onClick={() => setCounter(counter - 1)}> - </Button>
                    <Button variant='secondary' className='bg-primary' onClick={() => setCounter(counter + 1)}> + </Button>
                </div>
            </div>
        </>
    )
}

export default App
