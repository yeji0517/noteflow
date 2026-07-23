import { Circle } from "lucide-react";

type TodayTodoCardProps = {
    todos: string[];
};

function TodayTodoCard({ todos }: TodayTodoCardProps) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-md
                transition-shadow
                duration-200
                hover:shadow-lg
                min-h-[140px]
            "
        >
            <div
                className="
                    max-h-40
                    overflow-y-auto                    
                "
            >
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className="
                            flex
                            items-center
                            gap-3
                            rounded-lg
                            px-2
                            py-2
                            transition-colors
                            duration-200
                            hover:bg-gray-50
                        "
                    >
                        <Circle
                            size={18}
                            strokeWidth={2}
                            className="text-gray-400"
                        />

                        <span className="text-base leading-6 text-gray-800">
                            {todo}
                        </span>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default TodayTodoCard;