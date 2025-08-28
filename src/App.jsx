import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/header';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButtons from './components/tabButtons.jsx';
function App() {
  const [selectedTopic , setSelectedTopic] = useState("Please click a button");
  function handleSelect(selectedButton ){
    setSelectedTopic(selectedButton);
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
            <TabButtons onSelect={() => handleSelect('components')}>Components</TabButtons>
            <TabButtons onSelect={() => handleSelect('jsx')}>JSX</TabButtons>
            <TabButtons onSelect={() => handleSelect('props')}>Props</TabButtons>
            <TabButtons onSelect={() => handleSelect('state')}>State</TabButtons>
            
          </menu>
        </section>
        {selectedTopic}
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
