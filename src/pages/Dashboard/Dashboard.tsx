import { TopMoedas } from "./components/TopMoedas";
import { api } from "../../libs/axios";
import { useEffect, useState } from "react";
import { priceFormatter } from "../../utils/formater";

export interface Cripto {
  id: string;
  name: string;
  current_price: number;
  volume: number;
  image: string;
  symbol: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
}

export function Dashboard() {
  const [cripto, setCripto] = useState<Cripto[]>([]);

  useEffect(() => {
    async function fetchCripto() {
      try {
        const response = await api.get("/coins/markets", {
          params: {
            vs_currency: "brl",
            per_page: 20,
            order: "market_cap_desc",
            sparkline: false,
          },
        });
        setCripto(response.data);
      } catch {
        console.error("error fetching users");
      }
    }
    fetchCripto();
  }, []);

  return (
    <div className=" p-4">
      <div className="pb-6">
        <h1 className="font-bold text-xl">Visão Geral do Mercado</h1>
        <span>Acompanhe as principais criptomoedas em tempo real.</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {cripto.slice(0, 3).map((item) => (
          <div
            className="bg-zinc-900 p-4 rounded-xl flex flex-col gap-4"
            key={item.id}
          >
            <div className="flex gap-2">
              <img src={item.image} className="size-15" />
              <div className="flex flex-col">
                <strong className="text-xl">{item.name}</strong>
                <span className="font-regular">{item.symbol}</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-4xl">{priceFormatter.format(item.current_price)}</p>
              <p className={`${item.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'} font-regular text-lg`}>
                {item.price_change_24h.toFixed(2)} ({item.price_change_percentage_24h.toFixed(2)})
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <TopMoedas cripto={cripto}/>
      </div>
    </div>
  );
}
