var playlist = {name:"song"}

function updatePlaylist(playlist, name, song){
  return Object.assign({},playlist,{[name]:song})
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName
return Object.assign({},playlist)

}
