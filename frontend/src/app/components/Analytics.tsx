"use client"
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Analytics() {
  const path = usePathname();
  return (
    <div className="flex flex-col w-full min-h-screen  ">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
            <HomeIcon className="w-6 h-6" />
            <span className="sr-only">Home Renovation Project</span>
          </Link>
        </nav>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <Link className="mx-auto max-w-[40vw]" href={`/tasks/${path.split("/")[2]}`}><Button > Task Management</Button></Link>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Furniture Completion</CardTitle>
              <div className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">75%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">3 out of 4 tasks completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Flooring Completion</CardTitle>
              <div className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">75%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">3 out of 4 tasks completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Plumbing Completion</CardTitle>
              <div className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">50%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">2 out of 4 tasks completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Painting Completion</CardTitle>
              <div className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">1 out of 4 tasks completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Overall Completion</CardTitle>
              <div className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">50%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">6 out of 12 tasks completed</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
          <Card className="h-full w-full max-w-md">
            <CardHeader>
              <CardTitle>Revenue by Category</CardTitle>
              <CardDescription>
                A bar chart showing revenue by category. The y-axis represents revenue in thousands and the x-axis
                represents categories like furniture, coloring, and decor.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart className="aspect-square" />
            </CardContent>
          </Card>
          <Card className="h-full w-full max-w-md">
            <CardHeader>
              <CardTitle>Revenue Chart</CardTitle>
              <CardDescription>
                A line chart showing estimated and actual revenue over time. The y-axis represents price in hundreds and
                the x-axis represents months.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart className="aspect-square" />
            </CardContent>
          </Card>
          <Card className="h-full w-full max-w-md">
            <CardHeader>
              <CardTitle>Project Completion Chart</CardTitle>
              <CardDescription>
                A bar chart showing completion rates for different aspects of the project. The x-axis represents the
                number of tasks and the y-axis represents months.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart2 className="aspect-square" />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
          <Card className="h-full w-full max-w-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Aspect</TableHead>
                  <TableHead>Completion</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Furniture</TableCell>
                  <TableCell>75%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Coloring</TableCell>
                  <TableCell>50%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Decor</TableCell>
                  <TableCell>25%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Overall</TableCell>
                  <TableCell>50%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
          <Card className="h-full w-full max-w-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Person</TableHead>
                  <TableHead>Time Spent (hours)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Doe</TableCell>
                  <TableCell>8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jane Smith</TableCell>
                  <TableCell>6</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bob Johnson</TableCell>
                  <TableCell>10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Alice Williams</TableCell>
                  <TableCell>7</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
          <Card className="h-full w-full max-w-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Month</TableHead>
                  <TableHead>Revenue ($)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">January</TableCell>
                  <TableCell>1000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">February</TableCell>
                  <TableCell>1500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">March</TableCell>
                  <TableCell>1200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">April</TableCell>
                  <TableCell>1800</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  )
}


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


function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Furniture", count: 111 },
          { name: "Flooring", count: 157 },
          { name: "Plumbing", count: 129 },
          { name: "Painting", count: 109 },


        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}
function BarChart2(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 60 },
          { name: "Feb", count: 48 },
          { name: "Mar", count: 177 },
          { name: "Apr", count: 78 },
          { name: "May", count: 96 },
          { name: "Jun", count: 204 },

        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
