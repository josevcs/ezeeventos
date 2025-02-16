'use client';
import TabBar from '@/components/TabBar/TabBar';
import { useState } from 'react';
import Teams from '@/components/Teams/Teams';
import Brackets from '@/components/Brackets/Brackets';
import Messages from '@/components/Messages/Messages';
import Standings from '@/components/Standings/Standings';
import Statistics from '@/components/Statistics/Statistics';

export default function Home() {
    const [index, setIndex] = useState(0);

    const bracketsSubPage = Brackets();
    const messagesSubPage = Messages();
    const standingsSubPage = Standings();
    const statisticsSubPage = Statistics();
    const teamsSubPage = Teams();
    return (
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
                <TabBar
                    tabNames={[
                        'TABELA DO CAMPEONATO',
                        'CHAVEAMENTO',
                        'COMPETIDORES',
                        'ESTATÍSTICAS',
                        'MENSAGENS',
                    ]}
                    selectedIndex={index}
                    onSelectTab={(index: number) => {
                        setIndex(index);
                    }}
                />
                {index === 0 ? standingsSubPage : null}
                {index === 1 ? bracketsSubPage : null}
                {index === 2 ? teamsSubPage : null}
                {index === 3 ? statisticsSubPage : null}
                {index === 4 ? messagesSubPage : null}
            </main>
        </div>
    );
}
