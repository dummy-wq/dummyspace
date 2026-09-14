import Image from 'next/image';

export default function Paintings() {
  return (
    <div>
      <h2 className="bg-cyan-800 text-amber-100 text-xl p-4 font-semibold mb-4">
        Things I&apos;ve painted
      </h2>
      <div className="grid grid-cols-3 gap-3" >
        <div className="bg-amber-200 p-4 mt-4 hover:bg-amber-400 transition-colors hover:underline">
          <Image src="/mindcrack.png" alt="mind crack painting" width={300} height={300} className="w-full" />
          <p className="text-center mt-2 text-fuchsia-900">mind crack</p>
        </div>
        <div className="bg-amber-200 p-4 mt-4 hover:bg-amber-400 transition-colors hover:underline">
          <Image src="/cum.png" alt="cum halo painting" width={300} height={300} className="w-fit" />
          <p className="text-center mt-2 text-fuchsia-900">cum halo</p>
        </div>
      </div>
    </div>
  );
}
