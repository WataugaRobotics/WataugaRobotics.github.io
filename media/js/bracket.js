var matchData = {
  teams : [
    ["Team 1", "Team 2"],
    ["Team 3", "Team 4"],
    ["Team 5", "Team 6"],
    ["Team 7", "Team 8"],
    ["Team 9", "Team 10"],
    ["Team 11", "Team 12"],
    ["Team 13", "Team 14"],
    ["Team 15", "Team 16"]
  ],
  results : [
    //first round - last 16
    [
      [4,3,'Match 1'],
      [1,4,'Match 2'],
      [1,4,'Match 3'],
      [1,4,'Match 4'],
      [6,4,'Match 5'],
      [1,4,'Match 6'],
      [1,4,'Match 7'],
      [1,4,'Match 8']
    ],
    //second round - Quarter Final
     [
      [4,3,'Match 9'],
      [1,4,'Match 10'],
      [1,4,'Match 11'],
      [1,4,'Match 12']
    ],
    //third round - Semi Final
     [
      [4,3,'Match 13'],
      [1,4,'Match 14']
    ],
    //fourth round - Final
     [
      [], //winners
      [1,4,'Match 16'] //third place
    ]
  ]
}

var matchBlankData = {
  teams : [
    ["Open Slot", "Open Slot"],
    ["Open Slot", "Team 4"],
    ["Team 5", "Team 6"],
    ["Team 7", "Team 8"],
    ["Team 9", "Team 10"],
    ["Team 11", "Team 12"],
    ["Team 13", "Team 14"],
    ["Team 15", "Team 16"]
  ],
  results : [
    //first round - last 16
    [
      [4,3,'Match 1'],
      [1,4,'Match 2'],
      [1,4,'Match 3'],
      [1,4,'Match 4'],
      [6,4,'Match 5'],
      [1,4,'Match 6'],
      [1,4,'Match 7'],
      [1,4,'Match 8']
    ],
    //second round - Quarter Final
     [
      [4,3,'Match 9'],
      [1,4,'Match 10'],
      [1,4,'Match 11'],
      [1,4,'Match 12']
    ],
    //third round - Semi Final
     [
      [4,3,'Match 13'],
      [1,4,'Match 14']
    ],
    //fourth round - Final
     [
      [], //winners
      [1,4,'Match 16'] //third place
    ]
  ]
}

function onclick(data) {
  $('#matchCallback').text("onclick(data: '" + data + "')")
}

function onhover(data, hover) {
  $('#matchCallback').text("onhover(data: '" + data + "', hover: " + hover + ")")
}

$(function() {
  $('#matches .demo').bracket({
    init: matchData,
    onMatchClick: onclick,
    onMatchHover: onhover
  })

  $('#matchesblank .demo').bracket({
    init: matchBlankData,
    onMatchClick: onclick,
    onMatchHover: onhover
  })
})