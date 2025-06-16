const fileVersions = [
  { name: "Spektrun v1.8.1", fileId: "18HKM5PFeT3CviTpXacHnZLr974X7Es7y", size: "67,6 MB", date: "2025-06-16" },
  { name: "Spektrun v1.8.0-test", fileId: "1zjukcqLl_E33dOFfoecR48gWe5XV_Pkz", size: "1 MB", date: "2025-06-16" },
];


fileVersions.sort((a, b) => {
  const versionA = parseFloat(a.name.match(/v([\d.]+)/)[1]);
  const versionB = parseFloat(b.name.match(/v([\d.]+)/)[1]);
  return versionB - versionA;
});

const listContainer = document.getElementById("downloadList");

fileVersions.forEach((file, index) => {
  const item = document.createElement("div");
  if(index == 0){
    item.id = "last-release"
  }
  item.className = "download-item";
  item.innerHTML = `
    
    <div>
      <span><strong>${file.name}</strong></span><br>
      <small>Uploaded on: ${file.date}</small>
    </div>
    <a href="https://drive.google.com/uc?export=download&id=${file.fileId}" target="_blank" class="button">
    <i style="font-size:24px" class="fa">&#xf17b;</i>
      Download (${file.size})
    </a>
  `;
  listContainer.appendChild(item);

});
