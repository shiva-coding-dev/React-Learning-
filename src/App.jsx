import { useState } from 'react';

import { CORE_CONCEPTS  , EXAMPLES} from './data.js';
import Header from './components/header';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButtons from './components/tabButtons.jsx';

function App() {
  const [selectedTopic , setSelectedTopic] = useState();
  function handleSelect(selectedButton ){
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please Select a Topic</p>;
  if(selectedTopic){
    tabContent  = 
    <div id = "tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>;
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
            <TabButtons isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButtons>
            <TabButtons isSelected={selectedTopic === 'jsx' } onSelect={() => handleSelect('jsx')}>JSX</TabButtons>
            <TabButtons isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButtons>
            <TabButtons isSelected={selectedTopic === 'state' } onSelect={() => handleSelect('state')}>State</TabButtons>
            
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
