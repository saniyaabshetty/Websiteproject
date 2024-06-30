import { useState } from 'react';
import axios from 'axios';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown"

export default function Component() {
    const [audioFile, setAudioFile] = useState(null);
    const [transcription, setTranscription] = useState('');
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e: any) => {
        setAudioFile(e.target.files[0]);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!audioFile) {
            alert('Please select an audio file');
            return;
        }

        const formData = new FormData();
        formData.append('file', audioFile);
        formData.append('model', 'whisper-1');

        try {
            setIsLoading(true);
            const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', formData, {
                headers: {
                    'Authorization': 'Bearer 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', // Replace YOUR_TOKEN with your actual OpenAI API key
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data.text)
            setTranscription(response.data.text);

            const result = await axios("http://localhost:3000/api/gemini-freeform?query=Please convert this 2 person communicaton into meaningful summary. You can use Markdown. Do not exceed the 50 words limit. Transcription of Conversation:" + transcription)
            console.log(result.data)
            setSummary(result.data.message)

        } catch (error: any) {
            console.error('Error:', error.message);
            alert('Error occurred during transcription');
        } finally {
            setIsLoading(false);
        }


    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen  [background: radial-gradient(125%_125%_at_50%_10%, #fff 40%, #ff7f0e 100%);]">
            <div className="w-full max-w-md p-8 space-y-4  rounded shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Upload Your Audio File</h2>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="audio">Audio File</Label>
                        <Input id="audio" type="file" onChange={handleFileChange} />
                    </div>
                    <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? 'Processing...' : 'Get Summary'}
                    </Button>
                </form>
            </div>
            <div className="w-full max-w-md p-8 mt-8 space-y-4 bg-white rounded shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Transcription</h2>
                <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-700">
                    <p className="text-gray-900 dark:text-gray-100">{transcription || 'Your transcription will appear here...'}</p>
                </div>
            </div>
            <div className="w-full max-w-md p-8 mt-8 space-y-4 bg-white rounded shadow-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Short Summary</h2>
                <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-700">
                    <p className="text-gray-900 dark:text-gray-100">
                        <ReactMarkdown>{summary || 'Your summary will appear here...'}</ReactMarkdown>
                    </p>
                </div>
            </div>
        </div>
    );
}
