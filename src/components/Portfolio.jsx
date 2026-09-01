function Board({ cells, winLine = [] }) {
    return (
        <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-1 p-4">
            {cells.map((mark, i) => (
                <div
                    key={i}
                    className={`flex items-center justify-center rounded-sm bg-ink font-display text-2xl font-semibold ${winLine.includes(i) ? "text-amber" : "text-dim"
                        }`}
                >
                    {mark}
                </div>
            ))}
        </div>
    );
}

const highlights = [
    {
        caption: "Diagonal win in 5 moves",
        span: "sm:row-span-2",
        cells: ["X", "O", "O", null, "X", "O", null, null, "X"],
        winLine: [0, 4, 8],
    },
    {
        caption: "Top row shutout",
        cells: ["O", "O", "O", "X", "X", null, null, null, null],
        winLine: [0, 1, 2],
    },
    {
        caption: "Ranked draw, both playing perfect",
        cells: ["X", "O", "X", "X", "O", "O", "O", "X", "X"],
        winLine: [],
    },
    {
        caption: "Center-out column win",
        cells: [null, "X", "O", null, "X", "O", null, "X", null],
        winLine: [1, 4, 7],
    },
    {
        caption: "Tournament final, comeback finish",
        span: "sm:col-span-2",
        cells: ["O", "X", null, "O", "X", null, "O", null, "X"],
        winLine: [0, 3, 6],
    },
];

export default function Portfolio() {
    return (
        <section id="gallery" className="border-t border-white/5 bg-surface">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
                <div className="max-w-xl">
                    <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
                        A few matches worth replaying
                    </h2>
                    <p className="mt-4 leading-relaxed text-dim">
                        Real board states pulled from recent ranked games — the amber line marks how each one
                        was won.
                    </p>
                </div>

                <div className="mt-12 grid auto-rows-[180px] gap-3 sm:grid-cols-3">
                    {highlights.map((item) => (
                        <div
                            key={item.caption}
                            className={`group relative flex flex-col justify-between overflow-hidden rounded-md border border-white/10 bg-ink ${item.span ?? ""}`}
                        >
                            <Board cells={item.cells} winLine={item.winLine} />
                            <span className="border-t border-white/5 px-4 py-3 font-display text-sm text-paper">
                                {item.caption}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}