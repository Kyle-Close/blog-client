import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import portait1 from "../../../assets/portrait1.jpg";
import quoteIcon from "../../../assets/quoteIcon.svg";

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
          <div className="flex flex-col items-center py-8 gap-8">
            <div className="basis-2/5 max-w-[40%] border-2 rounded-md shadow-sm shadow-white">
              <img src={portait1} />
            </div>
            <div className="p-4 mb-4 text-start flex flex-col items-start gap-4 bg-slate-900 w-64 rounded-lg text-sm">
              <div className="w-10">
                <img src={quoteIcon} />
              </div>
              <p>
                Our people hold the keys to their own future. Pando helps
                empower people to understand where they’re at and how to move
                forward in their career.
              </p>
              <div className="flex flex-col items-start text-xs">
                <p className="font-medium">Monica Matison</p>
                <p>Vice President of People, Shipwell</p>
              </div>
            </div>
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
