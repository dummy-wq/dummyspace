import Image from 'next/image';

export default function Paintings() {
  return (
    <div>
      <h2 className="bg-cyan-800 text-amber-100 text-xl p-4 font-semibold mb-4 mt-20">
        Things I&apos;ve painted
      </h2>

      <div className="grid grid-cols-9 gap-7" >

        <div className="bg-amber-200 p-4 mt-4 hover:bg-amber-400 transition-colors hover:underline col-span-2 flex flex-col items-center justify-center">
            <Image src="/paintings/untitled-1.jpg" alt="untitled-1" width={200} height={100} className="max-h-70" />
          <p className="text-center mt-auto mb-2 text-fuchsia-900">untitled-1</p>
        </div>

        <div className="bg-amber-200 p-4 mt-4 hover:bg-amber-400 transition-colors hover:underline col-span-2 flex flex-col items-center justify-center">
          <Image src="/paintings/untitled-2.jpg" alt="untitled-2" width={300} height={300} className="max-h-70 my-auto" />
          <p className="text-center mt-auto mb-2 text-fuchsia-900">untitled-2</p>
        </div>

        <div className="bg-amber-200 p-4 mt-4 hover:bg-amber-400 transition-colors hover:underline flex flex-col items-center justify-center col-span-3">
          <Image src="/paintings/untitled-3.jpg" alt="untitled-3" width={300} height={300} className="max-h-70 my-auto" />
          <p className="text-center mt-auto mb-2 text-fuchsia-900">untitled-3</p>
        </div>

        <div className="bg-amber-200 p-4 mt-4 hover:bg-amber-400 transition-colors hover:underline col-span-2 flex flex-col items-center justify-center">
          <Image src="/paintings/cum-something.jpg" alt="cum-something" width={200} height={200} className="max-h-70 my-auto" />
          <p className="text-center mt-auto mb-2 text-fuchsia-900">cum something</p>
        </div>

        <div className="bg-amber-200 p-4 mt-4 hover:bg-amber-400 transition-colors hover:underline flex flex-col items-center justify-center col-span-3">
          <Image src="/paintings/weird-matchsticks.jpg" alt="weird-matchticks" width={300} height={300} className="max-h-70 my-auto" />
          <p className="text-center mt-auto mb-2 text-fuchsia-900">weird matchsticks</p>
        </div>

        <div className="bg-amber-200 p-4 mt-4 hover:bg-amber-400 transition-colors hover:underline flex flex-col items-center justify-center col-span-3">
          <Image src="/paintings/cotton-candy.jpg" alt="cotton-candy" width={300} height={300} className="max-h-70 my-auto" />
          <p className="text-center mt-auto mb-2 text-fuchsia-900">cotton candy</p>
        </div>

        <div className="bg-amber-200 p-4 mt-4 hover:bg-amber-400 transition-colors hover:underline col-span-2 flex flex-col items-center justify-center">
          <Image src="/paintings/mulch.jpg" alt="mulch" width={200} height={200} className="max-h-70 my-auto" />
          <p className="text-center mt-auto mb-2 text-fuchsia-900">mulch</p>
        </div>

        <div className="bg-amber-200 p-4 mt-4 hover:bg-amber-400 transition-colors hover:underline col-span-2 flex flex-col items-center justify-center">
          <Image src="/paintings/mind-crack.jpg" alt="mind-crack" width={200} height={200} className="max-h-70 my-auto" />
          <p className="text-center mt-auto mb-2 text-fuchsia-900 ">mind crack</p>
        </div>
        
        <div className="bg-amber-200 p-4 mt-4 hover:bg-amber-400 transition-colors hover:underline col-span-3 flex flex-col items-center justify-center">
          <Image src="/paintings/filth.jpg" alt="filth" width={300} height={300} className="max-h-70 my-auto " />
          <p className="text-center mt-auto mb-2 text-fuchsia-900">filth</p>

        </div>
      </div>
    </div>
  );
}
