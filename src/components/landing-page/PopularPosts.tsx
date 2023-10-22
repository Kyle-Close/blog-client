import React from "react";
import iPhoneImg from "../../assets/iphone.jpg";
import PopularPost from "./PopularPost";
import axios from "axios";

interface PopularPost {
  title: string;
  author: string;
  _id: string;
}

function PopularPosts() {
  const [popularPostsData, setPopularPostsData] = React.useState([]);

  // Hit the API to get popular posts (seperate table for this?)
  React.useEffect(() => {
    const fetchPopularPosts = async () => {
      const response = await axios.get("http://localhost:3000/popular-posts");
      return response;
    };
    const getPosts = async () => {
      const response = await fetchPopularPosts();
      const posts = response.data.posts;
      setPopularPostsData(posts);
    };

    getPosts();
  }, []);

  React.useEffect(() => {
    console.log(popularPostsData);
  }, [popularPostsData]);

  const posts = popularPostsData.map((post: PopularPost, key) => {
    return (
      <PopularPost
        key={key}
        img={iPhoneImg}
        title={post.title}
        author={post.author}
      />
    );
  });

  return (
    <div className="flex flex-col px-4 py-12">
      <h3 className="text-lg pl-2 font-semibold bg-clip-text text-transparent bg-gray-50">
        Popular Posts
      </h3>
      <div className="test grid pt-4 gap-2 grid-rows-2 grid-cols-3">
        {posts && posts}
      </div>
    </div>
  );
}

export default PopularPosts;
