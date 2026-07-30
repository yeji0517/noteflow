import TodayTodoCard from "../components/home/TodayTodoCard";
import RecentMemoCard from "../components/home/RecentMemoCard";


function Home(){

    const todayTodos=[
        "UI 디자인 정리",
    "Figma 컴포넌트 만들기",
    "API 설계",
    "React 라우터 연결",
    "메모 페이지 UI",
    "Todo 페이지 UI",
    "Calendar UI",
    "Settings UI",
    "README 작성",
    ];

    const recentMemos=[
        {
            title:"프로젝트 아이디어",
            content:"사용자 경험을 개선하는 기능...",
            time:"10분 전",
            favorite:true,
        },
        {
            title:"React 공부 정리",
            content:"useState, useEffect...",
            time:"1시간 전",
            favorite:false,
        },
        {
            title:"프로젝트 아이디어",
            content:"사용자 경험을 개선하는 기능...",
            time:"10분 전",
            favorite:true,
        },
        {
            title:"React 공부 정리",
            content:"useState, useEffect...",
            time:"1시간 전",
            favorite:false,
        },
        {
            title:"프로젝트 아이디어",
            content:"사용자 경험을 개선하는 기능...",
            time:"10분 전",
            favorite:true,
        },
        {
            title:"React 공부 정리",
            content:"useState, useEffect...",
            time:"1시간 전",
            favorite:false,
        },
        {
            title:"프로젝트 아이디어",
            content:"사용자 경험을 개선하는 기능...",
            time:"10분 전",
            favorite:true,
        },
        {
            title:"React 공부 정리",
            content:"useState, useEffect...",
            time:"1시간 전",
            favorite:false,
        },
    ];

    const today=new Date();

    const formattedDate=today.toLocaleDateString("ko-KR",{
        /*year:"numeric",*/
        month:"long",
        day:"numeric",
    });

    const weekday=today.toLocaleDateString("ko-KR",{
        weekday:"long",
    });

    //UI용 더미 데이터
    const completedCount=2;
    //const totalCount=todayTodos.length;
    const progress=Math.round((completedCount/todayTodos.length)*100);

    return (

        <div className="bg-gray-50">

            <div className="mx-auto max-w-[390px] px-6 py-6">

                {/*날짜*/}
                <div>
                    <h2 className="flex items-end gap-3 text-2xl font-bold tracking-tight text-gray-900">
                        <span>{formattedDate}</span>

                        <span className="text-base font-medium text-gray-500">
                            {weekday}
                        </span>
                    </h2>

                    <p className="mt-5 text-sm text-gray-600">
                        오늘 할 일 {todayTodos.length}개 · 최근 메모 {recentMemos.length}개
                    </p>
                <section className="mt-3">
                    
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">
                                오늘 진행률 ({completedCount}/{todayTodos.length})
                            </span>

                            <span className="text-sm font-semibold text-blue-600">
                                {progress}%
                            </span>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
                            <div className="h-full rounded-full bg-blue-500" style={{width:`${progress}%`}}/>
                        </div>
                        
                   
                </section>
                    
                
                </div>
                <div className="mt-6 h-px bg-gray-200"/>

                {/*오늘 할 일*/}
                <section className="mt-5">
                    <div className="mb-4 flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                        오늘 할 일
                    </h3>

                    <span className="flex
                        h-6
                        min-w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-gray-200
                        px-2
                        text-xs
                        font-semibold
                        text-gray-700">
                        {todayTodos.length}
                    </span>

                    
                    </div>
                    <TodayTodoCard todos={todayTodos}/>
                </section>

                {/*최근 메모*/}
                <section className="mt-10">
                    <div className="mb-4 flex items-center gap-2">

                    <h3 className="text-xl font-semibold text-gray-900">
                        최근 메모
                    </h3>

                    <span className="flex
                        h-6
                        min-w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-gray-200
                        px-2
                        text-xs
                        font-semibold
                        text-gray-700">
                        {recentMemos.length}
                    </span>

                    
                    </div>

                    <div className="space-y-5">
                        {
                            recentMemos.map((memo, index)=>
                            
                                <RecentMemoCard
                                key={index}
                                {...memo}
                                />

                            )
                        }
                    </div>

                </section>

                
            </div>

            

        </div>
    );
}

export default Home;