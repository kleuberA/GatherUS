import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Post from "../post/Post";

export default function ProfileComponent() {
    return (
        <section className="w-full flex flex-col gap-5 min-h-[100dvh]">
            <div className="flex flex-col gap-5 w-full">
                <div className="w-full h-[30dvh] bg-secondary relative overflow-hidden">
                    <Image src={"https://source.unsplash.com/random/1500x300"} alt={""} width={1500} height={300} className="absolute z-0" />
                    <div className="relative z-10 w-full h-full p-5 flex items-center flex-row justify-between">
                        <div className="flex flex-row gap-2 items-center">
                            <div>
                                <Avatar className="rounded-sm w-[10dvw] h-[20dvh] shadow-lg">
                                    <AvatarImage src={"https://source.unsplash.com/random/200x200"} alt={""} />
                                    <AvatarFallback className="rounded-sm w-[10dvw] h-[20dvh]">KS</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-2xl font-bold font-mono">Kleuber Silva</h1>
                                <span className="text-accent-foreground font-mono text-sm">@kleubersilva</span>
                                <div className="flex flex-row gap-10">
                                    <span className="text-xl font-bold font-mono">10.5 M Followers</span>
                                    <span className="text-xl font-bold font-mono">5 Following</span>
                                </div>
                                <span className="font-mono font-medium text-lg">125 Publications</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 w-[30dvw]">
                            <h1 className="text-xl font-bold font-mono">Bio</h1>
                            <span className="tracking-wider text-justify text-sm font-mono">My infos bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint impedit esse est, corporis maxime quas. Quam necessitatibus, quas recusandae inventore, earum nihil, eius ab quod omnis voluptatum ex officia reiciendis!</span>
                        </div>
                    </div>
                </div>
                <div className="w-[50dvw] mx-auto flex flex-col gap-5 overflow-y-auto h-[80dvh] scrollbar-hide pb-72">
                    <Post type={1} />
                    <Post type={1} />
                    <Post type={2} />
                </div>
            </div>
        </section>
    )
}