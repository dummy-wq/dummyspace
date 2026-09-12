import RecentPosts from "../components/RecentPosts";
import Paintings from "../components/Paintings";

export default function Home() {
  return (
    <main className="max-w-3xl p-8">
      <h1 className="text-7xl font-extrabold ml-40 mb-1 text-blue-700">dummyspace</h1>
      <p className="text-lg text-grey-100 mb-20">
        Here's a bunch of cool things! My paintings, writing, maybe music and my code!
      </p>
      <RecentPosts />
      <Paintings />
    </main>
  );
}