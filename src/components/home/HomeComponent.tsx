import Post from "../post/Post";

interface HomeComponentProps {

}
export default function HomeComponent(props: HomeComponentProps) {
    return (
        <div className="flex h-screen items-center p-6 flex-col gap-5 overflow-y-auto pb-32">
            <div className="flex flex-col gap-5">
                <Post type={1} />
                <Post type={2} />
                <Post type={3} />
            </div>
        </div>
    )
}