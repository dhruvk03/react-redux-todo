import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import App from './components/App'

const initialState = {
    todos: [{ id: 123, text: 'hello', completed: false }]
};

const store = createStore(todoApp, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)