export interface GaugeChartProps {
    min?: number;
    max?: number;
    splitNumber?: number;
    color?: [number, string][];
    value?: number;
    className?: string;
}

export type yAxisDataSets = {
    label: string;
    data: number[] | string[];
    areaStyle?: any;
    smooth?: boolean;
}

export interface LineChartProps {
    xAxisValues?: (string | number)[];
    yAxisDataSets?: yAxisDataSets[];
    isLoading?: boolean;
}