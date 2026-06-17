import * as Select from "@radix-ui/react-select";

export function Converter() {
  return (
    <div className="p-4 text-white">
      <div className="pb-6">
        <h1 className="font-bold text-xl">Converter / Simulador</h1>
        <span className="text-zinc-400">Converta entre moedas fiduciárias e criptomoedas</span>
      </div>

      <div className="flex flex-col">
        <form className="flex flex-col gap-10">
          <div>
            <label className="text-sm text-zinc-400 block mb-2">Você paga</label>
            
            <div className="grid grid-cols-2 gap-4 p-2 bg-zinc-900 rounded-xl items-start">
              
              <input 
                type="number" 
                placeholder="Digite um valor"
                className="w-full bg-zinc-800 text-white p-3 rounded-lg outline-none border border-zinc-700 focus:border-blue-500 transition-all"
              />

              <Select.Root defaultValue="br">
                <Select.Trigger className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 text-left flex justify-between items-center hover:bg-zinc-700/50 transition-all outline-none">
                  <Select.Value />
                  <span className="text-xs text-zinc-500">▼</span>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content position="popper" sideOffset={8} className="w-[var(--radix-select-trigger-width)] bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-50 overflow-hidden text-white">
                    <Select.Viewport>
                      <Select.Item value="br" className="w-full text-left p-3 hover:bg-zinc-700 transition-colors block text-sm outline-none cursor-pointer data-[state=checked]:bg-zinc-700">
                        <Select.ItemText>Brasil</Select.ItemText>
                      </Select.Item>
                      
                      <Select.Item value="fr" className="w-full text-left p-3 hover:bg-zinc-700 transition-colors block text-sm border-t border-zinc-700/50 outline-none cursor-pointer data-[state=checked]:bg-zinc-700">
                        <Select.ItemText>França</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>

            </div>
          </div>
          <div>
            <label className="text-sm text-zinc-400 block mb-2">Você Recebe</label>
            
            <div className="grid grid-cols-2 gap-4 p-2 bg-zinc-900 rounded-xl items-start">
              
              <input 
                type="number" 
                placeholder="Digite um valor"
                className="w-full bg-zinc-800 text-white p-3 rounded-lg outline-none border border-zinc-700 focus:border-blue-500 transition-all"
              />

              <Select.Root defaultValue="br">
                <Select.Trigger className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 text-left flex justify-between items-center hover:bg-zinc-700/50 transition-all outline-none">
                  <Select.Value />
                  <span className="text-xs text-zinc-500">▼</span>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content position="popper" sideOffset={8} className="w-[var(--radix-select-trigger-width)] bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-50 overflow-hidden text-white">
                    <Select.Viewport>
                      <Select.Item value="br" className="w-full text-left p-3 hover:bg-zinc-700 transition-colors block text-sm outline-none cursor-pointer data-[state=checked]:bg-zinc-700">
                        <Select.ItemText>Brasil</Select.ItemText>
                      </Select.Item>
                      
                      <Select.Item value="fr" className="w-full text-left p-3 hover:bg-zinc-700 transition-colors block text-sm border-t border-zinc-700/50 outline-none cursor-pointer data-[state=checked]:bg-zinc-700">
                        <Select.ItemText>França</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}