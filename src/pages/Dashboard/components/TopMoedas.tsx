import bitcoin from "../../../assets/bitcoin.png";
import ethereum from "../../../assets/ethereum.png";

export function TopMoedas() {
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
          <tbody>
            <tr>
              <td>1</td>
              <td className="flex items-center justify-start gap-2">
                <img src={bitcoin} className="w-8" />
                <div className="flex flex-col text-start leading-4">
                  <strong className="text-md">Bitcoin</strong>
                  <span className="font-normal">BTC</span>
                </div>
              </td>
              <td>R$ 335.105,20</td>
              <td>−1.308,61 (0,39%)</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="flex items-center justify-start gap-2">
                <img src={ethereum} className="w-8" />
                <div className="flex flex-col text-start leading-4">
                  <strong className="text-md">Ethereum</strong>
                  <span className="font-normal">ETH</span>
                </div>
              </td>
              <td>R$ 9.160,73</td>
              <td>+44,99 (0,49%)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
