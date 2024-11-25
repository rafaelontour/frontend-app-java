import Cabecalho from "./components/Cabecalho";
import CartaoTipos from "./components/CartaoTipos";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Cabecalho />

      <div className="flex flex-col flex-1 bg-blue-400 p-7">
        <CartaoTipos />
      </div>

    </div>
  );
}
