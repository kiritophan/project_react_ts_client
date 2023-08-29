import { useTranslation } from 'react-i18next'
import './main.scss'
import RouteSetup from '@routes/RouteSetup'
import { googleLogin } from './firebase';
import axios from 'axios';


function App() {
  const { t } = useTranslation();

  async function handleGoogleLogin() {
    let result = await googleLogin();
    let token = await result.user.getIdToken();
    let serverRes = await axios.post("http://localhost:4000/authen-google", {
      token
    })
    console.log("da vao result", serverRes);
  }
  return (
    <>
      {/* Routing */}
      Thu: {t('hello')}
      <button onClick={() => {
        handleGoogleLogin();
      }}>Google Signin</button>
      <RouteSetup />
    </>
  )
}

export default App