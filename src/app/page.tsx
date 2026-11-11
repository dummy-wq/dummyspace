import RecentPosts from "../components/RecentPosts";
import Paintings from "../components/Paintings";

export default function Home() {
  return (
    <main className="max-w-7xl p-5 mx-auto">
      <h1 className="text-7xl font-extrabold mb-1 inline-block scale-x-125 origin-left text-blue-700">dummyspace</h1>
      <p className="text-md mt-2 mb-15 text-black-700"> Here&apos;s a bunch of cool things! My paintings, writing, maybe music and my code!
      </p>
      <div className="flex flex-col md:flex-row gap-28">
        <div className="flex-2">
          <RecentPosts />
          <Paintings />
        </div>
        <aside className="self-start md:sticky md:top-5 w-full md:w-60 ">
          <a
            href="https://github.com/dummy-wq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-200 mb-5 block p-2 ml-2 md:ml-2 text-left md:text-right text-cyan-800 hover:underline hover:text-blue-700 hover:bg-amber-400 transition-colors"
          >
            My GitHub ↗
          </a>

          <a
            href="https://dummymanwrites.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-200 p-2 mb-5 ml-2 md:ml-2 block text-left md:text-right text-cyan-800 hover:underline hover:text-blue-700 hover:bg-amber-400 transition-colors"
          >
            My Substack(go on and subscribe!) ↗
          </a>

          <a
            href="https://open.spotify.com/user/konig.zitrone?si=ec602ebff2c14d16/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-200 mb-5 ml-2 md:ml-2 p-2 block text-left md:text-right text-cyan-800 hover:underline hover:text-blue-700 hover:bg-amber-400 transition-colors"
          >
            My Spotify↗

          </a>
        </aside>
      </div>
    </main>
  );
}