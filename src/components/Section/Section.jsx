import React from "react";

export default function Section({
    children,
    bgColor = "",
    textColor = "",
    className = "",
    ...props
}) {
    return (
        <section className={`h-screen flex justify-center items-center ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </section>
    );
}
