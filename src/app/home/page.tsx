import Menu from "@/components/menu/Menu";
import SideMenu from "@/components/menu/Side/SideMenu";

export default function HomePage() {
    return (
        <div className="bg-background min-h-screen">
            <SideMenu />
            <Menu />
        </div>
    )
}