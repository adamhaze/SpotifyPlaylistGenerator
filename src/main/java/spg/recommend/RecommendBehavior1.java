package spg.recommend;

import se.michaelthelin.spotify.model_objects.specification.TrackSimplified;
import spg.playlist.Song;
import spg.spotifyAPI.SpotifyCalls;

import java.util.ArrayList;

// STRATEGY PATTERN
// abstracting away the behavior of finding a related song (based on query song)
// to add to a playlist during playlist generation

public class RecommendBehavior1 implements RecommendBehavior {
    @Override
    public ArrayList<Song> recommend(Song song) {
        ArrayList<Song> retSongs = new ArrayList<>();
        final TrackSimplified[] tracks = SpotifyCalls.getRecommendedTrack_Sync(song.id, song.artist_id);
        //TODO: check for null values if the call fails
        for(TrackSimplified track : tracks)
        {
            Song newSong = new Song(track.getName(), track.getArtists()[0].getName(), track.getId(), track.getArtists()[0].getId());
            System.out.println(newSong.name);
            retSongs.add(newSong);

        }
        return retSongs;
    }
}
