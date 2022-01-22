import './App.css';
import Router from './components/Router/Router';
import { Provider } from 'react-redux';
import { store, persistor } from './components/store/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
