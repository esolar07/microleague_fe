import { MatchUp, Team } from '@/types/matchup';

export async function fetchSeasons(sport: string): Promise<string[]> {
    try {
        const seasons = await fetch(`${process.env.NEXT_PUBLIC_MICROLEAGUE_BASE_API}/api/v1/seasons/${sport}`);
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
        const teams = await fetch(`${process.env.NEXT_PUBLIC_MICROLEAGUE_BASE_API}/api/v1/seasons/${sport}/${era}`);
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
        const matchUpDetails =  await fetch(`${process.env.NEXT_PUBLIC_MICROLEAGUE_BASE_API}/api/v1/generate`, {
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
        const fetchMatchUpDetails = await fetch(`${process.env.NEXT_PUBLIC_MICROLEAGUE_BASE_API}/api/v1/fetch/details/${matchUpResultId}`);
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
        const createMatchUpArticle = await fetch(`${process.env.NEXT_PUBLIC_MICROLEAGUE_BASE_API}/api/v1/generate/articles/${matchUpResultId}`);
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

export async function sendMatchUpToDiscord(matchup: any) {
  try {
    const payload = {
      content: "⚡ A new matchup has been created!",
      username: "MicroLeague Sim",
      embeds: [
        {
          title: matchup?.data?.game_info?.title ?? "Untitled Matchup",
          description: matchup?.data?.game_info?.subtitle ?? "",
          url: `${process.env.NEXT_PUBLIC_MICROLEAGUE_BASE_URL}/simulate/${matchup?.id}`,
          color: 16753920,
          fields: [
            {
              name: "Home Team",
              value: `${matchup.data.home_team.season} ${matchup.data.home_team.name}`,
            },
            {
              name: "Away Team",
              value: `${matchup.data.away_team.season} ${matchup.data.away_team.name}`,
            },
          ],
          footer: {
            text: "Powered by MicroLeague",
          },
          timestamp: new Date().toISOString(),
        },
      ],
      attachments: [],
    };
    console.log("Discord payload:", payload);
    const response = await fetch(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Discord webhook error:", response.status, err);
    } else {
      console.log("✅ Discord notification sent successfully");
    }
  } catch (e) {
    console.error("Discord notification error:", e);
  }
}


export async function submitContactMessage(formData: any, formId: string) {
  try {
    const res = await fetch(`https://submit-form.com/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      throw new Error("Failed to submit message.");
    }

    return await res.json();
  } catch (e) {
    console.error("Error submitting contact message:", e);
    return null;
  }
}