var playlist = {
  artist: song
};

// updatePlaylist - add artist:song as a keypair to the playlist
function updatePlaylist(playlist, artist, song){
  playlist.assign({},playlist,{artist:song});
  return playlist;
}

// removeFromPlaylist - remove artist:song as a keypair from the playlist
function removeFromPlaylist(playlist, artist){
  delete platlist.artist;
  return playlist;
}
