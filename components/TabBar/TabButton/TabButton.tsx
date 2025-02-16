interface TabButtonProps {
    text: string;
    onPress: () => void;
    isSelected: boolean;
}

export default function TabButton({
    text,
    onPress,
    isSelected,
}: TabButtonProps) {
    const defaultClassName = 'hover:text-blue-400';
    let selectedOptions = '';
    if (isSelected) {
        selectedOptions =
            'text-blue-400 underline underline-offset-4 underline';
    }
    const finalClassname = `${defaultClassName} ${selectedOptions}`;
    return (
        <button onClick={onPress} className={finalClassname}>
            {text}
        </button>
    );
}
