import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import Para from './Para'
import Button from './Button'
import './index.css'

ReactDom.render(
    <>
    <App />
    <Para />
    <Button buttonName='Watch it'/>
    <Button buttonName='Read it'/>
    <Button buttonName='learn it'/>
    </>,
    document.getElementById('root')
);