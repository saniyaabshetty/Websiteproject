/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VETdipGmfaF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import ProjectDashboardClientCard from "./ProjectDashboardClientCard";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import StateContext from "../StateContext";
import { formatDistance, formatDistanceToNow, } from 'date-fns';
import Link from "next/link";



export default function ProjectDashboard() {
    // const projects = [
    //     {
    //         name: "Kush K.",
    //         budget: 300,
    //         progress: 30,
    //         status: "In Progress",
    //     },
    //     {
    //         name: "Sujal C.",
    //         budget: 500,
    //         progress: 70,
    //         status: "Completed",
    //     },
    //     {
    //         name: "Soham Patil.",
    //         budget: 800,
    //         progress: 50,
    //         status: "On Hold",
    //     },
    //     {
    //         name: "Kush K.",
    //         budget: 300,
    //         progress: 30,
    //         status: "In Progress",
    //     },
    //     {
    //         name: "Sujal C.",
    //         budget: 500,
    //         progress: 70,
    //         status: "Completed",
    //     },
    //     {
    //         name: "Soham Patil.",
    //         budget: 800,
    //         progress: 50,
    //         status: "On Hold",
    //     },

    // ];

    const [projects, setProjects] = useState([])
    const appState = useContext(StateContext);
    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await axios.get(`/get-projects-by-id/${appState.user.id}/${appState.user.role}`)
                setProjects(response.data);
            } catch (e) {
                console.log(e)
                toast.error("Cannot Retrive Due to Heavy Load on Server")
            }
        }
        getProjects()
    }, [])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {projects.map((project) => (
                <Link href={`/project/${project._id}`} >
                    <ProjectDashboardClientCard
                        name={project.projectName}
                        budget={project.totalBudget}
                        progress={40}
                        date={formatDistanceToNow(project.createdDate)}
                        time={project.projectEstTime}
                    />
                </Link>
            ))}
        </div>
    )
}

