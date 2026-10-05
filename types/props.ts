import { PlanOptionType } from "@/constants/types";
import { ChatMessagesType } from "@/types/tools";
import { UserSelectedPlanType } from "./plan";

export interface CustomTooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    sideOffset?: number;
    className?: string;
}

export interface CustomTooltipWithSheetProps extends CustomTooltipProps {
    sheetContent: React.ReactNode;
}

export interface BlurButtonProps {
    blurInputs: boolean;
    setBlurInputs: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FormWrapperProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}

export interface CustomHoverCardProps {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    sideOffset?: number;
    className?: string;
}

export interface CustomPopoverProps {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    sideOffset?: number;
    className?: string;
}

export type AdsCardProps = {
    dataAdSlot?: string;
    dataAdFormat?: string;
    dataAdLayout?: string;
    dataFullWidthResponsive?: boolean;
    width?: string;
    height?: string;
}

export type TableSkeletonProps = {
    headers: { title: string, className?: string }[];
    rows?: number;
    mainClassName?: string;
}

export type CustomDeleteAlertDialogProps = {
    children: React.ReactNode;
    content?: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    sideOffset?: number;
    alertTitle?: string;
    alertDescription?: string;
    alertBody?: React.ReactNode;
    onDelete?: () => void;
    okText?: string;
    cancelText?: string;
    isOkTextDisabled?: boolean;
}

export type ProjectTableProps = {
    projectType?: string;
    isLoading?: boolean;
    projectList?: any;
    getProjects: ({ projectType }: { projectType: string }) => void;
}

export type onGenerateTitle = {
    primaryKeywords: string;
    targetAudience: string;
    videoDescription: string;
    category: string;
    language: string;
    videoStyle?: string;
    clickbaitLevel?: string;
    channelBranding?: string;
    callToAction?: string;
    preferredLength?: string;
    isRealtime?: boolean;
}

export type onGenerateTag = {
    primaryKeywords: string;
    targetAudience?: string;
    category: string;
    language: string;
    focusType?: string;
    competitorChannels?: string;
    includeMisspellings?: boolean;
}

export type VideoTableProps = {
    showSelectDropdown: boolean;
    toolName: string;
}

export interface ChatBotPageProps {
    chatId?: string;
}

export interface ChatBotInputProps extends ChatBotPageProps { }

export interface MessagesProps extends ChatBotPageProps {
    messages: ChatMessagesType[];
}

export type handleChatbotResponseParamsType = {
    input: string;
    chatId?: string | undefined;
}

export type UpgradeButtonWrapperProps = {
    children?: React.ReactNode
    wrapperClass?: string
    buttonClass?: string
    buttonSize?: 'sm' | 'lg' | 'icon' | 'default'
}

export type PlanUpgradeModalProps = {
    handlePlanPurchase: (userSelectedPlan: UserSelectedPlanType) => Promise<void>
    plan: PlanOptionType
}