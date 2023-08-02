import React, {RefObject} from "react";

const handleShiftEnter = (
    event: React.KeyboardEvent,
    inputRef: RefObject<HTMLTextAreaElement> | null,
    setInputValue: (value: string) => void
) => {
    if (event.key === "Enter" && event.shiftKey && inputRef?.current) {
        event.preventDefault();
        insertLineBreak(inputRef, setInputValue);
    }
}

export function insertLineBreak(
    inputRef: RefObject<HTMLTextAreaElement> | null,
    setInputValue: (value: string) => void
) {
    if (inputRef?.current) {
        const {selectionStart, selectionEnd, value} = inputRef.current;

        const newValue =
            value.substring(0, selectionStart) +
            "\n" +
            value.substring(selectionEnd);

        setInputValue(newValue);
    }
}

export default handleShiftEnter;