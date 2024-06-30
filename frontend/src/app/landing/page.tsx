import React, { useEffect } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Translate from '@sujalchoudhari/localization';
import { Userfeedback } from "@/components/userfeedback";
import { TabsDemo } from "@/components/component/exampletab";

export default function Landing() {

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        {/* \<div className="absolute bottom-auto left-auto right-0 top-0 h-[400px] w-[1000px] -translate-x-[10%] translate-y-[50%] rounded-full bg-[rgba(159,24,154,0.3)] opacity-50 blur-[80px]"></div> */}
        <div className="bg-[#FFA500] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#FFA500] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      </div>
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <Translate> Banking on Your Story: Where Finance Meets You-nique ~ जहां शैलियाँ सिन्क्रोनिसिटी से मिलती हैं</Translate> <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                <Translate>MoneyByte ~ सिंकडेकोर</Translate>
              </span>
            </h1>
          </>
        }
      />

      <TabsDemo/>
      <span className="text-4xl text-center md:text-[2rem] font-bold mt-6 leading-none">
           Feedback
      </span>
      <Userfeedback />

    </div>
  );
}

export const users = [
  {
    image: "instagram.png",
  },
];