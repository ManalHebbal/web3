import { ProviderWrapper as LanguageProviderWrapper } from "../../contexts/LanguageContext"   //" contexts/LanguageContext.jsx";
import App from "./App" //"./components/App/App.jsx";

const AppLoader= () => {
  return (
    <LanguageProviderWrapper >
        <App />
 
      </LanguageProviderWrapper >
  )
}

export default AppLoader;