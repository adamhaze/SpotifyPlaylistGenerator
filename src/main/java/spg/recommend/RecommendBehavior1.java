package spg.recommend;

import spg.playlist.Song;

// STRATEGY PATTERN
// abstracting away the behavior of finding a related song (based on query song)
// to add to a playlist during playlist generation

public class RecommendBehavior1 implements RecommendBehavior {
    @Override
    public Song recommend(Song song) {
        return null;
    }
}
