var playlist = {
  artist: ""
};

// updatePlaylist - add artist:song as a keypair to the playlist
function updatePlaylist(playlist, artist, song){
  return playlist.assign({},playlist,{artist:song});
}

// removeFromPlaylist - remove artist:song as a keypair from the playlist
function removeFromPlaylist(playlist, artist){
  delete playlist.artist;
  return playlist;
}
