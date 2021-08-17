printMyName = () => {
  let myName = "Mwafrika";
  let tag = document.createElement("p");
  tag.innerHTML = `My name is  ${myName}`;
  document.getElementById("myName").appendChild(tag);
  tag.style.textAlign = "center";
  tag.style.fontSize = "60px";
};

printMyName();
