import { ReactNode, useState } from 'react';

import Section from '../Section';
import Tabs from '../Tabs';
import TabButton from '../TabButton';

import { TabName } from '../../models/TabName';

import { EXAMPLES } from '../../data/Examples';

import './Examples.css';

const Examples = () => {
  const [selectedTab, setSelectedTab] = useState<TabName>();

  function handleSelect(tabName: TabName) {
    setSelectedTab(tabName);
  }

  let content: ReactNode = <p>Please select a topic</p>;

  if (selectedTab)
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    );

  return (
    <Section id="examples" title="Examples">
      {/* buttonsContainer={Section} */}
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTab === TabName.Components}
              onSelect={() => handleSelect(TabName.Components)}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === TabName.JSX}
              onSelect={() => handleSelect(TabName.JSX)}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === TabName.Props}
              onSelect={() => handleSelect(TabName.Props)}
            >
              Props
            </TabButton>
            {/* Alternatively we can use `bind`. */}
            <TabButton
              isSelected={selectedTab === TabName.State}
              onSelect={handleSelect.bind(null, TabName.State)}
            >
              State
            </TabButton>
          </>
        }
      >
        {content}
      </Tabs>
    </Section>
  );
};

export default Examples;
