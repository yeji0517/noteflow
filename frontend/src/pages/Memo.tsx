import MemoCard from "../components/memo/MemoCard";
import SearchBar from "../components/memo/SearchBar";
import MemoFilter from "../components/memo/MemoFilter";

function Memo() {
  const memos=[
    {
      title:"프로젝트 아이디어",
      content:"사용자 경험을 개선하는 기능...사용자 경험을 개선하는 기능...",
      time:"10분 전",
      favorite:true,
    },
    {
      title: "React 공부",
      content: "useState, useEffect...",
      time: "1시간 전",
      favorite: false,
    },
    {
      title: "SSAFY 회고",
      content: "프로젝트 진행 내용 정리",
      time: "어제",
      favorite: true,
    },
  ];

  return(
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[390px] px-6 py-6">

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          메모
        </h2>

        

        <SearchBar/>

        <MemoFilter/>

        <div className="mt-5 space-y-4">
          {memos.map((memo,index)=>(
            <MemoCard
            key={index}
            {...memo}
            />
          ))}
        </div>

      </div>
    </div>
  );

}

export default Memo;