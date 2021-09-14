import Header from './components/Header';
import {Route} from 'wouter';

import { Home } from './pages/Home';
import { EmailSent }  from './pages/EmailSent';

import './App.css';

function App() {
  return (
    <div className="App">
       <Header />
       <section className="App-Content">
          <Route path="/" component={Home}/>
          <Route path="/sendEmail" component={EmailSent} />
       </section>
    </div>
  );
}

export default App;
