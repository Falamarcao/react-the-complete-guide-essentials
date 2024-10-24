import reactImg from '../../assets/react-core-concepts.png';

import './Header.css';

const adjectives: Array<string> = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const Header = () => {
  const adjective = adjectives[getRandomInt(adjectives.length)];;

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {adjective} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
