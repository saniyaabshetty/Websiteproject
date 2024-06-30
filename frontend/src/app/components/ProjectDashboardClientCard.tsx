import { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";

interface ProjectDashboardClientCardProps {
    name: string;
    time: string;
    budget: number;
    progress: number;
    date: string;
}

const ProjectDashboardClientCard: React.FC<ProjectDashboardClientCardProps> = ({ name, time, budget, progress, date }) => (
    <Card>
        <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>Estimated Time: {time} Hrs</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
            <div className="text-sm font-semibold">Budget: Rs.{budget}</div>
            <div className="text-sm font-semibold">Progress: {progress}%</div>
            <div className="text-sm font-semibold">Created: {date} ago</div>
            <Progress value={progress} className="w-[60%]" />
        </CardContent>
    </Card>
);

export default ProjectDashboardClientCard;
