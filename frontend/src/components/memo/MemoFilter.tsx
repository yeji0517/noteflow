import {useState} from "react";

function MemoFilter(){

    const [selected, setSelected]=useState<"all"|"favorite">("all");

    return (
        <div className="mt-2 flex w-full border-b border-gray-200">

            <button 
            type="button" 
            onClick={()=>setSelected("all")}
            className={`
            relative flex h-12 flex-1 items-center justify-center text-sm font-bold transition-colors duration-200
            ${
                selected==="all"?"text-blue-600":"text-gray-500"}
            `}>
                전체
                {selected==="all"&&(
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600"/>

                )}
            </button>

            <button
            type="button"
            onClick={()=>setSelected("favorite")}
            className={`
            relative flex h-12 flex-1 items-center justify-center text-sm font-bold transition-colors duration-200
            ${
                selected==="favorite"?"text-blue-600":"text-gray-500"
            }
            `}>
                즐겨찾기
                {selected==="favorite"&&(
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600"/>
                )}
            </button>
        </div>
    );
}

export default MemoFilter;