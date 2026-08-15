import {Bold, Italic, Underline, List, ListOrdered, Link, Image,} from "lucide-react";

function EditorToolbar(){
    return (
        <div className="flex
                h-12
                w-full
                shrink-0
                border-t
                border-gray-200
                bg-white">
            <button type="button" aria-label="굵게" className="flex flex-1 items-center justify-center rounded-lg text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900">
                <Bold size={20}/>
            </button>

            <button type="button" aria-label="기울임" className="flex flex-1 items-center justify-center rounded-lg text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900">
                <Italic size={20}/>
            </button>

            <button type="button" aria-label="밑줄" className="flex flex-1 items-center justify-center rounded-lg text-gray-600 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900">
                <Underline size={20}/>
            </button>

            <button type="button" aria-label="글머리 기호" className="flex flex-1 items-center justify-center rounded-lg text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900">
                <List size={20}/>
            </button>

            <button type="button" aria-label="번호 목록" className="flex flex-1 items-center justify-center rounded-lg text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900">
                <ListOrdered size={20}/>
            </button>

            <button type="button" aria-label="링크" className="flex flex-1 items-center justify-center rounded-lg text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900">
                <Link size={20}/>
            </button>

            <button type="button" aria-label="이미지 첨부" className="flex flex-1 items-center justify-center rounded-lg text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900">
                <Image size={20}/>
            </button>

        </div>
    );
}

export default EditorToolbar;