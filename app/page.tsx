import { EvervaultCard } from "../components/ui/evervault-card";

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="header font-bold mb-4 text-center">The Industrialists</h1>
      <p className="text-center">
        editspace is our founder and our co-founder is Bob_Plaz_Gamez
      </p>
      
      <a href=" https://discord.gg/mEpm8FqPTk" className="text-sky-400 hover:text-sky-600">Discord Server</a> 
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="w-full md:w-1/2 lg:w-1/3  h-96">
          <EvervaultCard text="editspace" className="class1 h-full" />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3  h-96">
          <EvervaultCard text="Bob_playz_gamez" className="class1 h-full" />
        </div>
      </div>
    </div>
  );
}
