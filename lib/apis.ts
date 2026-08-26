import { handleChatbotResponseParamsType } from "@/types/props";
import API_URL_V1 from "@/lib/axios-config";
import { handleChatbotResponseReturnType } from "@/types/tools";

export const handleChatbotResponse = async ({
    input,
    chatId = undefined,
}: handleChatbotResponseParamsType): Promise<handleChatbotResponseReturnType> => {
    try {
        const { data } = await API_URL_V1.post(`/chat/new`, {
            message: input,
            chatId
        });
        return {
            chatId: data.chatId,
            assistantMessage: data.assistantMessage,
            aiResponse: data.aiResponse,
            success: true
        } as handleChatbotResponseReturnType;
    } catch (error) {
        console.log(error);
        return {
            chatId: "",
            assistantMessage: {},
            aiResponse: "",
            success: false
        } as handleChatbotResponseReturnType;
    }
}