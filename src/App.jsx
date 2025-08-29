import CoreConcepts from './components/CoreConcepts.jsx'
import Header from './components/header';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
