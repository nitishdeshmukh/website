import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-[linear-gradient(to_right,_#004589,_#00A1F1)] to-pink-500 ",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-5 py-2 rounded-md ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
