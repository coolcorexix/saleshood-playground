import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CreateBuyerSiteModal } from "@saleshood/ui-kit";
import { QueryClient, QueryClientProvider } from 'react-query';


import './index.css'


const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App />

)
