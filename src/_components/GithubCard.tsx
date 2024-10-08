import { truncateText } from "./_util";

interface PropType {
    repoName: string,
    repoDescription: string,
    languageType: string,
    linkToRepo: string
}

function GithubCard(prop: PropType) {
    const { repoName, repoDescription, languageType, linkToRepo } = prop;

    return (
        <div className="github-card-container">
            <div className="github-card">
                <div className="github-card-title">
                    <BookIcon />
                    <a href={linkToRepo} target="_blank"><p className="github-card-name">{truncateText(repoName, 25)}</p></a>
                    <p className="github-card-tag">Public</p>
                </div>
                <div className="github-card-description">
                    <p>{truncateText(repoDescription, 140)}</p>
                </div>
                <div className="github-card-details">
                    <span className={`github-card-language-${languageType.toLowerCase()}`}></span>
                    <p>{languageType}</p>
                </div>
            </div>
        </div>
    );
}

export function GithubCardPlaceholder() {
    return (
        <div className="github-card-container-placeholder">
            {
                Array.from({ length: 3 }).map((_, index) => {
                    return (
                        <div className="placeholder" key={index}></div>
                    );
                })
            }
        </div>
    );
}

function BookIcon() {
    return (
        <svg width="17" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.45925e-06 3.46021C1.45925e-06 2.79716 0.263394 2.16128 0.732234 1.69244C1.20108 1.2236 1.83696 0.960205 2.5 0.960205L11.25 0.960205C11.4489 0.960205 11.6397 1.03922 11.7803 1.17987C11.921 1.32053 12 1.51129 12 1.71021V14.2102C12 14.4091 11.921 14.5999 11.7803 14.7405C11.6397 14.8812 11.4489 14.9602 11.25 14.9602H8.75C8.55109 14.9602 8.36032 14.8812 8.21967 14.7405C8.07902 14.5999 8 14.4091 8 14.2102C8 14.0113 8.07902 13.8205 8.21967 13.6799C8.36032 13.5392 8.55109 13.4602 8.75 13.4602H10.5V11.4602H2.5C2.30308 11.4602 2.11056 11.5184 1.94657 11.6274C1.78257 11.7364 1.65442 11.8914 1.57816 12.073C1.50191 12.2545 1.48096 12.4546 1.51793 12.648C1.5549 12.8414 1.64816 13.0196 1.786 13.1602C1.85495 13.2306 1.90935 13.3139 1.94611 13.4053C1.98287 13.4967 2.00126 13.5945 2.00024 13.693C1.99922 13.7915 1.9788 13.8889 1.94016 13.9795C1.90151 14.0701 1.84539 14.1523 1.775 14.2212C1.70461 14.2901 1.62133 14.3446 1.52992 14.3813C1.43851 14.4181 1.34075 14.4365 1.24222 14.4354C1.1437 14.4344 1.04634 14.414 0.955711 14.3754C0.865078 14.3367 0.782945 14.2806 0.714001 14.2102C0.255713 13.7431 -0.000705812 13.1146 1.45925e-06 12.4602V3.46021ZM10.5 2.46021H2.5C2.23478 2.46021 1.98043 2.56556 1.79289 2.7531C1.60536 2.94063 1.5 3.19499 1.5 3.46021V10.1682C1.81534 10.0304 2.15586 9.95958 2.5 9.96021H10.5V2.46021ZM3 13.2102C3 13.1439 3.02634 13.0803 3.07322 13.0334C3.12011 12.9865 3.1837 12.9602 3.25 12.9602H6.75C6.81631 12.9602 6.87989 12.9865 6.92678 13.0334C6.97366 13.0803 7 13.1439 7 13.2102V16.4602C7 16.5066 6.98707 16.5521 6.96266 16.5916C6.93826 16.6311 6.90333 16.663 6.8618 16.6838C6.82028 16.7046 6.77379 16.7134 6.72755 16.7092C6.68131 16.705 6.63714 16.6881 6.6 16.6602L5.15 15.5732C5.10679 15.5406 5.05413 15.523 5 15.523C4.94587 15.523 4.89321 15.5406 4.85 15.5732L3.4 16.6602C3.36286 16.6881 3.31869 16.705 3.27245 16.7092C3.22621 16.7134 3.17972 16.7046 3.1382 16.6838C3.09667 16.663 3.06175 16.6311 3.03734 16.5916C3.01293 16.5521 3 16.5066 3 16.4602V13.2102Z" fill="" />
        </svg>
    );
}

export default GithubCard;