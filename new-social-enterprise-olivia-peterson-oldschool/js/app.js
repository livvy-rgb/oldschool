const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  direction: "horizontal",
});

let blocks = document.querySelectorAll(".block[section-indicator]");
scroll.on("scroll", (args) => {
  blocks.forEach((block) => {
    let blockNumber = block.getAttribute("section-indicator");

    // Get corresponding data section
    let dataSection = document.querySelector(
      `section[data-block-section='${blockNumber}']`
    );

    // If left side of the data section has entered view, switch classes from init to fixed
    if (
      dataSection.getBoundingClientRect().left <=
      block.offsetWidth * blockNumber
    ) {
      block.classList.add("fixed");
      block.classList.remove("init");
    }

    // If left side of data section has left view, switch classes from fixed to init
    else {
      block.classList.add("init");
      block.classList.remove("fixed");
    }
  });
});
