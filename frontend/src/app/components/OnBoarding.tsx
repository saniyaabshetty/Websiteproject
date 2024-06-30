import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function OnBoarding() {
    return (
        
        <div className="w-full max-w-2xl mx-auto p-4 md:p-6 lg:p-8">
        {/* <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[400px] w-[1000px] -translate-x-[10%] translate-y-[50%] rounded-full bg-[rgba(109,244,244,0.5)] opacity-50 blur-[80px]"></div></div> */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

            <Card>
                <CardHeader>
                    <CardTitle>Edit Profile</CardTitle>
                    <CardDescription>Update your profile information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email" type="email" />
                    </div>
                    <div className="grid gap-2 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Input id="category" placeholder="Enter your category" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="type">Type</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="worker">Worker</SelectItem>
                                    <SelectItem value="vendor">Vendor</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="contact">Contact</Label>
                        <Input id="contact" placeholder="Enter your contact" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input id="experience" placeholder="Enter your years of experience" type="number" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reputation">Reputation Score</Label>
                        <Input id="reputation" placeholder="Enter your reputation score" type="number" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="Enter your address" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="portfolio">Portfolio</Label>
                        <Input id="portfolio" placeholder="Enter your portfolio link" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="projects">Number of Projects Finished</Label>
                        <Input id="projects" placeholder="Enter number of projects finished" type="number" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="joined-date">Joined Date</Label>
                        <Input id="joined-date" placeholder="Enter your joined date" type="date" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="joined-date">Password</Label>
                        <Input id="joined-date" placeholder="Enter your joined date" type="password" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="ml-auto">Save</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

