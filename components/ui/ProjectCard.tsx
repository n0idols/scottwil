"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "./Icons";

const FramerImage = motion(Image);

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article
      key={project._id}
      className="w-full flex flex-col items-center justify-center bg-gray-100 rounded-3xl p-8 border shadow-2xl relative"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-gray-800" />
      <Link
        href={project.demo}
        target="_blank"
        className="cursor-pointer overflow-hidden"
      >
        <FramerImage
          src={project.mainImage}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-auto w-full rounded-lg"
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <div className="flex space-x-2">
          {project.tech.map((tecc) => (
            <span
              key={tecc._id}
              className="text-primary font-medium text-xl lg:text-lg md:text-base"
            >
              {tecc.title}
            </span>
          ))}
        </div>
        <Link
          href={project.demo}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {project.title}
          </h2>
        </Link>
        <div className="w-full flex items-center justify-between">
          <Link
            href={project.demo}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={project.code} target="_blank" className="w-8 md:w-6">
            <GithubIcon className="ok" />
          </Link>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
