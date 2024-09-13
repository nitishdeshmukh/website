import React from "react";

export default function Section({
    children,
    bgColor = "",
    textColor = "",
    className = "",
    ...props
}) {
    return (
        <section className={`${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </section>
    );
}
