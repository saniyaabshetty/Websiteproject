import { useState, useEffect } from 'react';
import 'react-typist/dist/Typist.css';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from './ui/button';
import Loading from './Loading';

export default function ReportAnalysis() {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submitPressed, setSubmitPressed] = useState(false)
    const handleFileUpload = async (event: any) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file);
            setLoading(true);
        }
    };

    const [text, setText] = useState(`Your blood levels seem generally within the normal range, which is a positive sign. To maintain good health, focus on a balanced diet, regular exercise, and staying hydrated. Include a variety of nutrient-rich foods, and consider consulting with a healthcare professional for personalized advice based on your overall health goals. (Generated via AI)`);

    const handleFileSubmit = () => {
        if (uploadedFile) {

            const filePath = "http://localhost:3000/" + ((uploadedFile as File).name || "") ;
            setSubmitPressed(true);
            setLoading(true);

            // Make a GET request to your API endpoint with the file path and question
            fetch(`/api/gemini?image_url=${filePath}&question=Please extract the keywords which is seperated by comma.Give me atleast 10 keywords precise.`)
                .then((response) => response.json())
                .then((data) => {
                    // Handle the API response here
                    setLoading(false);
                    console.log(data.message)
                    setText(data.message)
                })
                .catch((error) => {
                    console.error("Error:", error);
                    setLoading(false);
                });

        }
    };



    return (
        <div className="flex flex-col gap-4 p-4">
            <section className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md h-64">
                <div className="text-center">
                    {uploadedFile ? (
                        <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded PDF" style={{ maxWidth: '100%', maxHeight: '100%' }} className='h-[25vh]' />
                    ) : (
                        <>
                            <h2 className="text-lg font-medium mb-2">Drag & Drop your PDF here</h2>
                            <p className="text-sm text-gray-500">or</p>
                            <div className="mt-2">
                                <Input className="hidden" id="pdf-upload" type="file" onChange={handleFileUpload} />
                                <Label className="cursor-pointer text-orange-600 underline" htmlFor="pdf-upload">
                                    Browse files
                                </Label>
                            </div>
                        </>
                    )}
                </div>
            </section>
            <Button className='w-[20vw] mx-auto' onClick={handleFileSubmit}>Submit</Button>
            <section className="flex flex-col h-64 overflow-auto border rounded-md p-4">
                <h2 className="text-lg font-medium mb-2">Financial Report Analyzer </h2>
                <ScrollArea className="flex-1 mt-2">
                    <div className="text-gray-700">
                        {submitPressed ? (
                            loading ? <Loading /> : text
                        ) : (
                            <></>
                        )}
                    </div>
                </ScrollArea>
            </section>
        </div>
    );
}

