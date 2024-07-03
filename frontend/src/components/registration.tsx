import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function register() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-orange-100">
      <div className="flex items-center justify-center mb-8">
        <img alt="Social Media Icon" className="w-16 h-16" src="/placeholder.svg" />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 bg-white rounded-lg p-8 w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">Register as an Influencer</h1>
        <div className="w-full">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="fullname">
                Full Name
              </Label>
              <Input className="border-gray-200 focus:border-gray-600 focus:ring-gray-200" id="fullname" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="username">
                Username
              </Label>
              <Input className="border-gray-200 focus:border-gray-600 focus:ring-gray-200" id="username" required />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="email">
                Email
              </Label>
              <Input
                className="border-gray-200 focus:border-gray-600 focus:ring-gray-200"
                id="email"
                required
                type="email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="password">
                Password
              </Label>
              <Input
                className="border-gray-200 focus:border-gray-600 focus:ring-gray-200"
                id="password"
                required
                type="password"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="confirmPassword">
                Confirm Password
              </Label>
              <Input
                className="border-gray-200 focus:border-gray-600 focus:ring-gray-200"
                id="confirmPassword"
                required
                type="password"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="socialMediaHandle">
                Social Media Handle
              </Label>
              <Input
                className="border-gray-200 focus:border-gray-600 focus:ring-gray-200"
                id="socialMediaHandle"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-800" htmlFor="bio">
                Bio
              </Label>
              <textarea
                className="border-gray-200 focus:border-gray-600 focus:ring-gray-200 h-24 resize-none"
                id="bio"
                required
              />
            </div>
            <Button className="w-full bg-gray-800 text-white" type="submit">
              Register
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            <Link className="underline text-gray-800" href="#">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
