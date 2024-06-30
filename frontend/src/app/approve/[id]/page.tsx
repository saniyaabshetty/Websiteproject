"use client";
import { useState, useRef, useContext } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams, usePathname } from 'next/navigation';
import StateContext from '@/app/StateContext';

export default function Approve() {
  const path = usePathname()

  const appState = useContext(StateContext)

  // Refs for input fields
  const projectNameRef = useRef(null);
  const estimatedTimeRef = useRef(null);
  const budgetRef = useRef(null);


  // Function to submit form data (replace with actual API call)
  const submitForm = async () => {
    // Log the form data (replace with API call)
    console.log('Submitting Form:',);


    // Example: Focus on the first input field after submission
    projectNameRef.current.focus();

    try {
      const res = await axios.post("/accept-deal", {
        projectName: projectNameRef.current?.value,
        projectEstTime: estimatedTimeRef.current?.value,
        totalBudget: budgetRef.current?.value,
        userId: appState.user.id,
        sellerId: path.split("/")[2],
      })
      toast.success("Approved Successfully")
    } catch (e) {
      console.log({
        projectName: projectNameRef.current?.value,
        projectEstTime: estimatedTimeRef.current?.value,
        totalBudget: budgetRef.current?.value,
        userId: appState.user.id,
        sellerId: path.split("/")[2],
      }, e)
      toast.success("Failed to Approve")
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full max-w-md mt-40 mx-auto">
      <div className="flex flex-col space-y-1">
        <Label htmlFor="project-name">Project Name</Label>
        <Input
          id="project-name"
          placeholder="Enter project name"
          type="text"
          ref={projectNameRef}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <Label htmlFor="estimated-time">Estimated Time (in hours)</Label>
        <Input
          id="estimated-time"
          placeholder="Enter estimated time"
          type="number"
          ref={estimatedTimeRef}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <Label htmlFor="budget">Budget (in USD)</Label>
        <Input
          id="budget"
          placeholder="Enter budget"
          type="number"
          ref={budgetRef}
        />
      </div>
      <Button className="w-full" type="button" onClick={submitForm}>
        Submit
      </Button>
    </div>
  );
}
