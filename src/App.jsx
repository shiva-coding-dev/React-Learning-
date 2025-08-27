import { CORE_CONCEPTS } from './data.js';
import Header from './components/header';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButtons from './components/tabButtons.jsx';
function App() {
  function handleSelect(){
    console.log('Button are Clicked ');
    
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts title = {CORE_CONCEPTS[0].title} description = {CORE_CONCEPTS[0].description} image = {CORE_CONCEPTS[0].image}/>
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={handleSelect}>Components</TabButtons>
            <TabButtons onSelect={handleSelect}>JSX</TabButtons>
            <TabButtons onSelect={handleSelect}>Props</TabButtons>
            <TabButtons onSelect={handleSelect}>State</TabButtons>
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
