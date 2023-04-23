/* @refresh reload */
import { render } from 'solid-js/web'
import { FirebaseProvider } from 'solid-firebase'
import App from './App'
import firebaseConfig from '../firebase.config.json'
import { MeProvider } from '@/context/me'
import '@/styles/global.css'

render(() => (
    <FirebaseProvider config={firebaseConfig}>
        <MeProvider>
            <App />
        </MeProvider>
    </FirebaseProvider>
), document.getElementById('root') as HTMLElement)
