// import pages
import HomePage from './pages/HomePage'
// import global style
import GlobalStyle from './components/GlobalStyle'
// formspree module
import { FormspreeProvider } from '@formspree/react'

function App() {
  return (
    
    <div className="App">
      <FormspreeProvider project="1594843301763088239">
      <GlobalStyle />
      <HomePage />
      </FormspreeProvider>
    </div>
    
  );
}

export default App;
