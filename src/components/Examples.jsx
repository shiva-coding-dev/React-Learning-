import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButtons from "./tabButtons.jsx";
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";
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
        <Section id="examples">
          <Tabs 
          buttons = {
            <>
                <TabButtons isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButtons>
                <TabButtons isSelected={selectedTopic === 'jsx' } onClick={() => handleSelect('jsx')}>JSX</TabButtons>
                <TabButtons isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButtons>
                <TabButtons isSelected={selectedTopic === 'state' } onClick={() => handleSelect('state')}>State</TabButtons>
            </>
          }>{tabContent}</Tabs>     
        </Section>
    );
}