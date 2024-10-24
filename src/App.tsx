import { uniqueId } from 'lodash';

import CoreConcept from './components/CoreConcept';
import Header from './components/Header';
import TabButton from './components/TabButton';

import { Concept } from './models/Concept';
import { TabName } from './models/TabName';

import { CORE_CONCEPTS } from './data/CoreConcepts';

function App() {
  function handleSelect(tabName: TabName) {
    console.log(tabName);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept: Concept) => (
              <CoreConcept key={uniqueId('core-concepts-')} {...coreConcept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect(TabName.Components)}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect(TabName.JSX)}>
              JSX
            </TabButton>
            <TabButton onSelect={() => handleSelect(TabName.Props)}>
              Props
            </TabButton>
            {/* Alternatively we can use `bind`. */}
            <TabButton onSelect={handleSelect.bind(null, TabName.State)}>
              State
            </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
