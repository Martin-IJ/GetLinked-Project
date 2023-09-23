import React from "react";
import Buld from "../Assets/the big idea 1.png";
import Woman from "../Assets/7450159 1.png";
import ManAndWoman from "../Assets/8046554 1.png";
import ManThinking from "../Assets/cwok_casual_21 1.png";
import LensFlare from "../Assets/Purple-Lens-Flare-PNG (2).png";
import LensFlare2 from "../Assets/Purple-Lens-Flare-PNG (1).png";

const Content = () => {
  return (
    <div className="whiteLine">
      <div className="mt-20">
        <div className="w-[100%] whiteLine pb-14">
          <div className="w-[80%] m-auto lg:flex items-center lg:gap-20">
            <div className="relative w-[100%] lg:w-[50%] flex justify-center items-center">
              <img src={Buld} alt="" />
              <p className="text-center absolute font-semibold text-[24px] mt-14">
                The Big
                <br /> Idea!
              </p>
            </div>
            <div className="w-[100%] lg:w-[50%] text-center lg:text-start mt-5">
              <h3 className="font-boldFont font-semibold text-2xl">
                Introduction to getlinked{" "}
                <span className="text-purple-bright block">
                  tech Hackathon 1.0
                </span>
              </h3>
              <p className="mt-5 text-sm">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </div>
        </div>

        <div className="w-[100%] whiteLine">
          <div className="w-[80%] m-auto lg:flex flex-row-reverse items-center lg:gap-20">
            <img src={Woman} alt="" className="w-[100%] lg:w-[50%]" />
            <div className="w-[100%] lg:w-[50%] text-center lg:text-start mt-5">
              <h3 className="font-boldFont font-semibold text-3xl">
                Rules and{" "}
                <span className="text-purple-bright block text-center lg:text-start">
                  Guidelines
                </span>
              </h3>
              <p className="mt-5 text-sm">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-[100%] whiteLine pt-5 pb-24">
          <div className="w-[80%] m-auto lg:flex items-center lg:gap-20">
            <img src={ManAndWoman} alt="" className="w-[100%] lg:w-[50%]" />
            <div className="relative w-[100%] lg:w-[50%] text-center lg:text-start mt-5">
              <h3 className="font-boldFont font-semibold text-3xl">
                Judging Criteria{" "}
                <span className="text-purple-bright block text-center lg:text-start">
                  Key attributes
                </span>
              </h3>
              <p className="mt-5 text-[14px]">
                <span className="text-purple-lighter font-semibold text-[16px]">
                  Innovation and Creativity:{" "}
                </span>
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
              <p className="mt-5 text-[14px]">
                <span className="text-purple-lighter font-semibold text-[16px]">
                  Functionality:{" "}
                </span>
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </p>
              <p className="mt-5 text-[14px]">
                <span className="text-purple-lighter font-semibold text-[16px]">
                  Impact and Relevance:{" "}
                </span>
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
              <p className="mt-5 text-[14px]">
                <span className="text-purple-lighter font-semibold text-[16px]">
                  Technical Complexity:{" "}
                </span>
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
              <p className="mt-5 text-[14px]">
                <span className="text-purple-lighter font-semibold text-[16px]">
                  Adherence to Hackathon Rules:{" "}
                </span>
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
              <button className="purpleGradient text-[16px] w-[172px] h-[53px] rounded-[4px] mt-10">
                Read More
              </button>
              <img
                src={LensFlare2}
                alt=""
                className="absolute -z-10 bottom-[-19rem] -right-20 md:-right-40"
              />
            </div>
          </div>
          <img src={LensFlare} alt="" className="absolute -z-10 top-0 left-0" />
        </div>

        <div className="w-[100%] whiteLine pt-20 pb-14">
          <div className="w-[80%] m-auto lg:flex items-center lg:gap-20">
            <div className="w-[100%] lg:w-[50%] text-center lg:text-start mt-5">
              <h3 className="font-boldFont font-semibold text-3xl">
                Frequently Ask{" "}
                <span className="text-purple-bright block text-center lg:text-start">
                  Question
                </span>
              </h3>
              <p className="mt-5 text-sm">
                We got answers to the questions that you might want to ask about
                getlinked Hackathon 1.0
              </p>
              <div className="mt-10 divide-y divide-purple-bright last:border-b border-purple-bright text-start">
                <p className="text-[14px] flex justify-between py-4">
                  Can I work on a project I started before the hackathon?
                  <span className="text-purple-bright">+</span>
                </p>
                <p className="text-[14px] flex justify-between py-4">
                  What happens if I need help during the hackathon?
                  <span className="text-purple-bright">+</span>
                </p>
                <p className="text-[14px] flex justify-between py-4">
                  What happens if I don't have an idea for a project?
                  <span className="text-purple-bright">+</span>
                </p>
                <p className="text-[14px] flex justify-between py-4">
                  Can I join a team or do I have to come with one?
                  <span className="text-purple-bright">+</span>
                </p>
                <p className="text-[14px] flex justify-between py-4">
                  What happens after the hackathon ends
                  <span className="text-purple-bright">+</span>
                </p>
                <p className="text-[14px] flex justify-between py-4">
                  Can I work on a project I started before the hackathon?
                  <span className="text-purple-bright">+</span>
                </p>
              </div>
            </div>
            <img src={ManThinking} alt="" className="w-[100%] lg:w-[50%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
