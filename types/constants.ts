export interface Items {
    label: string;
    href: string;
    icon: any;
    tooltip?: string;
    badge?: string;
}

export interface SidebarItems {
    category: string;
    items: Items[];
};

export interface SelectOptionsType {
    label: string;
    value: string;
}