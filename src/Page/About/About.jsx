import { Rotate } from "react-reveal";
const About = () => {
  return (
    <div className="bg-[#052646]">
      <div className="px-6 md:px-24 pt-24 md:pt-40 pb-24">
        <div className="grid grid-row-r md:grid-cols-2 gap-12 justify-center items-center">
          <Rotate top-left>
          <div className="md:pl-16">
            <img
              className="bg-[#1D3246] rounded-xl shadow-lg"
              src="https://i.postimg.cc/5NcpbBbz/DSC-0047-removebg-preview.png"
              alt=""
            />
          </div>
          </Rotate>
          <Rotate top right>
          <div className="space-y-1 md:space-y-3">
            <button className="btn btn-secondary uppercase text-lg font-bold">
              About me
            </button>
            <h3 className="text-3xl md:text-5xl text-white font-extrabold">
              I AM AVAILABLE FOR
            </h3>
            <h3 className="text-3xl md:text-5xl text-secondary font-extrabold">
              WEB DEVELOPMENT
            </h3>
            <h3 className="text-3xl md:text-5xl text-white font-extrabold">
              PROJECTS
            </h3>
            <p className="text-white font-medium pt-2 md:pt-3 pb-2">
              My name is Md. Sakib, I am 21 years old. I am a dedicated and passionate MERN stack developer. I am from Chattogram. Currently, I am studying for a bachelor's degree in computer science. I am always try to explore new technologies. I believe in working hard and never giving up. Challenges  motivate me, and I approach each project with determination. I always strive to provide the best solutions possible. My goal is to become a senior developer and achieve success in my life. Last one year I consistently lear MERN Stack development. Now I am seeking an opportunity to start my professional development career.
            </p>

            <div className="text-center md:text-left pt-2">
              <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                  <div className="stat-title">Project Done</div>
                  <div className="stat-value text-secondary">30+</div>
                  <div className="stat-desc">January - July</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Users</div>
                  <div className="stat-value text-secondary">200</div>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Registers</div>
                  <div className="stat-value text-secondary">100</div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
            </div>
          </div>
          </Rotate>
        </div>
      </div>
    </div>
  );
};

export default About;
