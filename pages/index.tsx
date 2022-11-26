import React from "react";
import { Container,  Main, Footer, Travel, Navbar, Banner, Stat } from "@components";

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Main title="Uttrakhand Tourism" btnTitle="" btnbg="" height={400}/>
      <Travel/>
      <Banner/>
      <Stat/>
      <Footer />
    </Container>
  );
};

export default Home;