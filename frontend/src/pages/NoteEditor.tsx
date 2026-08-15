import { ChevronLeft, Check } from "lucide-react";
import EditorToolbar from "../components/memo/EditorToolbar";

function NoteEditor() {
  return (
    <div className="flex h-full flex-col bg-white">
      {/*상단 영역*/}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 px-2">
        <button
        type="button"
        aria-label="뒤로가기"
        className="
        flex h-7 w-7 item-center justify-center rounded-full text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
        >        
          <ChevronLeft size={26}/>
        </button>

        <h1 className="text-xl font-semibold text-gray-900">
          새 메모
        </h1>

        <button
        type="button"
        aria-label="저장"
        className="
        flex h-9 w-9 items-center justify-center rounded-full text-blue-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700"
        >
          <Check size={22} strokeWidth={2.5}/>
        </button>
      </header>    

      {/* 메모 작성 영역 */}
      <main className="flex-1 overflow-y-auto px-6 py-6">
        <input
        type="text"
        placeholder="제목을 입력하세요"
        className="w-full border-none bg-transparent text-lg font-semibold text-gray-900 outline-none placeholder:text-gray-300"
        />

        <div className="my-3 -ml-1 h-px w-[100%] bg-gray-200"/>

        <textarea
        placeholder="메모를 입력하세요"
        className="mt-1 min-h-[600px] w-full resize-none border-none bg-transparent text-sm leading-7 text-gray-800 outline-none placeholder:text-gray-300"
        />
      </main>
      {/* 하단 편집 툴바 */}
      <EditorToolbar/>
    </div>
    
  );
}

export default NoteEditor;