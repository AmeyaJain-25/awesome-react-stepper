import Overview from "./Overview";
import Container from "../Container";
import Installation from "./Installation";
import Introduction from "./Introduction";
import QuickStart from "./QuickStart";
import Api from "./Api";
import Preview from "./Preview";

const Home = () => {
  return (
    <Container>
      <Introduction />
      <Preview />
      <Overview />
      <Installation />
      <QuickStart />
      <Api />
    </Container>
  );
};

export default Home;
