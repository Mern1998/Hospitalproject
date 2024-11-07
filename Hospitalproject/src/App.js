import React from 'react';
import MyRoutes from './MyRoutes';
import {createRoot} from 'react-dom/client';
function App() {
  const container = document.getElementById('root');
  const root = createRoot(container);
    
     root.render(
       <React.StrictMode>
        <MyRoutes />
      </React.StrictMode>);
}

export default App;
