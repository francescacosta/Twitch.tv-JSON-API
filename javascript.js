var channels = ["freecodecamp","OgamingSC2","ESL_SC2", "storbeck"];

channels.forEach(function(name) {

  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + name + "?callback=?", function(data) {
    console.log(data);
    console.log('------')

    var channelData = document.getElementById('tv-body')

    if (data.stream === null) {
      var row = `<td>no logo for now</td>`
      row += `<td>${name}</td>`
      row += `<td>Offline</td>`
    } else {
      var row = `<td><img src="${data.stream.channel.logo}" /></td>`
      row += `<td>${name}</td>`
      row += `<td>${data.stream.channel.status}</td>`
    }

    channelData.insertAdjacentHTML('beforeend', `<tr>${row}</tr>`)


    // <table>
    //   <tbody>
    //     <tr>
    //       <td>logo</td>
    //       <td>channel name</td>
    //       <td>status</td>
    //     </tr>
    //   <tbody>
    // </table>


    //console.log(data.stream)
  });


});




// 2. put all the channels into my tv container with an image and styling
// 4. Click on online, get data from JSON about which of the current channels are online
// Click on offline, get data from JSON about which of the current channels are offline //
