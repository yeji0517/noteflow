import { Star } from "lucide-react";

type RecentMemoCardProps = {
    title: string;
    content: string;
    time: string;
    favorite: boolean;
};

function RecentMemoCard({
    title,
    content,
    time,
    favorite,
}: RecentMemoCardProps) {
    return (
        <div
            className="
                cursor-pointer
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-md
                transition-all
                duration-200
                hover:shadow-lg
                min-h-[132px]
            "
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">
                        {title}
                    </h4>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                        {content}
                    </p>

                    <span className="mt-4 block text-xs text-gray-400">
                        {time}
                    </span>
                </div>

                <button
                    className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        hover:bg-gray-100
                    "
                >
                    <Star
                        size={22}
                        className={
                            favorite
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                        }
                    />
                </button>
            </div>
        </div>
    );
}

export default RecentMemoCard;