import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-white">WelCome</h1>
      </div>
    </main>
  );
};

export default App;
