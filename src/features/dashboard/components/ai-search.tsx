import globe from '/images/globe.png';
import React from 'react';

export default function AiSearch() {
    const recentSearches = [
        "How to handle a difficult customer?",

        "Cold email tips?", "New client tips?",
        "Best practices for follow-up emails?",

        "Handle doubting customers?",

    ];

    return (
        <div className="p-2 font-Instrument border border-gray-200 border-1 rounded-xl space-y-0.5">
            <div className="flex flex-row gap-2.5 items-center px-3 py-1">
                <StarsIcon className="stroke-primaryBlue-900 text-sm" />
                <h1 className="text-sm font-medium text-primaryBlue-700">Ask AI</h1>
            </div>
            <div className="flex flex-1 flex-col gap-4 py-2">
                <div className="flex flex-row gap-2 bg-[#f5f5f7] rounded-xl items-center px-4 py-2 md:col-span-2 border border-gray-100 border-1">
                    <img src={globe} alt="globe" className="w-8 h-8" />
                    <input type="text" placeholder="Search for anything" className="w-full bg-transparent border-none focus:outline-none text-sm" />
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                    {recentSearches.map((search, index) => (
                        <button
                            key={index}
                            className=" border border-gray-200 rounded-full px-4 py-1 text-xs text-gray-600 hover:bg-gray-200"
                        >
                            {search}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

function StarsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} width="20" height="18" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.2708 21.0262C27.2756 21.0297 27.2766 21.0292 27.2705 21.0271L27.2708 21.0262ZM27.2708 21.0262L27.279 21.0018L27.5076 21.6876L27.2708 21.0262ZM19.266 15.6065L19.2661 15.6068C19.5869 16.5689 20.1273 17.4431 20.8447 18.16C21.5619 18.8769 22.4363 19.4169 23.3985 19.7371C23.3986 19.7371 23.3987 19.7372 23.3987 19.7372L27.1938 21.0016L23.3966 22.266L23.3963 22.2661C22.4342 22.5869 21.5601 23.1273 20.8431 23.8447C20.1262 24.562 19.5862 25.4365 19.266 26.3987L18.0016 30.1938L16.7372 26.3966L16.7371 26.3964C16.4165 25.4346 15.8764 24.5606 15.1595 23.8437C14.4426 23.1267 13.5686 22.5866 12.6067 22.266L12.6065 22.266L8.80936 21.0016L12.6065 19.7372L12.6067 19.7371C13.5686 19.4165 14.4426 18.8764 15.1595 18.1595C15.8764 17.4426 16.4165 16.5686 16.7371 15.6067L16.7372 15.6065L18.0016 11.8094L19.266 15.6065ZM8.72945 21.0282L8.72964 21.0281L8.72945 21.0282ZM10.476 3.85856L10.4762 3.85916C10.8969 5.11878 11.8844 6.10627 13.144 6.52695L13.1446 6.52715L14.5691 7.00157L13.1453 7.47575C13.1453 7.47578 13.1452 7.47581 13.1451 7.47583C12.5231 7.6823 11.9579 8.03112 11.4945 8.49452C11.0311 8.95793 10.6823 9.52312 10.4758 10.1451C10.4758 10.1452 10.4758 10.1453 10.4758 10.1453L10.0016 11.5691L9.5274 10.1453C9.52737 10.1453 9.52734 10.1452 9.52732 10.1451C9.32085 9.52312 8.97203 8.95793 8.50863 8.49452C8.04524 8.03114 7.48007 7.68232 6.85812 7.47585C6.85802 7.47582 6.85792 7.47579 6.85782 7.47575L5.43406 7.00157L6.85782 6.5274C6.85792 6.52736 6.85802 6.52733 6.85812 6.52729C7.48007 6.32083 8.04524 5.97201 8.50863 5.50863C8.97201 5.04524 9.32082 4.48007 9.52729 3.85812C9.52733 3.85802 9.52736 3.85792 9.5274 3.85782L10.0016 2.43406L10.476 3.85856ZM28.019 8.92329L28.2539 9.00157L28.0184 9.08006L28.0176 9.08033C27.5667 9.23118 27.1571 9.48469 26.8209 9.82088C26.4847 10.1571 26.2312 10.5667 26.0803 11.0176L26.0801 11.0184L26.0016 11.2539L25.9231 11.0184L25.9228 11.0176C25.772 10.5667 25.5185 10.1571 25.1823 9.82088C24.8461 9.48469 24.4364 9.23118 23.9855 9.08033L23.985 9.08015L23.7504 9.00186L23.9861 8.92329C23.9863 8.92323 23.9865 8.92317 23.9867 8.92311C23.9867 8.9231 23.9867 8.92309 23.9867 8.92309C24.9029 8.61837 25.6208 7.90037 25.9253 6.98413L25.9254 6.98392L26.0024 6.75183L26.0799 6.98413C26.3844 7.90037 27.1022 8.61837 28.0184 8.92309C28.0184 8.92309 28.0184 8.9231 28.0185 8.92311C28.0187 8.92317 28.0188 8.92323 28.019 8.92329Z" stroke="#2b6cb0" strokeWidth="2" />
        </svg>
    )
}
