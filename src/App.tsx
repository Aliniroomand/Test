import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes.tsx'

const route =createBrowserRouter(routes);

const App = () => {
  return(
    <RouterProvider router={route}/>
  )
  
};

export default App