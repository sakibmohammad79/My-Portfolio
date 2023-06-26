import { FaArrowCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.postimg.cc/fRh9jkB2/pexels-jakub-novacek-924824.jpg')] bg-cover bg-center py-36 px-8 md:px-24">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
        <div className="space-y-3">
          <button className="btn text-white font-bold bg-[#4D245F]">
            Welcome To My Portfolio
          </button>
          <h2 className="font-extrabold text-6xl text-white">
            Hi, I am Sakib<br></br>Web Developer
          </h2>
          <p className="text-white font-medium">
            I am a dedicated and passionate MERN stack developer. I believe in
            working hard and never giving up. Challenges motivate me, and I
            approach each project with determination. I always strive to provide
            the best solutions possible. My goal is to become a senior developer
            and achieve success in my life.
          </p>
          <p className="flex items-center text-lg text-white font-bold pt-8 md:pt-12">
            Let's connect
            <FaArrowCircleRight class="ml-2" />
          </p>
        </div>
        <div className="flex justify-center">
          <img
            style={{ height: "460px", width: "360px", borderRadius: '180px' }}
            className="rounded-lg bg-[#4D245F] "
            src="https://i.postimg.cc/SNnXFgWH/DSC-0092-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
