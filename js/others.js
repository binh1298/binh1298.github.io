var othersDescription = [
  "Mary is a human Devil Hunter who first appeared in Devil May Cry 3: Dante's Awakening as both a supporting character and boss. She is the daughter of Arkham and sought to hunt him down, encountering Dante in the process. After the events, she joins Devil May Cry.",
  "Vergil was the eldest of twin sons born of the demon Sparda and human Eva. Following the death of their mother as children, Vergil and Dante go their separate ways, with Vergil rejecting his humanity and embracing his demonic heritage, contrasting his younger brother's embrace of humanity.",
  "Trish is a demon created by Mundus who strangely resembles Dante's mother, Eva. After his defeat by the hands of Dante, she later joined Devil May Cry and became a devil hunter alongside him. During her stint within the Order of the Sword, she went under the alias \"Gloria\""
]
function changeOthersDescription(des){
  var description = document.getElementById("others-description").children[0];
  if(description.id == des) return;
  description.style.opacity = "0";
  setTimeout(
    function setOpacity(){
      description.innerHTML = othersDescription[des];
      description.style.opacity = "1";
      description.id = des;
    },
    500
  );
}