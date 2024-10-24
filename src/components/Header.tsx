const adjectives: Array<string> = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const Header = () => {
  const adjective: string = adjectives[getRandomInt(adjectives.length)];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {adjective} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
