import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import store from './redux/store'
import { Provider } from 'react-redux'

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
document.getElementById('root'))


