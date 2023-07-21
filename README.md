# Simple Spotify Playlist Server (GIGIH Module 2.2 - 2.3)

Create an HTTP Server to store your playlist
1. Add song to your playlist
Attributes: Title, Artists (can have multiple artist), URL (from spotify URL)
2. Play song from your playlist
3. Get List of songs from your playlist
4. Make playlist as a model
5. Track song play count in the playlist
6. Add feature to Get list of songs to be sorted by most played

## API Endpoints
| Method | Endpoint | Description
| --- | --- | --- |
| GET | `/playlist` | Get the list of all songs |
| GET | `/playlist/:id` | Get details of a song |
| GET | `/playlist/mostPlayed` | Sort tracks by play count (Descending) |
| POST | `/playlist/` | Create a new playlist |
| PUT | `/playlist/:id` | Update details of a song |
| PUT | `/playlist/:id/play` | Play a song by specific id |
| DELETE | `/playlist/:id` | Remove a specific song |

## Request Body Format
Song model :
{
    "tittle": "Where She Goes",
    "artists": ["Bad Bunny"],
    "url": "https://open.spotify.com/track/7ro0hRteUMfnOioTFI5TG1"
}
