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

export async function createMatchUp(matchUpFormData: any) {
    try {
        const matchUpDetails =  await fetch(`http://localhost:3001/api/v1/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(matchUpFormData),
        })
        return matchUpDetails.json();
    } catch (e) {
        console.error("Form submission error:", e);
        return []
    }
}

export async function fetchMatchUpDetails(matchUpResultId: number) {
    try {
        const fetchMatchUpDetails = await fetch(`http://localhost:3001/api/v1/generate/details/${matchUpResultId}`);
        if (!fetchMatchUpDetails.ok) {
            throw new Error('Failed to fetch match up details.');
            return null;
        }
        return await fetchMatchUpDetails.json();
    } catch (e) {
        console.error("Error fetching match up details:", e);
        return null;
    }
}

export async function createMatchUpArticle(matchUpResultId: number) {
    try {
        const createMatchUpArticle = await fetch(`http://localhost:3001/api/v1/generate/articles/${matchUpResultId}`);
        if (!createMatchUpArticle.ok) {
            throw new Error('Failed to create match up article.');
            return null
        }
        return await createMatchUpArticle.json();
    } catch (e) {
        console.error("Error creating match up article:", e);
        return null;
    }
}