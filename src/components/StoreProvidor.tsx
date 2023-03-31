
"use client";

import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'

interface IStoreProvidor {
    children: ReactNode
}
 

const StoreProvidor: React.FC<IStoreProvidor> = ({ children }) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StoreProvidor;

