import { ReactNode } from "react";

type PrunedInputProps = Omit<JSX.IntrinsicElements['input'], 'onChange' | 'prefix'>

/**
 * @name InputProps
 * @description Props for Input Component
 */
export interface InputProps extends PrunedInputProps{
    /** 
     * @param prefix
     * @description Component to be rendered before the input element */
    prefix?: ReactNode; 

    /** 
     * @param suffix
     * @description Component to be rendered after the input element */
    suffix?: ReactNode;

    /** 
     * @param prefix
     * @description Callback function triggered when user changes the value in input element */
    onChange?: (value: string) => void;
}
