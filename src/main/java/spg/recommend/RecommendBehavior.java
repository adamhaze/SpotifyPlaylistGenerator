package spg.recommend;

import spg.playlist.Song;

import java.util.ArrayList;

// STRATEGY PATTERN
// abstracting away the behavior of finding a related song (based on query song)
// to add to a playlist during playlist generation

public interface RecommendBehavior {
    ArrayList<Song> recommend(Song song);
}

