// import { Fragment } from 'react';

import Header from './components/Header';
import Examples from './components/Examples';
import CoreConcepts from './components/CoreConcepts';

// Option 1 - Using Fragment:

// function App() {
//   return (
//     <Fragment>
//       <Header />
//       <CoreConcepts />
//       <main>
//         <Examples />
//       </main>
//     </Fragment>
//   );
// }

function App() {
  return (
    <>
      <Header />
      <CoreConcepts />
      <main>
        <Examples />
      </main>
    </>
  );
}

export default App;
