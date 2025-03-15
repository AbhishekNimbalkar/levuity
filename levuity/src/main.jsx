
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRouter from './component/Routes/Router.jsx'
import Communication from './component/Communication/Communication.jsx'
import Form from './component/Form/Form.jsx'

createRoot(document.getElementById('root')).render(
  
    // <App />
    <AppRouter />
    // <Communication/>
    // <Form/>

)
