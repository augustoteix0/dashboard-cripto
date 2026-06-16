import bitcoin from "../../assets/bitcoin.png";
import ethereum from "../../assets/ethereum.png";
import solana from "../../assets/solana.png";
import { TopMoedas } from "./components/TopMoedas";

export function Dashboard() {
  return (
    <div className="p-4">
      <div className="pb-6">
        <h1 className="font-bold text-xl">Visão Geral do Mercado</h1>
        <span>Acompanhe as principais criptomoedas em tempo real.</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-zinc-900 p-4 rounded-xl flex flex-col gap-4">
          <div className="flex gap-2">
            <img src={bitcoin} className="size-15" />
            <div className="flex flex-col">
              <strong className="text-xl">Bitcoin</strong>
              <span className="font-regular">BTC</span>
            </div>
          </div>
          <div>
            <p className="font-bold text-4xl">R$ 335.271,54</p>
            <p className="text-red font-regular text-lg">−1.308,61 (0,39%)</p>
          </div>
        </div>
        <div className="bg-zinc-900 p-4 rounded-xl flex flex-col gap-4">
          <div className="flex gap-2">
            <img src={ethereum} className="size-15" />
            <div className="flex flex-col">
              <strong className="text-xl">Ethereum</strong>
              <span className="font-regular">ETH</span>
            </div>
          </div>
          <div>
            <p className="font-bold text-4xl">R$ 9.149,81</p>
            <p className="text-green font-regular text-lg">+34,07 (0,37%)</p>
          </div>
        </div>
        <div className="bg-zinc-900 p-4 rounded-xl flex flex-col gap-4">
          <div className="flex gap-2">
            <img src={solana} className="size-15" />
            <div className="flex flex-col">
              <strong className="text-xl">Solana</strong>
              <span className="font-regular">SOL</span>
            </div>
          </div>
          <div>
            <p className="font-bold text-4xl">R$ 376,45</p>
            <p className="text-green font-regular text-lg">+0,91 (0,24%)</p>
          </div>
        </div>
      </div>
      <div>
        <TopMoedas/>
      </div>
    </div>
  );
}
