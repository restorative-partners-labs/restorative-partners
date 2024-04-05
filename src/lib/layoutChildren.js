"use client"
import MapDirectionProvider from '@/contextApi/mapDirectionProvider'
import { store } from '@/redux/store'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

const LayoutChildren = ({ children }) => {
    return <>
        <MapDirectionProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </MapDirectionProvider>
        <Toaster position="top-right"
            containerStyle={{
                top: 60,
              
            }}
        />
    </>
}

export default LayoutChildren