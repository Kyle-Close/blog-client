import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import portait1 from "../../../assets/portrait1.jpg";

function QuoteSection() {
  return (
    <div className="bg-zinc-800 flex justify-center">
      <div className="w-full">
        <Carousel
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
        >
          <div className="flex flex-col items-center py-8">
            <div className="basis-2/5 max-w-[40%] border-2 rounded-md shadow-sm shadow-white">
              <img className="" src={portait1} />
            </div>
            <div className="flex basis-1/2 grow bg-red-200"></div>
          </div>
          <div>
            <img src={portait1} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={portait1} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default QuoteSection;
