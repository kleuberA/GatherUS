import Menu from "@/components/menu/Menu";
import { ToggleTheme } from "@/components/theme/toggle-theme";

export default function HomePage() {
    return (
        <div className="bg-background min-h-screen">
            <ToggleTheme />
            <Menu />
        </div>
    )
}