"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import StateContext from "../StateContext";
import axios from "axios";
import { FaWalkieTalkie } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";


interface MarketplaceCardProps {
    name: string;
    lName: string;
    expInYrs: number;
    reputationScore: number;
    portfolio: string;
    type: string;
    numberOfFinishedProjects: number;
    _id: string;
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({
    name,
    lName,
    expInYrs,
    reputationScore,
    portfolio,
    type,
    numberOfFinishedProjects,
    _id
}) => {
    const appState = useContext(StateContext);
    const [userId, setUserId] = useState()

    useEffect(() => {
        setUserId(appState.user.id)
    }, [appState])

    return <div className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">

        <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold">{name} {lName}</h3>
            <p className="text-sm text-gray-600">Experience: {expInYrs} years</p>
            <div className="flex items-center mt-1">
                {Array.from({ length: 5 }, (_, index) => (
                    <FaStar key={index} className={index < reputationScore ? "text-yellow-400" : "text-gray-300"} />
                ))}
            </div>
            <a className="text-orange-600 hover:underline mt-2" href={portfolio}>
                View Portfolio
            </a>
            <p className="text-sm text-gray-600 mt-1">Projects: {numberOfFinishedProjects}</p>
            <p className="text-sm text-gray-600 mt-1">Type: {type}</p>
        </div>
        <Link href={`/chat/${userId}/${_id}`}>
            <Button
                className="absolute bottom-4 left-30 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <FaWalkieTalkie />
                Negotiate
            </Button>
        </Link>
    </div>
};

// Marketplace component with dynamic cards
export default function Marketplace() {
    // const marketplaceData = [
    //     { name: "Alex Johnson", experience: 5, stars: 4, portfolioLink: "#", projects: 32 },
    //     { name: "Emma Watson", experience: 7, stars: 5, portfolioLink: "#", projects: 45 },
    //     { name: "Emma Watson", experience: 7, stars: 5, portfolioLink: "#", projects: 45 },
    //     { name: "Emma Watson", experience: 7, stars: 5, portfolioLink: "#", projects: 45 },
    //     // Add more data as needed
    // ];

    const [marketplaceData, setMarketplaceData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("/get-sellers")
                console.log(response.data)
                setMarketplaceData(response.data)
            } catch (e) {

            }
        }
        getData()
    }, [])

    return (
        <div className="flex flex-col h-screen">
            {/* <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[400px] w-[1000px] -translate-x-[10%] translate-y-[50%] rounded-full bg-[rgba(109,244,244,0.5)] opacity-50 blur-[80px]"></div></div> */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

            <header className="bg-gradient-to-r from-cyan-500 to-orange-500 shadow p-8 mt-4">
                <h1 className="text-4xl font-bold text-center">Marketplace</h1>
            </header>
            <div className="flex mx-20 my-20 flex-1 overflow-auto">
                <main className="flex-1 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {marketplaceData.map((item, index) => (
                            <MarketplaceCard key={index} {...item} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
