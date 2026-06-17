import { priceFormatter } from "../../../utils/formater";
import type { Cripto } from "../Dashboard";

interface TopMoedasProps {
  cripto: Cripto[]
}

export function TopMoedas({cripto}: TopMoedasProps) {
  return (
    <div>
      <h2 className="font-bold text-2xl py-4">Top Moedas</h2>
      <div>
        <table className="w-full border">
          <thead>
            <tr className="border">
              <th>#</th>
              <th>Moeda</th>
              <th>Preço</th>
              <th>24h %</th>
            </tr>
          </thead>
          {cripto.map((item, index) => (
          <tbody>
            <tr>
              <td className="text-start">#{index + 1}</td>
              <td className="flex items-center justify-start gap-2">
                <img src={item.image} className="w-8" />
                <div className="flex flex-col text-start leading-4">
                  <strong className="text-md"> {item.name} </strong>
                  <span className="font-normal">{item.symbol}</span>
                </div>
              </td>
              <td>{priceFormatter.format(item.current_price)}</td>
              <td className={`${item.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'} font-regular text-md`}>{item.price_change_24h.toFixed(2)} ({item.price_change_percentage_24h.toFixed(2)})</td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
