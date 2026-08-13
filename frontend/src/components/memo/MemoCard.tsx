import { Star } from "lucide-react";

type MemoCardProps={
    title:string;
    content:string;
    time:string;
    favorite:boolean;
};

function MemoCard({
    title, content, time, favorite,
}:MemoCardProps){
    return (
        <div
        className="
        cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex justify-between">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold">
                        {title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                        {content}
                    </p>

                    <p className="mt-4 text-xs text-gray-400">
                        {time}
                    </p>

                </div>

                <Star
                size={22}
                className={
                    favorite
                    ?"fill-yellow-400 text-yellow-400"
                    :"text-gray-300"
                }
                />

            </div>
        </div>
    );
}

export default MemoCard;