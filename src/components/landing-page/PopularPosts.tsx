import iPhoneImg from "../../assets/iphone.jpg";
import PopularPost from "./PopularPost";

function PopularPosts() {
  // Hit the API to get popular posts (seperate table for this?)
  return (
    <div className="flex flex-col px-8 py-12">
      <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-500">
        Popular Posts
      </h3>
      <div className="flex pt-4">
        <PopularPost
          img={iPhoneImg}
          title="iPhone 15 Pro: First Impressions "
          author="Kyle Close"
        />
      </div>
    </div>
  );
}

export default PopularPosts;
