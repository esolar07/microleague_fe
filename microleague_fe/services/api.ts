import { MatchUp, Team } from '@/types/matchup';

export async function fetchSeasons(sport: string): Promise<string[]> {
    try {
        const seasons = await fetch(`http://localhost:3001/api/v1/seasons/${sport}`);
        if (!seasons.ok) {
            throw new Error('Failed to fetch sport eras.');
        }
        const seasonsList = await seasons.json();
        return seasonsList.data;
    } catch (e) {
        console.error('Error fetching teams:', e);
        return [];
    }
}

export async function fetchTeams(sport: string, era: string): Promise<Team[]> {
    try {
        const teams = await fetch(`http://localhost:3001/api/v1/seasons/${sport}/${era}`);
        if (!teams.ok) {
            throw new Error('Failed to fetch teams.');
        }
        const teamsList = await teams.json();
        return teamsList.data;
    } catch (e) {
        console.error('Error fetching teams:', e);
        return [];
    }
}

export async function createMatchUp(matchUpFormData: Promise<MatchUp[]>) {
    try {
        return await fetch(`${process.env.MICROLEAGUE_BASE_API}/matchups`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(matchUpFormData),
        })
    } catch (e) {
        console.error("Form submission error:", e);
        return []
    }}