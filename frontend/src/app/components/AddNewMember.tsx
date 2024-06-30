
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios";
import { useContext, useRef } from "react";
import StateContext from "../StateContext";
import toast from "react-hot-toast"
export default function AddNewMember() {

    const appState = useContext(StateContext);
    const emailRef = useRef<HTMLInputElement>();

    async function addMember() {
        try {

            const response = await axios.post(`/add-member`, {
                token: appState.user.token,
                email: emailRef.current?.value,
                teamName: "Iterative Bytes",
                id: appState.user.id
            });

            // Handle the response from the server
            console.log(response.data); // Assuming the server responds with "Added"
            toast.success(` ${emailRef.current?.value} Added Successfully`)
        } catch (error) {
            // Handle any errors that occurred during the request
            console.error('Error adding member:', error.message);
            toast.error(`Failed`)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">Add New Team Member</h2>
                <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                    Adding a new team member is a critical task. Please ensure to enter the correct email address.
                </p>
                <div className="mt-8">
                    <div>
                        <div className="flex flex-col mb-2">
                            <Label className="text-sm text-gray-800 dark:text-gray-200" htmlFor="email">
                                Email
                            </Label>
                            <Input ref={emailRef} className="mt-1" id="email" placeholder="Enter email" type="email" />
                        </div>
                        <Button className="w-full mt-4" type="submit" onClick={(e) => { e.preventDefault(); addMember() }}>
                            Add Member
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

