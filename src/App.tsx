import { uniqueId } from 'lodash';

import CoreConcept from './components/CoreConcept';
import Header from './components/Header';

import { Concept } from './models/concept';
import { CORE_CONCEPTS } from './data/core_concepts';

function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
