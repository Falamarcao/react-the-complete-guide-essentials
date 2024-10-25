import { uniqueId } from 'lodash';

import Section from '../Section';
import CoreConcept from './CoreConcept';

import { Concept } from '../../models/Concept';

import { CORE_CONCEPTS } from '../../data/CoreConcepts';

import './CoreConcept.css';


const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
        <ul>
          {CORE_CONCEPTS.map((coreConcept: Concept) => (
            <CoreConcept key={uniqueId('core-concepts-')} {...coreConcept} />
          ))}
        </ul>
    </Section>
  );
};

export default CoreConcepts;
