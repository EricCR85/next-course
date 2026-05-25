import '@/styles/globals.css'
import { store } from '../store/store'
import { Provider, provider } from 'react-redux'



function MyApp ({ Component, pageProps }) {
  return (
    <Provider store= {store} >
      <Component {...pagProps} />
    </Provider>
  )
}

export default MyApp;