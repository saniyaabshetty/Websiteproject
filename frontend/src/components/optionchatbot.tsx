import { CardTitle, Card } from "@/components/ui/card"
import Link from "next/link"

export function Optionchatbot() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-stretch items-center h-full w-full p-6">
      <Card className="flex flex-col items-center justify-center p-6">
        <InstagramIcon className="h-12 w-12 text-orange-500" />
        <CardTitle className="mt-4">Instagram</CardTitle>
        <p className="mt-2 text-center text-gray-600">
          Instagram is a free, online photo-sharing application and social network platform.
        </p>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-600 disabled:pointer-events-none disabled:opacity-50 mt-4"
          href="#"
        >
          Visit Instagram
        </Link>
      </Card>
      <Card className="flex flex-col items-center justify-center p-6">
        <FacebookIcon className="h-12 w-12 text-orange-600" />
        <CardTitle className="mt-4">Facebook</CardTitle>
        <p className="mt-2 text-center text-gray-600">
          Facebook is a social networking site that makes it easy for you to connect and share with family and friends
          online.
        </p>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-700 disabled:pointer-events-none disabled:opacity-50 mt-4"
          href="#"
        >
          Visit Facebook
        </Link>
      </Card>
      <Card className="flex flex-col items-center justify-center p-6">
        <TwitterIcon className="h-12 w-12 text-orange-400" />
        <CardTitle className="mt-4">Twitter</CardTitle>
        <p className="mt-2 text-center text-gray-600">
          Twitter is an American microblogging and social networking service on which users post and interact with
          messages known as "tweets".
        </p>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-orange-400 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 mt-4"
          href="#"
        >
          Visit Twitter
        </Link>
      </Card>
    </div>
  )
}


function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
