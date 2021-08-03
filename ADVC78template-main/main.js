var names=[
  "2. My Father (Parvez Khan)",
  "3. My Mother (Gulistan Khan)",
  "4. My Sister (Rida Khan)",
  "5. Me (Mohammed Bilal)"
  ];
var images=[
  "https://i.postimg.cc/wjMnFtMX/father.jpg",
  "https://i.postimg.cc/bw5W5zSK/mother.jpg",
  "https://i.postimg.cc/JnL6wtrd/sister.jpg",
  "https://i.postimg.cc/5ymDKL83/bro.jpg"
];
var i=0;
function family(){
  document.getElementById("one").innerHTML=names[i];
  document.getElementById("family_img").src=images[i];
  i++;
  if(i==4){
    i=0;
  }}