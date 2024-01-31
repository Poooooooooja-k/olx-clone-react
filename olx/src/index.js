import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {FirebaseContext} from './store/Context'
import Context from './store/Context'
import firebaseapp from './firebase/Config';


const root=ReactDOM.createRoot(
document.getElementById('root'));
root.render(
<StrictMode>
<BrowserRouter>
<FirebaseContext.Provider value={{firebaseapp}}>
<Context>
<App />
</Context>
</FirebaseContext.Provider>
</BrowserRouter>
</StrictMode>
)

