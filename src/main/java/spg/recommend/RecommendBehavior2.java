package spg.recommend;

import se.michaelthelin.spotify.model_objects.specification.Track;
import se.michaelthelin.spotify.model_objects.specification.TrackSimplified;
import spg.playlist.Song;
import spg.spotifyAPI.SpotifyCalls;

import java.util.ArrayList;
import java.util.Objects;

// STRATEGY PATTERN
// abstracting away the behavior of finding a related song (based on query song)
// to add to a playlist during playlist generation

public class RecommendBehavior2 implements RecommendBehavior {
    @Override
    public ArrayList<Song> recommend(Song song) {
        ArrayList<Song> retSongs = new ArrayList<>();
        final Track[] tracks = SpotifyCalls.getArtistsTopTracks_Sync(song.artist_id);
        //TODO: check for null values if the call fails
        for(Track track : tracks)
        {
            if (Objects.equals(track.getName(), song.name)){ continue; }
            Song newSong = new Song(track.getName(), track.getArtists()[0].getName(), track.getId(), track.getArtists()[0].getId());
            System.out.println(newSong.name);
            retSongs.add(newSong);
            if (retSongs.size() == 5) { break; }

        }
        return retSongs;
    }
}
