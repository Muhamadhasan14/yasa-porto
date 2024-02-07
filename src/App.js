import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Muhamad Hasan Mulyasa Ramadani",
    location: "Jakarta, ID",
    email: "muhamadhasanmulyasar@gmail.com",
    availability: "Open for Freelance",
    brand:
      "just a product manager pursuing my dream to bring lots of smiles by fulfilling users' needs and providing value to the company",
  };

  return (
    <>
      <Header />
      (_)
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
