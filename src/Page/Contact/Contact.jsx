import Slide from 'react-reveal/Slide';
const Contact = () => {
  return (
    
    <div className="bg-[#041D34]">
      <div className="px-6 md:px-24 pt-24 md:pt-28 pb-24">
        <div className="text-center">
          <h3 className="text-white font-bold text-2xl uppercase">
            contact me
          </h3>
          <h3 className="text-secondary font-bold text-3xl uppercase">
            without hesitation
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 pt-8">
          <Slide left>
          <div>
            <img
              className="rounded-lg shadow-lg mt-5"
              style={{ height: "430px", width: "470px" }}
              src="https://i.postimg.cc/YSsWmkgN/2489526.jpg"
              alt=""
            />
          </div>
          </Slide>
          <Slide right>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white font-bold uppercase">
                    Your name*
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white font-bold uppercase">
                    Your Email*
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white font-bold uppercase">
                  Subject*
                </span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text uppercase text-white font-bold">
                  Your Message*
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Message"
              ></textarea>
            </div>
            <input
              className="btn btn-secondary text-white w-full font-bold"
              type="submit"
              value="send message"
            />
          </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Contact;
