import ProgressBar from "@ramonak/react-progress-bar";
import Slide from "react-reveal/Slide";

const Skill = () => {
  return (
    <div className="bg-[#041D34] pb-24">
      <div className="px-6 md:px-24 pt-24 md:pt-28 pb-8">
        <div className="text-center">
          <h3 className="text-white font-bold text-2xl uppercase">
            Why Choose Me
          </h3>
          <h3 className="text-secondary font-bold text-3xl uppercase">
            My Experience Area
          </h3>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 px-6 md:px-16 pb-8 md:pb-0 text-white font-bold">
        <Slide left>
          <div className="space-y-6">
            <div>
              <h2>HTML5</h2>
              <ProgressBar className="" completed={90} maxCompleted={100} />
            </div>
            <div>
              <h2>CSS3</h2>
              <ProgressBar completed={80} maxCompleted={100} />
            </div>
            <div>
              <h2>TAILWIND</h2>
              <ProgressBar completed={70} maxCompleted={100} />
            </div>
            <div>
              <h2>JAVASCRIPT</h2>
              <ProgressBar completed={80} maxCompleted={100} />
            </div>
            <div>
              <h2>TYPESCRIPT</h2>
              <ProgressBar completed={70} maxCompleted={100} />
            </div>
            <div>
              <h2>REACT JS</h2>
              <ProgressBar completed={70} maxCompleted={100} />
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className="space-y-6">
            <div>
              <h2>NEXT JS</h2>
              <ProgressBar completed={70} maxCompleted={100} />
            </div>
            <div>
              <h2>EXPRESS JS</h2>
              <ProgressBar completed={60} maxCompleted={100} />
            </div>
            <div>
              <h2>POSTGRESQL</h2>
              <ProgressBar completed={70} maxCompleted={100} />
            </div>
            <div>
              <h2>MONGODB</h2>
              <ProgressBar completed={80} maxCompleted={100} />
            </div>
            <div>
              <h2>PRISMA</h2>
              <ProgressBar completed={80} maxCompleted={100} />
            </div>
            <div>
              <h2>MONGOOSE</h2>
              <ProgressBar completed={80} maxCompleted={100} />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Skill;
