import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a', 
  {href: 'https://google.com', target: '_blank'}, 
  'Click me!',anotherUser

)



createRoot(document.getElementById('root')).render(
  reactElement
)
