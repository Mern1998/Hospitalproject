import React from 'react';
// import { useState } from 'react';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './User';
import Create from './Create';
import Update from './Upadate';


function App(){
    // const [count ,setCount] = useState(0)


return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/'element={<User/>}></Route>
                <Route path='/create'element={<Create/>}></Route>
                <Route path='/update/:id'element={<Update/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
)
}

export default App;

