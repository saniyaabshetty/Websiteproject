"use client";
import { Button } from "@/components/ui/button";
import { ReactNode, useEffect, useState } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import Link from "next/link";
import React from "react";
import { HeartIcon } from "@radix-ui/react-icons";


export type DashboardProps = { panel: ReactNode, key: string, icon: ReactNode, label: string, tutorialsteps: any, link: string | null }[]

export default function Dashboard({ dashboardContent, title, tutorialsteps }: { dashboardContent: any, title: string, tutorialsteps: any }) {
    const [currentPanel, setCurrentPanel] = useState(dashboardContent[0].key);
    const [shownTutorial, setShownTutorial] = useState(false)
    const handlePanelChange = (key: string) => {
        setCurrentPanel(key);
    };

    const driverObj = driver({
        showProgress: true,
        steps: tutorialsteps
    });

    return (
        <div className="grid h-screen w-full grid-cols-1 sm:grid-cols-[20%_80%]">
            {/* Sidebar */}
            <div className="sm:border-r bg-gray-100/40 dark:bg-gray-800/40 sm:w-20 md:w-32 lg:w-[20vw] xl:w-[20vw]">
                <div className="flex h-[60px] items-center border-b px-6">
                    <Link className="flex items-center gap-2 font-semibold" href="#" onClick={() => { driverObj.drive() }}>
                        <HeartIcon
                            className="h-6 w-6 animate-pulse text-red-500 max-w-[2rem] max-h-[2rem]"
                            style={{
                                animationDuration: '1s', // You can adjust the duration as per your preference
                                animationIterationCount: 'infinite',
                                animationTimingFunction: 'ease-in-out',
                            }}
                        />

                        <span className="">{title}</span>
                    </Link>
                </div>
                <div className="flex flex-col gap-2 p-4">
                    {dashboardContent.map((item:any) => (
                        <React.Fragment key={item.key}>
                            {item.link ? (
                                <Link
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    href="#"
                                    id={item.key}
                                >
                                    <Button
                                        className="justify-start gap-2"
                                        size="sm"
                                        variant="ghost"
                                        onClick={() => handlePanelChange(item.key)}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </Button>
                                </Link>
                            ) : (
                                <Button
                                    className="justify-start gap-2"
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => handlePanelChange(item.key)}
                                    id={item.key}
                                >
                                    {item.icon}
                                    {item.label}
                                </Button>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col p-4">
                {/* Display Panel */}
                {dashboardContent.find((item:any) => item.key === currentPanel)?.panel}
            </div>
        </div>
    );
}
