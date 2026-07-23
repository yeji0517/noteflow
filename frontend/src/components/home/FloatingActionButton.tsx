import { Plus } from "lucide-react";

function FloatingActionButton() {
    return (
        <button
            className="
                absolute
                right-5
                bottom-24
                z-40
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-white
                shadow-xl
                transition-all
                duration-200
                hover:scale-105
                hover:bg-blue-700
                active:scale-95
            "
        >
            <Plus size={28} />
        </button>
    );
}

export default FloatingActionButton;