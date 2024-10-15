//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLoader from './components/App/Apploader';
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(<AppLoader />);
