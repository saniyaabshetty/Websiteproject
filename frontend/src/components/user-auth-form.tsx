"use client"
import  React, {useState, useContext, ChangeEvent} from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import DispatchContext from '../app/DispatchContext';
import Axios from 'axios'
import {useRouter} from 'next/navigation'
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}


export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const appDispatch = useContext(DispatchContext)
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try{
     const response = await Axios.post('/login-user', {       
         email, //as the name of key and value is same, we canjust right it once. (In modern js)
         password 
       }
       )
       if (response.data) {
       
        appDispatch({type: "login", data: response.data })
        // router.push('/');
        // setLoggedIn(true) //update state
        // appDispatch({type: "login"})
       
        console.log( response.data)
        router.push("/")
      } 
      else {
        console.log("Incorrect Username / Password")
      }
      } catch(e){
       console.log("Error")
   
      }

    setIsLoading(false);
  };

  return (
    
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value); console.log(e.target.value)}}
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
            />
            <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}
              id="password"
              placeholder="*******"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
            />
            {/* Example error handling */}
            {/* <p className="px-1 text-xs text-red-600">
                Your error message here
            </p> */}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      
    </div>
  );
}
