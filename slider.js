const slideData = [
  {
    src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    caption: "First Image"
  },
  {
    src: "https://images.ctfassets.net/hrltx12pl8hq/5ZjPpfAhn1rZWeopnHiXb/3e1b9a709297905672a0d24eac94a873/thumb_nov22_03.jpg",
    caption: "Second Image"
  },
  {
    src: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_640.jpg",
    caption: "Third Image"
  },
  {
    src: "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=",
    caption: "Fourth Image"
  },
];

const slidesContainer = document.querySelector(".splide__list");

slideData.forEach((slide) => {
  slidesContainer.innerHTML += `
    <li class="splide__slide">
        <img src="${slide.src}"
            alt="">
            <div class="img-caption">${slide.caption}</div>
    </li>
    `;
});

var splide = new Splide(".splide", {
  type: "fade",
  rewind: true,
  autoplay: true,
  interval: 2000,
  pagination: false,
});
splide.mount();
