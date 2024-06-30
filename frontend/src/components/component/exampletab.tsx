"use client"
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Real-Time Market Updates",
      value: "Real-Time Market Updates",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-400 to-orange-400">
          <p>Stay informed with live updates on market trends and stock prices</p>
          <DummyContent imageSrc="/1.jpg" />
        </div>
      ),
    },
    {
      title: "Secure Data Storage",
      value: "Secure Data Storage",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-400 to-orange-400">
          <p>Your financial data is securely stored on your device, ensuring complete privacy</p>
          <DummyContent imageSrc="/1.jpg" />
        </div>
      ),
    },
    {
        title: "Document Scanning & Analysis",
        value: "Document Scanning & Analysis",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-400 to-orange-400">
            <p>Upload and scan financial documents to receive personalized advice using Azure Text Recognition</p>
            <DummyContent imageSrc="/3.jpg" />
          </div>
        ),
      },
      {
        title: "Interactive Budget Planner",
        value: "Interactive Budget Planner",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-400 to-orange-400">
            <p>Easily track and manage your expenses with our intuitive budgeting tool</p>
            <DummyContent imageSrc="/2.jpg" />
          </div>
        ),
      },
      {
        title: "Personalized Investment Insights",
        value: "Personalized Investment Insights",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-400 to-orange-400">
            <p>Receive tailored investment strategies based on your financial data and current market trends</p>
            <DummyContent imageSrc="/2.jpg" />
          </div>
        ),
      },
      
    // Add more tabs with different image sources as needed
  ];

  return (
    <>
     
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col  max-w-5xl mx-auto w-full  items-start justify-start my-40">
        
      <Tabs tabs={tabs} />
    </div>
    </>
  );
}

const DummyContent = ({ imageSrc }:{imageSrc:any}) => {
  return (
    <div>
      <Image
        src={imageSrc}
        alt="dummy image"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    </div>
  );
};
