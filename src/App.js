import "./App.css";
import ps from "../src/images/PS.PNG";
import BEE from "../src/images/BEE.PNG";
import { TypeAnimation } from "react-type-animation";
import cover from "../src/images/cover.png"
import profile from "../src/images/DP.png"
import jchag2 from "../src/images/jchag2.PNG"
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineBook,
  AiOutlineArrowDown,
  AiOutlineBars,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import resume from "../src/RESUME.pdf";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <>
        <>
          <div id="#">
            <nav className="  flex flex-wrap justify-center  h-auto w-auto md:w-screen fixed  border-b px-0 border-white border-opacity-20 backdrop-blur md:px-44  ">
              <div className="container  flex flex-wrap items-center justify-between py-4 w-screen ">
                <div className="w-full  flex justify-between md:w-auto md:static md:block md:justify-start">
                  <h1 className="pt-3 text-3xl md:text-5xl text-green-400 font-black ">
                    BUENO.
                  </h1>
                  <button
                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <i className="fas fa-bars">
                      <AiOutlineBars />
                    </i>
                  </button>
                </div>
                <div
                  className={
                    "md:flex flex-grow flex-col md:flex-row items-start md:items-end justify-enld  pr-8 md:pr-0" +
                    (navbarOpen ? " flex" : " hidden")
                  }
                  id="example-navbar-danger"
                >
                  <div className=" relative flex flex-grow-2 flex-col md:flex-row justify-center align-middle pt-6 gap-7">
                    <h1 className="text-l  text-white font-bold hover:border-b-4 border-green-300">
                      <a href="#">01. HOME</a>
                    </h1>
                    <h1 className="text-l  text-white font-bold hover:border-b-4 border-green-300">
                      <a href="#aboutMe">02. ABOUT</a>
                    </h1>
                    <h1 className="text-l  text-white font-bold hover:border-b-4 border-green-300">
                      <a href="#mySkills">03. SKILLS </a>
                    </h1>

                    <h1 className="text-l  text-white font-bold hover:border-b-4 border-green-300">
                      <a href="#myResume">04. RESUME</a>
                    </h1>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="bodyContainer">
            <div className="w-screen h-screen  bg-gray-800   flex justify-between items-center pt-40 px-20 flex-col md:h-screen border-b  border-white border-opacity-20">
              <div className="flex flex-col justify-center animate-entrance items-center">
                <div className=" w-40 h-40 rounded-full border-b border-4 border-green-400  bg-white mt-0 md:mt-20">
                  <img
                    src={profile}
                    alt="profile"
                    className="h-full w-full rounded-full "
                  />
                </div>
                <span className="text-white text-2xl md:text-4xl flex flex-col md:flex-row gap-2 font-black">
                  Hi, I am
                  <TypeAnimation
                    sequence={[
                      " Accelle Bueno",
                      1000,
                      " System Administrator",
                      1000,
                    ]}
                    wrapper="h2"
                    repeat={Infinity}
                    style={{ color: "#00FA9A" }}
                  />
                </span>
                <span className="text-white opacity-80 text-start md:text-center mt-2  text-sm md:text-lg ">
                Experienced IT professional with a proven track record in managing and optimizing complex IT infrastructures. Adept at system administration, network maintenance, and ensuring seamless operations. Strong problem-solving skills, coupled with the ability to implement innovative solutions for enhanced efficiency.
                </span>
                <div className="flex flex-row mt-1 md:mt-10 gap-4  ">
                  <a
                    href="https://www.facebook.com/buenoaxl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillFacebook
                      size={42}
                      style={{
                        border: "1px solid",
                        color: "white",
                        opacity: "0.5",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/accelle-bueno-22a542216/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin
                      size={42}
                      style={{
                        border: "1px solid",
                        color: "white",
                        opacity: "0.5",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                  <a
                    href="https://github.com/Axl0124"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub
                      size={42}
                      style={{
                        border: "1px solid",
                        color: "white",
                        opacity: "0.5",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className="mb-20">
                <a href="#aboutMe">
                  <button className="md:mt-24 mt-2 text-white opacity-80 flex flex-row gap-1 text-xs animate-bounce">
                    <AiOutlineArrowDown className="mt-1" /> SCROLL DOWN
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>
        <div id="aboutMe">
          <div className="w-full bg-gray-800 py-20 flex justify-start items-center  flex-col border-b  border-white border-opacity-20 ">
            <div className="flex flex-col justify-center align-middle  ">
              <span className="text-white font-black text-4xl ">ABOUT ME</span>
              <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-white bg-opacity-20 ml-8 mt-8 ">
                <span class="absolute left-0 top-0 inline-block h-full w-1.5 animate-left-to-right rounded-full bg-green-400" />
              </span>
            </div>
            <div className="flex flex-row justify-center align-middle -mt-24">
              <span className="opacity-5 text-white flex font-black text-8xl md:text-9xl  w-screen md:w-auto justify-center ">
                ABOUT
              </span>
            </div>
            <div className=" justify-start gap-6 mt-10 flex flex-col md:flex-row">
              <div className="md:h-96 md:w-96 h-72 w-72 bg-white flex ">
                <img src={cover} alt="cover" className=" w-full h-full p-5" />
              </div>

              <div className="h-96 w-auto text-white">
                <div className="flex flex-col gap-2 mt-10">
                  <div className="flex flex-row gap-3 items-center font-bold text-2xl">
                    <span>Hi, I am </span>
                    <span className="text-green-300">Accelle Bueno</span>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <span className="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      First Name
                    </span>
                    <span className="opacity-80"> : Accelle</span>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <span class="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      Last Name
                    </span>
                    <span className="opacity-80">: Bueno</span>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <span class="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      Age
                    </span>
                    <span className="opacity-80"> : 25 years</span>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <span class="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      Nationality
                    </span>
                    <span className="opacity-80"> : Filipino</span>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <span class="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      Languages
                    </span>
                    <span className="opacity-80">: English</span>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <span class="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      Address
                    </span>
                    <span className="opacity-80">
                      : Bacoor City, Cavite Philippines
                    </span>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <span class="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      Freelance
                    </span>
                    <span className="opacity-80">: Available</span>
                  </div>
                  <div className="mt-4">
                    <button className="text-black bg-green-300 px-8 py-4 rounded-md text-xs font-semibold animate-bounce ">
                      <a
                        href={resume}
                        download="BUENO_ACCELLE_CV"
                        target="_blank"
                        rel="noreferrer"
                      >
                        DOWNLOAD RESUME
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <div id="mySkills">
        <div className="w-full   bg-gray-800  flex justify-start items-center flex-col   md:h-screen border-b  border-white border-opacity-20 py-20">
          <div className="flex flex-col justify-center align-middle ">
            <span className="text-white font-black text-4xl ">MY SKILLS</span>
            <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-white bg-opacity-20 ml-8 mt-8 ">
              <span class="absolute left-0 top-0 inline-block h-full w-1.5 animate-left-to-right rounded-full bg-green-400" />
            </span>
          </div>
          <div className="flex flex-row justify-center align-middle -mt-24">
            <span className="opacity-5 text-white flex font-black text-9xl w-screen md:w-auto justify-center">
              SKILLS
            </span>
          </div>
          <div className="flex flex-col justify-start align-middle gap-5 mt-10">
            <div className="justify-center items-center gap-5 flex flex-col md:flex-row">
              <div className="h-60 w-60 bg-white bg-opacity-5 ">
                <div className="flex flex-col justify-center items-center pt-5  ">
                  <CircularProgressbar
                    value={55}
                    text={`${55}%`}
                    className="px-10 pb-2"
                    styles={buildStyles({
                      pathColor: "#00FA9A",
                      trailColor: "#808080",
                      textColor: "white",
                    })}
                  />
                  <text className="text-white font-bold text-lg">
                    Back-end Development
                  </text>
                </div>
              </div>
              <div className="flex  justify-center items-center">
                <div className="h-60 w-60 bg-white bg-opacity-5 ">
                  <div className="flex flex-col justify-center items-center pt-5  ">
                    <CircularProgressbar
                      value={65}
                      text={`${65}%`}
                      className="px-10 pb-2"
                      styles={buildStyles({
                        pathColor: "#00FA9A",
                        trailColor: "#808080",
                        textColor: "white",
                      })}
                    />
                    <text className="text-white font-bold text-lg">
                      Front-end Development
                    </text>
                  </div>
                </div>
              </div>
              <div className="flex  justify-center items-center">
                <div className="h-60 w-60 bg-white bg-opacity-5 ">
                  <div className="flex flex-col justify-center items-center pt-5   ">
                    <CircularProgressbar
                      value={70}
                      text={`${70}%`}
                      className="px-10 pb-2"
                      styles={buildStyles({
                        pathColor: "#00FA9A",
                        trailColor: "#808080",
                        textColor: "white",
                      })}
                    />
                    <text className="text-white font-bold text-lg">
                      Network Configuration
                    </text>
                  </div>
                </div>
              </div>
              <div className="flex  justify-center items-center">
                <div className="h-60 w-60 bg-white bg-opacity-5 ">
                  <div className="flex flex-col justify-center items-center pt-5  ">
                    <CircularProgressbar
                      value={70}
                      text={`${70}%`}
                      className="px-10 pb-2"
                      styles={buildStyles({
                        pathColor: "#00FA9A",
                        trailColor: "#808080",
                        textColor: "white",
                      })}
                    />
                    <text className="text-white font-bold text-lg">
                      Other Skills
                    </text>
                  </div>
                </div>
              </div>
            </div>
            <div class=" gap-4 py-4 px-4 grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-start">
                <span className="text-white font-semibold text-lg">
                  Java -
                  <span className="text-green-300 h-4 w-full"> (50%)</span>
                </span>
                <ProgressBar
                  completed="50"
                  bgColor="#00FA9A"
                  className="pt-3 h-4 w-full"
                  labelColor="black"
                  animateOnRender
                />
              </div>
              <div className="flex flex-col justify-start">
                <span className="text-white font-semibold text-lg">
                  Javascript, HTML & CSS-
                  <span className="text-green-300 h-4 w-full"> (50%)</span>
                </span>
                <ProgressBar
                  completed="50"
                  bgColor="#00FA9A"
                  className="pt-3 h-4 w-full"
                  labelColor="black"
                  animateOnRender
                />
              </div>
              <div className="flex flex-col justify-start pt-5">
                <span className="text-white font-semibold text-lg ">
                  IT Infrastracture -
                  <span className="text-green-300 h-4 w-full"> (65%)</span>
                </span>
                <ProgressBar
                  completed="65"
                  bgColor="#00FA9A"
                  className="pt-3 h-4 w-full"
                  labelColor="black"
                  animateOnRender
                />
              </div>
              <div className="flex flex-col justify-start pt-5">
                <span className="text-white font-semibold text-lg">
                  Server Management -
                  <span className="text-green-300 h-4 w-full"> (70%)</span>
                </span>
                <ProgressBar
                  completed="70"
                  bgColor="#00FA9A"
                  className="pt-3 h-4 w-full"
                  labelColor="black"
                  animateOnRender
                />
              </div>
              <div className="flex flex-col justify-start pt-5">
                <span className="text-white font-semibold text-lg">
                  Cyber Security -
                  <span className="text-green-300 h-4 w-full"> (70%)</span>
                </span>
                <ProgressBar
                  completed="70"
                  bgColor="#00FA9A"
                  className="pt-3 h-4 w-full"
                  labelColor="black"
                  animateOnRender
                />
              </div>
              <div className="flex flex-col justify-start pt-5 ">
                <span className="text-white font-semibold text-lg">
                  CISCO -
                  <span className="text-green-300 h-4 w-full"> (60%)</span>
                </span>
                <ProgressBar
                  completed="60"
                  bgColor="#00FA9A"
                  className="pt-3 h-4 w-full"
                  labelColor="black"
                  animateOnRender
                />
              </div>
            </div>
          </div>
        </div>

        <div id="myResume">
          <div className="w-full   bg-gray-800  flex justify-start items-center flex-col   md:h-screen border-b  border-white border-opacity-20 py-20">
            <div className="flex flex-col justify-center align-middle ">
              <span className="text-white font-black text-4xl ">MY RESUME</span>
              <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-white bg-opacity-20 ml-8 mt-8 ">
                <span class="absolute left-0 top-0 inline-block h-full w-1.5 animate-left-to-right rounded-full bg-green-400" />
              </span>
            </div>
            <div className="flex flex-row justify-center align-middle -mt-24">
              <span className="opacity-5 text-white flex font-black text-8xl md:text-9xl w-screen md:w-auto justify-center">
                RESUME
              </span>
            </div>

            <div className="w-full gap-4 py-4 px-10 grid grid-cols-1 md:grid-cols-2 md:px-52 ">
              <div className="flex flex-col justify-start items-start pl-0 md:items-end md:pl-20">
                <span className="text-white font-semibold text-2xl flex flex-row  gap-2">
                  <AiOutlineBook size={28} style={{ color: "#00FA9A" }} />
                  Educational Qualification
                </span>
                <div className="flex flex-row justify-center align-middle gap-5 pt-5">
                  <div className="h-36 w-full timeline-right  relative border-r-0 border-b-0 md:border-b-4 border-white border-opacity-20 pl-8 flex flex-col md:border-r-4">
                    <span className="text-green-300 font-semibold text-lg">
                      College
                    </span>
                    <span className="text-white font-semibold pr-28 mr-2">
                      Cavite State University - Bacoor Campus
                    </span>
                    <span className="text-white text-opacity-50">
                      2015-2019
                    </span>
                    <span className="py-2 pr-2 text-white text-opacity-50 mr-20 ">
                      BSIT <br />
                    </span>
                  </div>
                </div>

                <div className="flex flex-row justify-center align-middle gap-5 ">
                  <div className="md:h-36 w-full timeline-right relative border-r-0 border-b-0 md:border-b-4 border-white border-opacity-20 pl-8 flex flex-col pt-5 md:border-r-4">
                    <span className="text-green-300 font-semibold text-lg">
                      High School
                    </span>
                    <span className="text-white font-semibold pr-32 mr-6">
                      Eastern Bacoor National High School
                    </span>
                    <span className="text-white text-opacity-50">
                      2011-2015
                    </span>

                  </div>
                </div>
                <div className="flex flex-row justify-center align-middle gap-5 ">
                <div className="md:h-36 w-full timeline-right relative border-r-0 border-b-0 md:border-b-4 border-white border-opacity-20 pl-8 flex flex-col pt-5 md:border-r-4">
                <span className="text-green-300 font-semibold text-lg">
                      Elementary
                    </span>
                    <span className="text-white font-semibold pr-10">
                    Eastern Bacoor National High School - Bacoor Cavite
                    </span>
                    <span className="text-white text-opacity-50">
                      2005 - 2010
                    </span>
           
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start pl-0 md:pl-20 ">
                <span className="text-white font-semibold text-2xl flex flex-row  gap-2">
                  <MdWorkOutline size={28} style={{ color: "#00FA9A" }} />
                  Work Experience
                </span>
                <div className="flex flex-row justify-start align-middle gap-5 pt-5 ">
                  <div className="h-36 w-full timeline-right relative border-r-0 border-b-0 md:border-b-4 border-white border-opacity-20 pl-8 flex flex-col md:border-l-4">
                    <span className="text-green-300 font-semibold text-lg  ">
                      System Administrator
                    </span>
                    <span className="text-white font-semibold">
                      Power Source OEG Services
                    </span>
                    <span className="text-white text-opacity-50">
                      08/2022 - Present
                    </span>
                    <span className="py-2 pr-56 mr-8 text-white text-opacity-50  ">
                      Makati, City
                    </span>
                  </div>
                </div>

                <div className="flex flex-row justify-center align-middle gap-5 ">
                  <div className="h-36  w-full timeline-right relative border-r-0 border-b-0 md:border-b-4 border-white border-opacity-20 pl-8 flex flex-col md:border-l-4">
                    <span className="text-green-300 font-semibold text-lg ">
                      Senior IT Support Specialist
                    </span>
                    <span className="text-white font-semibold">
                      Assurant BPO Solutions, Inc.
                    </span>
                    <span className="text-white text-opacity-50">
                      01/2020 - 08/2022
                    </span>
                    <span className="py-2 pr-64 mr-5  text-white text-opacity-50  ">
                      MOA Pasay City
                    </span>
                  </div>
                </div>
                <div className="flex flex-row justify-center align-middle gap-5">
                  <div className="h-36 pt-5 w-full timeline-right relative border-r-0 border-b-0 md:border-b-4 border-white border-opacity-20 pl-8 flex flex-col md:border-l-4">
                    <span className="text-green-300 font-semibold text-lg   ">
                      IT Staff
                    </span>
                    <span className="text-white font-semibold">
                      Win Fortune Travel Agency Corp
                    </span>
                    <span className="text-white text-opacity-50">
                      09/2019 - 01/2020
                    </span>
                    <span className="py-2 pr-60  text-white text-opacity-50  ">
                      Las Pinas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="myWorks">
          <div className="w-full  h-auto bg-gray-800  flex justify-start items-center flex-col   md:h-screen border-b  border-white border-opacity-20 py-20">
            <div className="flex flex-col justify-center align-middle ">
              <span className="text-white font-black text-4xl ">
                SAMPLE WORKS
              </span>
              <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-white bg-opacity-20 ml-20 mt-8 ">
                <span class="absolute left-0 top-0 inline-block h-full w-1.5 animate-left-to-right rounded-full bg-green-400" />
              </span>
            </div>
            <div className="flex flex-row justify-center align-middle -mt-24">
              <span className="opacity-5 text-white flex font-black text-7xl md:text-9xl w-screen md:w-auto justify-center">
                PROJECTS
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-10 pt-20 justify-center">
              <a href="https://www.jchagm.org" target="_blank" rel="noreferrer">
                <div className=" h-64 w-64 bg-white bg-opacity-5 ">
                  <img
                    src={jchag2}
                    alt="ps"
                    className="h-full w-full p-5 hover:animate-scale-center"
                  />
                </div>
              </a>
              <a
                href="https://powersource.group/"
                target="_blank"
                rel="noreferrer"
              >
                <div className=" h-64 w-64 bg-white bg-opacity-5 ">
                  <img
                    src={ps}
                    alt="ps"
                    className="h-full w-full p-5 hover:animate-scale-center"
                  />
                </div>
              </a>
              <a
                href="https://iambee.org/"
                target="_blank"
                rel="noreferrer"
              >
                <div className=" h-64 w-64 bg-white bg-opacity-5 ">
                  <img
                    src={BEE}
                    alt="BEE"
                    className="h-full w-full p-5 hover:animate-scale-center"
                  />
                </div>
              </a>
            </div>
            <span className="text-white pt-5 px-5 text-center md:px-56 md:w-screen">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
        </div>

        <div id="contactMe">
          <div className="w-full h-auto  bg-gray-800  flex justify-start items-center flex-col   md:h-auto border-b  border-white border-opacity-20 py-20">
            <div className="flex flex-col justify-center align-middle ">
              <span className="text-white font-black text-4xl ">
                CONTACT ME
              </span>
              <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-white bg-opacity-20 ml-20 mt-8 ">
                <span class="absolute left-0 top-0 inline-block h-full w-1.5 animate-left-to-right rounded-full bg-green-400" />
              </span>
            </div>
            <div className="flex flex-row justify-center align-middle -mt-24">
              <span className="opacity-5 text-white flex font-black text-7xl md:text-9xl w-screen md:w-auto justify-center">
                CONTACT
              </span>
            </div>
            <div className="text-white gap-2 h-auto flex flex-col items-center pt-10">
              <span className="font-semibold text-2xl">
                Contact Information
              </span>
              <span className="text-center px-10">
                You can reach me out here! :)
              </span>
            </div>
            <div className="flex md:flex-row flex-col gap-5 py-10 w-auto">
              <div className="flex flex-col gap-5">
                <div className="bg-white bg-opacity-5 h-32 w-96 flex flex-row items-center px-5 rounded-lg">
                  <div className="bg-white bg-opacity-10 rounded-full">
                    <span>
                      <AiOutlinePhone
                        size={50}
                        className="p-1 text-green-300"
                      />
                    </span>
                  </div>
                  <div className="px-5 flex flex-col text-white">
                    <span>Contact on Phone</span>
                    <span className="text-white text-opacity-80">
                      0977 749 0180
                    </span>
                  </div>
                </div>
                <div className="bg-white bg-opacity-5 h-32 w-96 flex flex-row items-center px-5 rounded-lg">
                  <div className="bg-white bg-opacity-10 rounded-full">
                    <span>
                      <AiOutlineMail size={50} className="p-1 text-green-300" />
                    </span>
                  </div>
                  <div className="px-5 flex flex-col text-white">
                    <span>Contact on Email</span>
                    <span className="text-white text-opacity-80">
                      buenoaccelle24@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 ">
                <div className="bg-white bg-opacity-5 h-32 w-96 flex flex-row items-center px-5 rounded-lg">
                  <div className="bg-white bg-opacity-10 rounded-full">
                    <span>
                      <AiOutlineMail size={50} className="p-1 text-green-300" />
                    </span>
                  </div>
                  <div className="px-5 flex flex-col text-white">
                    <span>Contact Address</span>
                    <span className="text-white text-opacity-80">
                      Casimiro TownHomes, QueensrowEast Baccor Cavite
                    </span>
                  </div>
                </div>
                <div className="bg-white bg-opacity-5 h-32 w-96 flex justify-center items-center gap-2 text-white flex-col">
                  <div>
                    <span>Social Media</span>
                  </div>
                  <div className="flex gap-5">
                    <div className="bg-white bg-opacity-10 rounded-full">
                      <a
                        href="https://www.facebook.com/buenoaxl"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>
                          <AiFillFacebook
                            size={50}
                            className="p-2 text-green-300"
                          />
                        </span>
                      </a>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-full">
                      <a
                        href="https://www.linkedin.com/in/accelle-bueno-22a542216/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>
                          <AiFillLinkedin
                            size={50}
                            className="p-2 text-green-300"
                          />
                        </span>
                      </a>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-full">
                      <a
                        href="https://github.com/Axl0124"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>
                          <AiFillGithub
                            size={50}
                            className="p-2 text-green-300"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  bg-gray-800   border-t-1 h-auto  border-white border-opacity-20 flex justify-center">
          <span className="text-white py-5">&copy; 2023, Accelle Bueno</span>
        </div>
      </div>
    </>
  );
}

export default App;
