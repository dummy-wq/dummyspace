import RecentPosts from "../components/RecentPosts";
import Paintings from "../components/Paintings";

export const metadata = {
  title: 'dummyspace',
  description: 'A collection of my paintings, writing, music and code.',
}

export default function Home() {
  return (
    <main className="max-w-7xl p-2 mx-auto ml-2 md:ml-2">
      <title>dummyspace</title>
      <h1 className="text-7xl font-extrabold inline-block scale-x-125 origin-left text-blue-700">dummyspace</h1>
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
            className="bg-amber-200 mb-5 block md:p-2 text-left md:text-right text-cyan-800 hover:underline hover:text-blue-700 hover:bg-amber-400 transition-colors"
          >
            My GitHub ↗
          </a>

          <a
            href="https://dummymanwrites.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-200 md:p-2 mb-5 block text-left md:text-right text-cyan-800 hover:underline hover:text-blue-700 hover:bg-amber-400 transition-colors"
          >
            My Substack↗ <p className="text-xs opacity-80">I command you to subscribe</p>
          </a>

          <a
            href="https://open.spotify.com/user/konig.zitrone?si=ec602ebff2c14d16/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-200 mb-5 md:p-2 block text-left md:text-right text-cyan-800 hover:underline hover:text-blue-700 hover:bg-amber-400 transition-colors"
          >
            My Spotify↗ <p className="text-xs opacity-80">cool playlists(some even thematically matched to my paintings)</p>
          </a>
        </aside>
      </div>
    </main>
  );
}