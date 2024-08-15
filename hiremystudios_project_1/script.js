import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

const productsShowCase = [
  {
    name: "cashew",
    linkSrc: "./assets/cashew.png",
    description:
      "We offer premium cashews that stand out for their exceptional quality and flavor. Grown on our well-tended farms, our cashews are hand-harvested and meticulously processed to ensure every nut is fresh, crunchy, and full of natural goodness. Whether you're looking to add a nutritious touch to your snacks or elevate your recipes, our cashews are the perfect choice. Experience the difference with Aura Farming's superior cashews, and taste the dedication we put into every harvest.",
  },
  {
    name: "almonds",
    linkSrc: "./assets/almonds.png",
    description:
      "We offer premium almonds that stand out for their superior quality and delightful taste. Grown on our carefully nurtured farms, our almonds are hand-picked and meticulously processed to ensure each nut is fresh, crunchy, and packed with natural goodness. Whether you're looking to enrich your snacks with wholesome nutrition or enhance your culinary creations, our almonds are the perfect choice. Experience the difference with Aura Farming's exceptional almonds, and savor the dedication we invest in every harvest.",
  },
  {
    name: "hazelnuts",
    linkSrc: "./assets/hazelnuts.png",
    description:
      "Our hazelnuts are rich in flavor, boasting a buttery texture and a subtly sweet taste that enhances both sweet and savory dishes. Whether you're baking decadent desserts, making rich spreads, or enjoying them as a healthy snack, our hazelnuts provide a delightful crunch and nutritional benefits.",
  },
  {
    name: "pistachio",
    linkSrc: "./assets/pistachio.png",
    description:
      "Whether you're looking to enhance your cooking or enjoy a healthy treat, Aura Farming's pistachios deliver exceptional quality in every bite. Discover the difference our dedication makes and experience the unmatched flavor of our premium pistachios.",
  },
];

const productsImageElement = document.querySelector(".products-img");
productsImageElement.setAttribute("src", productsShowCase[0]["linkSrc"]);
productsImageElement.setAttribute("alt", productsShowCase[0]["name"]);

function capitalizeFirstLetter(string) {
  if (string.length === 0) return string; // Handle empty string
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const productsTagNameElement = document.querySelector(".products-img-tag");
productsTagNameElement.textContent = capitalizeFirstLetter(
  productsShowCase[0]["name"]
);

const productsContentElement = document.querySelector(".products-content");
productsContentElement.textContent = productsShowCase[0]["description"];

const productsButtonElement = document.querySelector(".products-button");
let firstProductShowCount = 0;
const countProductsShow = () => {
  if (firstProductShowCount + 1 <= productsShowCase.length - 1) {
    return ++firstProductShowCount;
  } else {
    firstProductShowCount = 0;
    return 0;
  }
};

const productsButtonBackgroundList = [
  "rgb(1, 61, 33)",
  "rgb(16, 108, 141)",
  "rgba(255,154,46,1)",
  "rgba(157,16,19,1)",
];
let productsButtonBackgroundListIndex = 0;
const getNextProductsButtonBackgroundListIndex = () => {
  productsButtonBackgroundListIndex =
    (productsButtonBackgroundListIndex + 1) %
    productsButtonBackgroundList.length;
  return productsButtonBackgroundListIndex;
};

const productsContainerGradientList = [
  "radial-gradient( circle, rgba(75, 143, 111, 1) 0%, rgba(53, 107, 92, 1) 87%, rgba(52, 103, 90, 1) 92%, rgba(52, 104, 79, 1) 100% )",
  "radial-gradient( circle, rgba(16, 139, 182, 1) 0%, rgba(0, 64, 87, 1) 100%, rgba(100, 64, 87, 1) 100%)",
  "radial-gradient(circle, rgba(213,199,5,1) 0%, rgba(255,195,96,1) 55%, rgba(255,154,46,1) 100%, rgba(52,50,0,1) 100%)",
  "radial-gradient(circle, rgba(185,12,12,1) 28%, rgba(157,16,19,1) 58%, rgba(122,0,14,1) 83%)",
];

const productsContainerElement = document.querySelector(".products-class");

productsContainerElement.style.background = productsContainerGradientList[0];
productsButtonElement.style.backgroundColor = productsButtonBackgroundList[0];
let productsGradientIndex = 0;
const getNextProductsGradientIndex = () => {
  productsGradientIndex =
    (productsGradientIndex + 1) % productsContainerGradientList.length;
  return productsGradientIndex;
};

productsContentElement.classList.add("text-focus-in");

productsButtonElement.addEventListener("click", (event) => {
  const currentCounterProductsShow = countProductsShow();
  productsTagNameElement.textContent = capitalizeFirstLetter(
    productsShowCase[currentCounterProductsShow]["name"]
  );
  productsButtonElement.style.backgroundColor =
    productsButtonBackgroundList[getNextProductsButtonBackgroundListIndex()];
  productsImageElement.style.animation = "none";
  productsImageElement.offsetHeight;
  productsImageElement.style.animation = `productsRotateOnChange 1s forwards`;
  productsContainerElement.offsetHeight;
  productsContainerElement.style.background =
    productsContainerGradientList[getNextProductsGradientIndex()];
  productsImageElement.setAttribute(
    "src",
    productsShowCase[currentCounterProductsShow]["linkSrc"]
  );

  productsImageElement.setAttribute(
    "alt",
    productsShowCase[currentCounterProductsShow]["name"]
  );
  productsContentElement.classList.remove("text-focus-in");
  productsContentElement.offsetHeight;
  productsContentElement.classList.add("text-focus-in");
  productsContentElement.textContent =
    productsShowCase[currentCounterProductsShow]["description"];
});

document.addEventListener("DOMContentLoaded", () => {
  const productBackgroundVideoSrc = [
    "./assets/video_1.mp4",
    "./assets/video_2.mp4",
    // "./assets/video_3.mp4",
  ];

  const backgroundVideoElement = document.querySelector("#background-video");

  let videoIndex = 0;
  const fadeDuration = 0.5;

  const setVideoSource = (index) => {
    backgroundVideoElement.src = productBackgroundVideoSrc[index];
    backgroundVideoElement.load();
    backgroundVideoElement.play();
  };

  backgroundVideoElement.classList.add("zoom-animation");

  setVideoSource(videoIndex);

  const getNextVideoIndex = () => {
    videoIndex = (videoIndex + 1) % productBackgroundVideoSrc.length;
    return videoIndex;
  };

  const fadeOut = () => {
    backgroundVideoElement.style.animation = `zoom 8s infinite alternate, fadeOut ${fadeDuration}s ease-in-out forwards`;
  };

  const fadeIn = () => {
    backgroundVideoElement.style.animation = `zoom 8s infinite alternate, fadeIn ${fadeDuration}s ease-in-out forwards`;
  };

  backgroundVideoElement.addEventListener("ended", () => {
    fadeOut();

    const nextIndex = getNextVideoIndex();

    const nextSource = productBackgroundVideoSrc[nextIndex];
    backgroundVideoElement.src = nextSource;

    setTimeout(() => {
      backgroundVideoElement.load();
      backgroundVideoElement.play();

      fadeIn();
    }, fadeDuration * 1000);
  });
});

const weeklyUpdatesList = [
  {
    updateDate: "September 11, 2024",
    updateHeading: "Preparing for Upcoming Nut Festival",
    updateContent:
      "We’re thrilled to announce our participation in the upcoming Nut Festival! Our booth will feature our finest cashews, pistachios, and hazelnuts. It’s a great opportunity for us to connect with our community and showcase the premium quality of our products. We hope to see you there!",
  },
  {
    updateDate: "September 4, 2024",
    updateHeading: "Sustainable Farming Practices in Action",
    updateContent:
      "At Aura Farming, sustainability is a core value. This week, we’ve introduced new water-saving irrigation techniques and are using organic fertilizers to reduce our environmental impact. Our commitment to sustainable practices ensures that our nuts are not only high-quality but also grown in an eco-friendly manner.",
  },
  {
    updateDate: "August 28, 2024",
    updateHeading: "Hazelnut Processing and Quality Control",
    updateContent:
      "Our hazelnuts are now in the processing phase. We’ve implemented enhanced quality control measures to ensure each nut meets our high standards. After processing, the hazelnuts will be ready for packaging and distribution. We’re committed to delivering the freshest and most flavorful hazelnuts to our customers.",
  },
  {
    updateDate: "August 21, 2024",
    updateHeading: "New Pistachio Varieties in the Orchard",
    updateContent:
      "This week, we planted new varieties of pistachios in our orchard. These varieties are known for their rich flavor and superior texture. We’re looking forward to watching them grow and will keep you updated on their progress. Our current pistachio crop continues to thrive, with excellent quality nuts being harvested.",
  },
  {
    updateDate: "August 14, 2024",
    updateHeading: "Harvesting Begins for the Cashew Season!",
    updateContent:
      "We’re excited to announce the start of our cashew harvest this week at Aura Farming. The trees are yielding a bountiful crop of high-quality cashews, and our team is busy hand-harvesting to ensure the best selection. Stay tuned for updates on the processing and quality checks!",
  },
];

const weeklyUpdatesContainerElement = document.querySelector(
  ".weekly-updates-container"
);

for (let i of weeklyUpdatesList) {
  weeklyUpdatesContainerElement.innerHTML += `
    <div class="weekly-update-element">
      <h5 class="weekly-update-element-date">${i["updateDate"]}</h5>
      <h2 class="weekly-update-element-heading">${i["updateHeading"]}</h2>
      <p class="weekly-update-element-content">${i["updateContent"]}</p>
    </div>
  `;
}

document
  .getElementById("form-submit-btn")
  .addEventListener("click", function (event) {
    event.target.classList.add("disabled");
    event.target.classList.add("loading");
    event.preventDefault();
    // Get reCAPTCHA response
    document.getElementById("error-message").classList.add("red");
    document.getElementById("error-message").classList.remove("green");
    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
      document.getElementById("error-message-content").textContent =
        "Please complete the reCAPTCHA.";
      event.target.classList.remove("disabled");
      event.target.classList.remove("loading");
      return;
    }
    const email = document.getElementById("form-email").value.trim();
    const subject = document.getElementById("form-subject").value.trim();
    const message = document.getElementById("form-message").value.trim();
    const errorMessage = document.getElementById("error-message-content");

    if (!validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      event.target.classList.remove("disabled");
      event.target.classList.remove("loading");
      return;
    } else if (subject === "") {
      errorMessage.textContent = "Please enter a subject.";
      event.target.classList.remove("disabled");
      event.target.classList.remove("loading");
      return;
    } else if (message === "") {
      errorMessage.textContent = "Please enter a message.";
      event.target.classList.remove("disabled");
      event.target.classList.remove("loading");
      return;
    }

    const firebaseConfig = {
      apiKey: "AIzaSyAwEPlFxPZf8DCx3Zj6BYavy0tg6CDn-sI",
      authDomain: "aora-90d10.firebaseapp.com",
      projectId: "aora-90d10",
      storageBucket: "aora-90d10.appspot.com",
      messagingSenderId: "656947110935",
      appId: "1:656947110935:web:37a697984965e90adfe852",
      measurementId: "G-5BREDQB3VM",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);

    const usersCollection = collection(db, "support");

    (async () => {
      try {
        await addDoc(usersCollection, {
          email: email,
          subject: subject,
          message: message,
        });
        errorMessage.textContent = "Message sent successfully!";
        document.getElementById("error-message").classList.remove("red");
        document.getElementById("error-message").classList.add("green");
      } catch (error) {
        errorMessage.textContent = "Message sent failed!";
      } finally {
        event.target.classList.remove("disabled");
        event.target.classList.remove("loading");
        return;
      }
    })();
  });

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Select the target node (the <p> element)
const targetNode = document.getElementById("error-message-content");

// Create a MutationObserver instance
const observer = new MutationObserver(function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList" || mutation.type === "characterData") {
      document.getElementById("error-message").style.display =
        document.getElementById("error-message-content").innerText.length !== 0
          ? "block"
          : "none";
      // Your callback function or code here
    }
  }
});

// Configure the observer to watch for text changes
const config = { childList: true, subtree: true, characterData: true };

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

const cursorDownArrow = document.querySelector(".down-arrow-section-img");
cursorDownArrow.addEventListener("click", (event) => {
  const homeSectionViewHeight = document
    .querySelectorAll(".home-section")[0]
    .getBoundingClientRect().height;
  const productsSectionViewHeight = document
    .querySelectorAll(".products-section")[0]
    .getBoundingClientRect().height;
  const subscriptionSectionViewHeight = document
    .querySelectorAll(".subscription-section")[0]
    .getBoundingClientRect().height;
  const contactSectionViewHeight = document
    .querySelectorAll(".contact-section")[0]
    .getBoundingClientRect().height;

  const homeSectionScrollHeight =
    document.querySelectorAll(".home-section")[0].scrollHeight;
  const productsSectionScrollHeight =
    document.querySelectorAll(".products-section")[0].scrollHeight;
  const subscriptionSectionScrollHeight = document.querySelectorAll(
    ".subscription-section"
  )[0].scrollHeight;
  const contactSectionScrollHeight =
    document.querySelectorAll(".contact-section")[0].scrollHeight;
});
