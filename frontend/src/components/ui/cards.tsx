import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import Translate from '@sujalchoudhari/localization';

export function Cards() {
  return (
    <main className="flex flex-col md:flex-row gap-6 mt-10 mb-10 justify-center items-center p-6 pb-32">
  
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle><Translate>User Login ~ उपयोगकर्ता लॉगिन</Translate></CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <img
            alt="User Login"
            className="w-48 h-48 object-cover rounded-full"
            height="200"
            src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <p className="text-center text-gray-500"><Translate>Users can login and choice and coordinate with Interior Designers ~ उपयोगकर्ता लॉगिन कर सकते हैं और इंटीरियर डिजाइनर्स के साथ चयन और समन्वय कर सकते हैं</Translate></p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="login"
          >
            <Translate>Login ~ लॉगिन</Translate>
          </Link>
        </CardContent>
      </Card>
      
    </main>
  )
}
