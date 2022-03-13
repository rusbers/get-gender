import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'

const network = {
  serverUrl: 'https://api.genderize.io'
}

ReactDOM.render(
  <Form fetchUrl={network} />,
  document.getElementById('root')
)
