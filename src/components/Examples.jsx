import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButtons from "./tabButtons.jsx";
export default function Examples(){
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
    );
}