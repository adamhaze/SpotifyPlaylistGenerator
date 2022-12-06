package spg.recommend;

import spg.playlist.Song;

import java.util.ArrayList;

// STRATEGY PATTERN
// abstracting away the behavior of finding a related song (based on query song)
// to add to a playlist during playlist generation

public class RecommendBehavior2 implements RecommendBehavior {
    @Override
    public ArrayList<Song> recommend(Song song) {
        return null;
    }
}
