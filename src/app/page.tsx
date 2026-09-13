import RecentPosts from "../components/RecentPosts";
import Paintings from "../components/Paintings";

export default function Home() {
  return (
    <main className="max-w-7xl p-8 mx-auto">
      <h1 className="text-7xl font-extrabold mb-1 text-blue-700">dummyspace</h1>
      <p className="text-lg  mb-20 text-lime-700"> Here &apos;s a bunch of cool things! My paintings, writing, maybe music and my code!
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <RecentPosts />
          <Paintings />
        </div>
        <aside className="self-start md:sticky md:top-8 w-full md:w-70">
          <a
            href="https://github.com/dummy-wq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-200 mb-4 p-2 block text-right text-cyan-800 hover:underline hover:text-blue-700 hover:bg-amber-400 transition-colors"
          >
            My GitHub ↗
          </a>

        </aside>
      </div>
    </main>
  );
}