import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import ProjectDashboardClientCard from "./ProjectDashboardClientCard";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import StateContext from "../StateContext";
import { formatDistance, formatDistanceToNow, } from 'date-fns';
import Link from "next/link";


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

