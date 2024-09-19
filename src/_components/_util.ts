
export function truncateText(str: string, limit: number) {
    if (!str) return str;
    return str.length > limit ? str.substring(0, limit-3) + '...' : str;
}