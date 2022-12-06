package spg.playlist;

import spg.recommend.RecommendBehavior;

import java.util.ArrayList;

public class PlaylistBuilder {

    Playlist playlist;
    ArrayList<Song> querySongs;

    public PlaylistBuilder(ArrayList<Song> songs){

        this.querySongs = songs;
        this.playlist = new Playlist(songs, "", "");
    }

    public void addSongs(RecommendBehavior rb){
        for (Song s : this.querySongs) {
            playlist.songs.add(rb.recommend(s));
        }
    }


    public Playlist getPlaylist(){
        return this.playlist;
    }
}
