import { EvervaultCard } from "../components/ui/evervault-card";

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="header font-bold mb-4 text-center">The Industrialists</h1>
      <p className="text-center">
        editspace is our founder and our co-founder is Bob_Plaz_Gamez
      </p>
      <div className="w-full md:w-1/2 lg:w-1/3  h-96">
        {" "}
        {/* Adjust height as needed */}
        <EvervaultCard text="editspace" className="class1 h-full" />
      </div>
      <div className="w-full md:w-1/4 lg:w-1/3 h-96">
        <EvervaultCard text="Bob_playz_gamez" className="bob h-full" />
      </div>
    </div>
  );
}
