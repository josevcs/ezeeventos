import { JSX } from 'react';
import TabButton from '@/components/TabBar/TabButton/TabButton';

interface TabBarProps {
    tabNames: string[];
    selectedIndex: number;
    onSelectTab: (index: number) => void;
}

export default function TabBar({
    tabNames,
    selectedIndex,
    onSelectTab,
}: TabBarProps) {
    const items: JSX.Element[] = [];
    for (let i = 0; i < tabNames.length; i++) {
        const element = tabNames[i];
        items.push(
            <TabButton
                text={element}
                onPress={() => {
                    onSelectTab(i);
                }}
                isSelected={selectedIndex === i}
                key={i}
            />
        );
    }
    return (
        <div className="row-start-1 flex flex-wrap items-center justify-center gap-3">
            {items}
        </div>
    );
}
