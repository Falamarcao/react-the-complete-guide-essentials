import { uniqueId } from 'lodash';

import CoreConcept from './CoreConcept';

import { Concept } from '../../models/Concept';

import { CORE_CONCEPTS } from '../../data/CoreConcepts';

import './CoreConcept.css';

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((coreConcept: Concept) => (
          <CoreConcept key={uniqueId('core-concepts-')} {...coreConcept} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
