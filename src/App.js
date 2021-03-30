import Contact from "./components/Contact";

const name = "Okan";
const avatar = "https://avatars.githubusercontent.com/u/69849516?s=400&v=4";
const online = true;
const App = () => {
  return <Contact name={name} avatar={avatar} online={online}></Contact>;
};

export default App;
