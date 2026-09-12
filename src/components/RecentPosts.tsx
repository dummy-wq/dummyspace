import Parser from 'rss-parser';

export default async function RecentPosts() {
  const parser = new Parser();
  const feed = await parser.parseURL('https://dummymanwrites.substack.com/feed');
  const recentPosts = feed.items.slice(0, 3);

  return (
    <div className="my-12">
      <h2 className=" text-xl p-4 text-amber-100 rounded-xs font-semi-bold mb-4 bg-red-700 ">Things I've written
      </h2>
      <div className="flex flex-col gap-20">
        {recentPosts.map((post) => (
          <a 
            key={post.guid} 
            href={post.link} 
            target="_blank" 
            className="p-4 border rounded-xs bg-amber-200 hover:bg-white transition-colors"
          >
            <h3 className=" text-lg font-extralight text-purple-800 text-center">{post.title}</h3>
            <p className="text-xs text-black  text-right">
              {new Date(post.pubDate || '').toLocaleDateString()}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}