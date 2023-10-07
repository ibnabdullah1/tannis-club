import "./Tournaments.css";
const Tournaments = () => {
  return (
    <div className="px-3">
      <div className=" tournaments-bg rounded-md my-10 ">
        <div className="tournaments-overlay rounded-md min-h-[80vh] flex justify-center items-center">
          <h3 className="font-semibold text-white my-3 text-6xl uppercase Barlow-Condensed ">
            World class Tournaments
          </h3>
        </div>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  lg:grid-cols-4">
          <div className="relative">
            <img
              className="rounded-md"
              src="https://i.ibb.co/3rSKJ03/world-Events1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md"
              src="https://i.ibb.co/2j8SpqS/world-Events2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md"
              src="https://i.ibb.co/FxPxkTc/world-Events3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md"
              src="https://i.ibb.co/NybjTQz/world-Events4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md"
              src="https://i.ibb.co/DWn96jL/world-Events5.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md"
              src="https://i.ibb.co/8PdkVRT/world-Events6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md"
              src="https://i.ibb.co/2j8SpqS/world-Events2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md"
              src="https://i.ibb.co/NybjTQz/world-Events4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
