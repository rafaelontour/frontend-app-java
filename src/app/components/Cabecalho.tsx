import Logo from "./Logo";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho() {
    return (
        <div
            className="
                flex items-center justify-between px-7
                h-24 bg-slate-500
            "
        >
            <Logo />
            <MenuUsuario />
        </div>
    );
}