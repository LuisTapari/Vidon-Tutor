import React from 'react';

const IndicePage = ({ content }) => (
    <nav>
        <ul className="pl-0 m-0 list-none">
            {content
                .filter(section => section.showInIndex)
                .map((section, i) => (
                    <li key={i} className="mb-1">
                        <a
                            href={`#section-${i}`}
                            className="text-green-900 font-medium no-underline text-[0.95em] hover:underline"
                        >
                            {section.title}
                        </a>
                        {section.blocks && (
                            <ul className="pl-3 m-0">
                                {section.blocks
                                    .filter(block => block.title && block.showInIndex)
                                    .map((block, j) => (
                                        <li key={j} className="mb-0.5">
                                            <a
                                                href={`#section-${i}-block-${j}`}
                                                className="text-slate-700 text-[0.85em] no-underline hover:underline"
                                            >
                                                {block.title}
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </li>
                ))}
        </ul>
    </nav>
);
export default IndicePage;