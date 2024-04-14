import { MagnifyingGlass } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchComponent() {
    return (
        <section className="w-full h-full p-5 flex flex-col">
            <div className="relative">
                <Input placeholder="Search" className="h-14" />
                <Button size="icon" className="absolute top-[0.60rem] right-2">
                    <MagnifyingGlass size={20} />
                </Button>
            </div>
            <div className="w-full h-full flex items-center justify-center">
                <div className="border-2 border-border p-16 rounded-sm border-dashed">
                    <h1>No  results found!</h1>
                </div>
            </div>
        </section>
    )
}