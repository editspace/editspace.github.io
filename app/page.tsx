import { EvervaultCard } from "../components/ui/evervault-card";


export default function Page() {
  return (
    <div className="container mx-auto p-4">
    <h1 className="header text-center font-bold ">The Industrialists</h1>
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto h-96"> {/* Adjust height as needed */}
      <EvervaultCard text="editspace" className="my-custom-class h-full" />
    </div>
  </div>
  )
  
}