import { useState } from 'react';

import TabButton from '../TabButton';

import { TabName } from '../../models/TabName';

import { EXAMPLES } from '../../data/Examples';

import './Examples.css';

const Examples = () => {
  const [selectedTab, setSelectedTab] = useState<string>(TabName.Components);

  function handleSelect(tabName: TabName) {
    setSelectedTab(tabName);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton onSelect={() => handleSelect(TabName.Components)}>
          Components
        </TabButton>
        <TabButton onSelect={() => handleSelect(TabName.JSX)}>JSX</TabButton>
        <TabButton onSelect={() => handleSelect(TabName.Props)}>
          Props
        </TabButton>
        {/* Alternatively we can use `bind`. */}
        <TabButton onSelect={handleSelect.bind(null, TabName.State)}>
          State
        </TabButton>
      </menu>
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    </section>
  );
};

export default Examples;
