export default function Paintings(){
    return (
        <div>
            <h2 className="bg-cyan-800 text-amber-100 text-xl p-4 rounded-xs font-semi-bold mb-4">Things I've painted</h2>
            <div className="grid grid-cols-3 gap-3">
            <div className="bg-amber-200 p-4 rounded-xs mt-4">
                <img src ="mindcrack.png" className="w-full" />
                <p className="text-center mt-2 text-fuchsia-900">mind crack</p>
            </div>
            <div className="bg-amber-200 p-4 rounded-xs mt-5">
                <img src ="cum.png" className=" w-fit" />
                <p className="text-center mt-2 text-fuchsia-900">cum halo</p>
            </div>
            </div>
        </div>
        
    );
}