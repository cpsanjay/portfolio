import CallToAction from "./CallToAction/CallToAction";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Hero />
      <Projects />
      <CallToAction />
    </div>
  );
}

export default App;
