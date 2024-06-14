import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex">
     <div className="bg-gray-800 p-4 space-y-2 overflow-y-scroll">
     {[...Array(40)].map((item)=>(
      <div className="h-12 w-12 flex bg-gray-300 hover:bg-blue-500 transition-all duration-200 items-center justify-center rounded-3xl">
       <Image className="w-12" src="/assets/discord-svgrepo-com.svg" width={20} height={20} alt="discord" />
    </div>
     ))}
    </div>

     <div className="bg-gray-700 w-60 flex flex-col">
      
      <div className="px-3 flex items-center h-12 shadow-md mb-2">Tailwindcss</div>
     
      <div className="p-3 flex-1 space-y-2 overflow-y-scroll">
      {[...Array(40)].map((_,i)=>(
         <p key={i}> {i} Channel</p>
      ))}
      </div>

      </div>

     <div className="bg-gray-600 flex flex-1 flex-col">

      <div className="px-2 h-12 shadow-md flex items-center mb-3">
        General
      </div>
      
       <div className="flex-1 flex-col p-3 bg-gray-950 text-white space-y-3 overflow-y-scroll">
       {[...Array(40)].map((_,i)=>(
       <p>Message {i} You should never use something like leading relaxed with a big font size, it goes against all typography best practices. Line height should decrease as font size gets bigger. </p>
      ))}
       </div>

     </div>
    </main>
  );
}


