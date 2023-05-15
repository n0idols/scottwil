import { getTech } from "@/sanity/sanity-utils";
import Glow from "./layout/Glow";

const list = [
  {
    id: 1,
    title: "HTML",
    exp: "5 years experience",
  },
  {
    id: 2,
    title: "CSS",
    exp: "5 years experience",
  },
  {
    id: 3,
    title: "JavaScript",
    exp: "5 years experience",
  },
  {
    id: 4,
    title: "React",
    exp: "4 years experience",
  },
  {
    id: 5,
    title: "Next.js",
    exp: "4 years experience",
  },
  {
    id: 6,
    title: "TailwindCSS",
    exp: "4 years experience",
  },
];
const Skills = async () => {
  return (
    <div className="px-4">
      <section className="max-w-5xl mx-auto my-24 bg-gray-800 rounded-lg px-8">
        {/* <hr className="my-10 " /> */}
        <div className="grid md:grid-cols-3 gap-5">
          {list.map((t) => (
            <div
              key={t.id}
              className="md:py-8 md:space-y-2 md:text-left text-center my-4"
            >
              <h2 className="md:text-5xl text-3xl font-bold">{t.title}</h2>
              <p className="capitalize">{t.exp}</p>
            </div>
          ))}
          <Glow />
        </div>
      </section>
    </div>
  );
};

export default Skills;
