window.addEventListener("DOMContentLoaded", () => {
  setupPlaypressImage();
  updatePlaypressImage();
});

document.addEventListener("colorschemechange", (event) => {
  updatePlaypressImage();
  if (event.detail.colorScheme === "dark") {
    const toggle = document.getElementById("dark-mode-toggle");
    const info = document.createElement("p");
    info.id = "dark-mode-info";
    info.setAttribute("is", "dark-mode-info");
    info.innerHTML =
      "You’re now using up to 60% less energy to view this website";
    toggle.after(info);
  } else {
    const toggle = document.getElementById("dark-mode-info");
    if (toggle) toggle.remove();
  }
});

function setupPlaypressImage() {
  const pictures = document.querySelectorAll("picture");
  for (let picture of pictures) {
    let source = picture.querySelector("source");
    let img = picture.querySelector("img");
    img.dataset.dark = source.srcset;
    img.dataset.light = img.src;
  }
}

function updatePlaypressImage() {
  const darkModeToggle = document.querySelector("dark-mode-toggle");
  const pictures = document.querySelectorAll("picture");
  for (let picture of pictures) {
    let img = picture.querySelector("img");
    img.src = img.dataset[darkModeToggle.mode];
  }
}
