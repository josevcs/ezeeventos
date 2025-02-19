'use client';
import TabBar from '@/components/TabBar/TabBar';
import { useState } from 'react';
import Teams from '@/components/subPages/Teams/Teams';
import Brackets from '@/components/subPages/Brackets/Brackets';
import Messages from '@/components/subPages/Messages/Messages';
import Standings from '@/components/subPages/Standings/Standings';
import Statistics from '@/components/subPages/Statistics/Statistics';

export default function Home() {
    const [index, setIndex] = useState(0);

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
                {index === 0 && <Standings />}
                {index === 1 && <Brackets />}
                {index === 2 && <Teams />}
                {index === 3 && <Statistics />}
                {index === 4 && <Messages />}
            </main>
        </div>
    );
}
