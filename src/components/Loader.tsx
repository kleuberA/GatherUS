import React from "react";
import { Spinner } from "@phosphor-icons/react";

export default function Loader() {
    return (
        <div>
            <Spinner className="animate-spin animate" size={20} />
        </div>
    )
}