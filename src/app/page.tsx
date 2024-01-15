"use client";
import Marquee from "react-fast-marquee";
import React from "react";
import { Toaster, toast } from "sonner";
import { updateData } from "@/app/api";
import { BarLoader } from "react-spinners";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default function Home() {
  // @ts-ignore
  // const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  const isSafari = true;
  const [email, setEmail] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isAccepted, setIsAccepted] = React.useState(false);
  const [isRejected, setIsRejected] = React.useState(false);
  const handleEmailChange = (enteredEmail: string) => {
    setEmail(enteredEmail);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the entered email is valid
    setIsValidEmail(emailRegex.test(enteredEmail));
  };

  React.useEffect(() => {
    if (isRejected) {
      // Get the DOM element using a ref
      const animatedDiv = document.getElementById("hazard-div");
      const shadowDiv = document.getElementById("bottom-shadow");

      // Animate the width from 0 to 100%
      const tl = gsap.timeline();
      tl.timeScale(2);
      tl.to(shadowDiv, {
        top: 0,
        left: 0,
        duration: 1,
        ease: "power4.inOut",
      });
      tl.to(
        animatedDiv,
        {
          width: "100%",
          duration: 2,
          ease: "power4.inOut",
        },
        "<",
      );
      tl.to(
        document.getElementById("input-div"),
        {
          height: 0,
          duration: 2,
          ease: "power4.inOut",
        },
        "<+=0.5",
      );
      tl.to(
        document.getElementById("btn-div"),
        {
          height: 0,
          duration: 0.5,
          padding: 0,
          ease: "power4.inOut",
        },
        "<",
      );

      tl.to(
        "#contact-us-div",
        {
          duration: 1,
          text: "thank you for contacting us. we will reach you shortly.",
          delay: 0,
        },
        "<+=1",
      ).then(() => {
        setTimeout(() => {
          tl.timeScale(4);
          setEmail("");
          setIsLoading(false);
          tl.reverse();
          setIsRejected(false);
        }, 1000);
      });
    }
  }, [isRejected]);

  return (
    <div className="flex flex-col w-[100vw] h-[100dvh] bg-klout relative overflow-x-hidden">
      <Toaster richColors />
      <div className="flex w-full h-full justify-start items-start md:justify-center md:items-center flex-col-reverse md:flex-col">
        <div className="flex flex-grow flex-col justify-center items-center w-full">
          <div className="flex h-[33%] flex-col justify-center items-center w-full"></div>
          <div className="flex flex-grow flex-col justify-center items-center w-full">
            <div
              id="contact-us-div"
              className="flex w-full justify-center text-center items-center text-[36px] text-klout-light font-normal"
            >
              contact us
            </div>
            <div
              id="input-div"
              className="flex w-[95%] md:w-[50%] h-[48px] relative justify-end overflow-x-hidden overflow-y-hidden"
            >
              <div
                id="bottom-shadow"
                className="w-full h-full absolute bg-klout-medium z-0 top-[4px] left-[4px]"
              ></div>
              {isRejected && (
                <div
                  id="hazard-div"
                  className="w-0 h-full absolute z-[3] p-[4px]"
                >
                  <div className="flex hazard w-full h-full"></div>
                </div>
              )}
              <input
                className="box-border placeholder-klout-medium placeholder-opacity-50 outline-none bg-klout-light w-full h-[30px] z-[2] px-[24px] py-[24px] text-klout-medium"
                type={"text"}
                placeholder="enter email"
                onChange={(e) => {
                  handleEmailChange(e.target.value);
                }}
                value={email}
              />
              <button
                tabIndex={0}
                className="overflow-x-hidden overflow-y-hidden px-[4px] w-[120px] cursor-pointer outline-none py-[4px] z-[2] bg-klout-light"
                onClick={() => {
                  if (!isValidEmail)
                    toast.error("please enter valid email", {
                      position: "top-right",
                      dismissible: true,
                      duration: 1000,
                    });
                  else {
                    setIsLoading(true);
                    setTimeout(() => {
                      // updateData(email).then((res) => {
                      setIsRejected(true);
                      // });
                    }, 2000);
                  }
                }}
              >
                <div
                  id={"btn-div"}
                  className="overflow-x-hidden overflow-y-hidden px-[20px] text-klout-light py-[8px] w-full h-full bg-klout flex justify-center items-center"
                >
                  {isLoading ? (
                    <BarLoader width="80%" color="#FFCAC2" />
                  ) : (
                    "submit"
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col select-none items-start justify-start overflow-x-hidden overflow-y-hidden whitespace-nowrap font-black text-klout-medium text-[90px] leading-[5rem] md:text-[140px] md:leading-[8rem] xl:text-[180px] xl:leading-[10rem]">
          {/*<Marquee*/}
          {/*    loop={0}*/}
          {/*    autoFill*/}
          {/*    className="overflow-y-hidden"*/}
          {/*    gradient*/}
          {/*    gradientColor="#4F000B"*/}
          {/*    speed={isSafari?0:50}*/}
          {/*>*/}
          <div className="flex items-start justify-start">
            Klout<span className="text-klout-light">Klout</span>KloutKlout
          </div>
          {/*<br />*/}
          {/*</Marquee>*/}
          {/*<Marquee*/}
          {/*    loop={0}*/}
          {/*    autoFill*/}
          {/*    className="overflow-y-hidden"*/}
          {/*    gradient*/}
          {/*    gradientColor="#4F000B"*/}
          {/*    direction="right"*/}
          {/*    speed={isSafari?0:50}*/}
          {/*>*/}
          <div className="flex">
            Studio.<span className="text-klout-light">Studio.</span>Studio.
          </div>
          {/*</Marquee>*/}
        </div>
      </div>
    </div>
  );
}
