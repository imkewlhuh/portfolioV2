import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './pages/layout.jsx';
import Play from './pages/play.jsx';
import About from './pages/about.jsx';
import Skills from './pages/skills.jsx';
import Projects from './pages/projects.jsx';
import BattlePass from './pages/battlepass.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/play",
        element: <Play />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/battlepass",
        element: <BattlePass />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
