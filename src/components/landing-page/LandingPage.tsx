import PopularPosts from "./popular-posts/PopularPosts";

function LandingPage() {
  return (
    <div className="flex flex-col h-full px-2 sm:px-12">
      <PopularPosts />
    </div>
  );
}

export default LandingPage;
