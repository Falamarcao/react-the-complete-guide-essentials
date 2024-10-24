import { Concept } from '../../models/concept';

import './CoreConcept.css';

const CoreConcept = (props: Concept) => {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default CoreConcept;
