"use client";
import Analytics from "@/app/components/Analytics";
import axios from "axios"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function ProjectPage() {
    const path = usePathname();
    useEffect(() => {
        const getProjectData = async () => {
            try {
                const response = await axios.get(`/get-project-by-id/${path.split("/")[2]}`)
                console.log(response.data)
            } catch (e) {

            }
        }
        getProjectData()
    }, [])
    return <>
        <Analytics />
    </>
}