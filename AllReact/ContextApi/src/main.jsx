import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NoteContext from './Context/NoteContext.jsx'

createRoot(document.getElementById('root')).render(

      <NoteContext>
        <App />
      </NoteContext>
   
)
