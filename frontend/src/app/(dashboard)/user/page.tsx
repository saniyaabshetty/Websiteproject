"use client";

import Analytics from "@/components/Analytics";
import Dashboard  from "@/components/ui/Dashboard";
import Imagequerybot from "@/components/Imagequerybot";

import QueryUI from "@/components/QueryUI";
import ReportAnalysis from "@/components/ReportAnalysis";
import { FaBook, FaImage, FaLaptop, FaPage4 } from "react-icons/fa";
import { PiGraphFill, PiRobot } from "react-icons/pi";
import { ShieldCheck, Book, SearchCheckIcon, AudioLinesIcon, CameraIcon } from "lucide-react";
import "driver.js/dist/driver.css";
import TranscriptionForm from "@/components/TranscriptionForm";
import { SpeakerLoudIcon } from "@radix-ui/react-icons";
import SellerMeet from "@/app/seller-meet/page";


const dashboardContent = [
    {
        panel: <Analytics />,
        key: "analytics",
        icon: <HomeIcon />,
        label: "Home",
        link: null
    },
    {
        panel: <QueryUI />,
        key: "query",
        icon: <ShieldCheck />,
        label: "Ask AI",
        link: null
    },
    {
          panel: <ReportAnalysis />,
          key: "report",
          icon: <Book />,
          label: "Financial Report Analyser",
          link: null
    },

    {
         panel: <Imagequerybot />,
         key: "imgquerybot",
         icon: <SearchCheckIcon />,
         label: "Document Query",
         link: null
    },
    {
        panel: <SellerMeet />,
        key: "seller-meet",
        icon: <CameraIcon/>,
        label: "Join Meet",
        link: null
    },
    {
        panel: <TranscriptionForm />,
        key: "transcribe",
        icon: <AudioLinesIcon />,
        label: "Meet Transcription",
        link: null
    },
];
function HomeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }

const steps = [
    { element: '#analytics', popover: { title: 'Dashboard', description: 'Get an analysis  of your daily use of the web application' } },
    { element: '#query', popover: { title: 'PrecisionpProbe', description: 'Accurate Keyword Extraction utilizing a robust algorithm' } },
    { element: '#report', popover: { title: 'Powered Hashtag Generation', description: 'GenBoost Hashtags integrates cutting-edge GenAI technology to dynamically create contextually relevant hashtags' } },
    { element: '#calorie', popover: { title: 'Calorie count', description: 'Count your day to day calorie' } },
    { element: '#imgquerybot', popover: { title: 'Image query', description: 'Enter an image and get the data for them' } },
    { element: '#meet', popover: { title: 'Join Meet', description: 'Accurate Keyword Extraction utilizing a robust algorithm' } },
    { element: '#pubmedsearch', popover: { title: 'Search pubme', description: 'Get an answer from a friendly AI assistant which will fetch user friendly answer for this' } },
    { element: '#appointment', popover: { title: 'Appointment scheduler', description: 'Get to view your scheduled appointment' } },
    { element: '#insuranceverification', popover: { title: 'Insurance verification', description: 'Get your insurance verified' } }
]


export default function page() {
    return <Dashboard dashboardContent={dashboardContent} tutorialsteps={steps} title="MoneyByte" />
}
