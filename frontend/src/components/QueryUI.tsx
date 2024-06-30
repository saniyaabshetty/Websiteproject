import React, { useState } from 'react';
import ChatUI from './ChatUI';
import { json } from 'stream/consumers';

function QueryUI() {
    const [chatMessages, setChatMessages] = useState([]);
    const {
        GoogleGenerativeAI,
        HarmCategory,
        HarmBlockThreshold,
    } = require("@google/generative-ai");

    const MODEL_NAME = "gemini-pro";
    const API_KEY = "AIzaSyAfzyDPH_hi_xirfdmxnxtOrLUoOxgMibM";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
            {
                role: "user",
                parts: [{ text: "Hello. You are MoneyByte assisstant, a Financial Helper Bot. As far as I know, you have a great knowledge base of daily life things that are related to the finance. I will be asking you questions about the problem I am facing. Please can you explain what's wrong like I am 5 year old? It will be beneficial for me If you suggest simple and modern solutions for me. I also don't like to read, please keep your answers short and SFW. Peace." }],
            },
            {
                role: "model",
                parts: [{ text: "Yes. I will answer as per your requirement. I will also use the markdown syntax for the same. I will also not bombard you with information and keep it small like a chat within 50 words." }],
            },
        ],
    });
    const getAnswer = (newMessages: any) => {
        const userQuestion = newMessages[newMessages.length - 1].text;

        chat.sendMessage(userQuestion)
            .then((result: any) => {
                newMessages = [
                    ...newMessages,
                    { text: result.response.text() || "Failed to fetch Input, retry again later...", sender: "bot" },
                ];
                setChatMessages(newMessages);
            })
            .catch((error: Error) => {
                console.error("Error in getAnswer function:", error);
            });
    };



    // async function query(data: { inputs: any }) {
    //     const response = await fetch(
    //         "https://api-inference.huggingface.co/models/emilyalsentzer/Bio_ClinicalBERT",
    //         {
    //             headers: { Authorization: "Bearer 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" },
    //             method: "POST",
    //             body: JSON.stringify(data),
    //         }
    //     );
    //     const result = await response.json();
    //     return result;
    // }

    return (
        <div>
            <ChatUI messages={chatMessages} getAnswer={getAnswer} />
        </div>
    );
}

export default QueryUI;
