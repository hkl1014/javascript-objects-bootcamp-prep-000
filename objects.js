var playlist = {name:"song"}

function updatePlaylist(playlist, name, song){
  return Object.assign({},playlist,{[name]:song})
}
