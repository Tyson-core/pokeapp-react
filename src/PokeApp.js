import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import 'nes.css/css/nes.min.css'

const PokeApp = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}

export default PokeApp
