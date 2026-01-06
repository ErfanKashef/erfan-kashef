import AboutMe from "./components/aboutme";

export default function Home() {
  return (
    <div className="container mx-auto pt-32 pb-32">
      <div className="grid grid-cols-5 grid-rows-6 gap-5">
        <AboutMe />
        <div className="col-span-2 row-span-2 col-start-4 bg-glass-bg rounded-lg p-5">
          <p>2</p>
        </div>
        <div className="col-span-3 row-span-2 col-start-3 row-start-3 bg-glass-bg rounded-lg p-5">
          <p></p>
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-3 bg-glass-bg rounded-lg p-5">
          4
        </div>
        <div className="col-span-5 row-span-2 row-start-5 bg-glass-bg rounded-lg p-5">
          5
        </div>
      </div>
    </div>
  );
}
