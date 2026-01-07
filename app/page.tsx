import AboutMe from "./components/aboutme";
import Friends from "./components/freinds";
import Media from "./components/media";

export default function Home() {
  return (
    <div className="container mx-auto pt-32 pb-32 px-5">
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-7 gap-5">
        <AboutMe />
        <Friends />
        <div className="md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-3 bg-glass-bg rounded-lg p-5">
          <p>proche</p>
        </div>
        <Media />
        <div className="col-span-1 md:col-span-3 md:row-span-2 md:row-start-5 bg-glass-bg rounded-lg p-5">
          skils
        </div>
        <div className="col-span-1 md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-5 bg-glass-bg rounded-lg p-5">
          education
        </div>
      </div>
    </div>
  );
}
