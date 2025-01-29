const videoData = [
  { title: "Superman (It's Not Easy) - Five For Fighting (Videoke)", url: "https://www.youtube.com/embed/7JVN_lBbFXA?si=4jZ8yt9M26G3B-H2" },
  { title: "APT - Rose ft. Bruno Mars (Videoke)", url: "https://www.youtube.com/embed/EIkd_N19nq0?si=1LH7aL0By0qXpmI3" },
  { title: "Dancing Queen - ABBA (Videoke)", url: "https://www.youtube.com/embed/6FdUsl_aLKY?si=6tsmGMZEjeNyoKE9" },
  { title: "Steal My Girl - One Direction (Videoke)", url: "https://www.youtube.com/embed/oEWNtVs5NIQ?si=5GPC7F61DhdzOZKI" },
  { title: "Bedroom Floor - Liam Payne (Videoke)", url: "https://www.youtube.com/embed/eolIUKLQy1A?si=ybDNPYOUGQB2dnga" },
  { title: "Mundo - IV Of Spades (Videoke)", url: "https://www.youtube.com/embed/-GCOCCiRRtY?si=FaTzSykRzt3i9C9z" },
  { title: "Bluer Than Blue - Michael Johnson (Videoke)", url: "https://www.youtube.com/embed/sl-hzJtuXg8?si=0GjsXe8m3bWAQHtx" },
  { title: "happier - Olivia Rodrigo (Videoke)", url: "https://www.youtube.com/embed/a9r756j2-RM?si=fFcop6ilMSuKRf2x" },
  { title: "Ewan - Imago (Videoke)", url: "https://www.youtube.com/embed/mH_CjGw4_TM?si=8H2uxdeug0kwg_to" },
  { title: "Sundo - Imago (Videoke)", url: "https://www.youtube.com/embed/l4ft6DUeWv0?si=QVBQe1daOgq1nbH6" },
  { title: "Hanggang Kailan (Umuwi Ka Na Baby) - Orange & Lemons (Videoke)", url: "https://www.youtube.com/embed/00uhmFuC-Oo?si=cSZsMbXJHGKhTgaY" },
  { title: "Always - Bon Jovi (Videoke)", url: "https://www.youtube.com/embed/6QihvCdQLrs?si=eQplYjLXciQi_t3R" },
  { title: "Beat It - Michael Jackson (Videoke)", url: "https://www.youtube.com/embed/dTgrygbtePY?si=Aa8IBc3WloLdjI2r" },
  { title: "Billie Jean - Michael Jackson (Videoke)", url: "https://www.youtube.com/embed/2KvzXc1zczw?si=DKBVY79IbrgB5EcZ" },
  { title: "Make It Real - The Jets (Videoke)", url: "https://www.youtube.com/embed/Bs9OLBLKlsA?si=Zp8jz75qDZFKV7UV" },
  { title: "You've Got It All - The Jets (Videoke)", url: "https://www.youtube.com/embed/FvHbGyysLrU?si=L3G4wiyZ0SGS0Od_" },
  { title: "Come Inside Of My Heart - IV Of Spades (Videoke)", url: "https://www.youtube.com/embed/Bs9OLBLKlsA?si=eKWHfoJJtSxR39A1" },
  { title: "Cry - Mandy Moore (Videoke)", url: "https://www.youtube.com/embed/kWPmiCh3MA8?si=pcYC2jkms5WyidBp" },
  { title: "Christmas In Our Hearts - Jose Mari Chan, Lisa Chan (Videoke)", url: "https://www.youtube.com/embed/8dOkBb6t564?si=DinxR6ylh2WNLo9c" },
  { title: "Santa Tell Me - Ariana Grande (Videoke)", url: "https://www.youtube.com/embed/dBR6gj4ZNnM?si=ZY9ooZNDNA8gjhb5" },
  { title: "Dilaw - Maki (Videoke)", url: "https://www.youtube.com/embed/A3zEM6dkoE8?si=Oh4p7bjQkrv9yvPv" },
  { title: "Birds Of A Feather - Billie Eilish (Videoke)", url: "https://www.youtube.com/embed/1ht1oYiXauU?si=S6hU1PeyFl8m2sFu" },
  { title: "Sway - The Pussycat Dolls (Videoke)", url: "https://www.youtube.com/embed/bciIBCMqoik?si=oO7owajfFSMMTbbl" },
  { title: "Heaven Knows (This Angel Has Flown) - Orange And Lemons (Videoke)", url: "https://www.youtube.com/embed/OaO8ooZxHpo?si=QBLkmGPV5FY8Tibg" },
  { title: "Luha - Aegis (Videoke)", url: "https://www.youtube.com/embed/BigR6ZXxGmQ?si=g8fFJuI_NwVyg6_g" },
  { title: "Tingin - Cup Of Joe, Janine Tenoso (Videoke)", url: "https://www.youtube.com/embed/YArRhoaD_qM?si=fetf2hkRDPbIXV8e" },
  { title: "'Di Na Kita Mahal - Silent Sanctuary (Videoke)", url: "https://www.youtube.com/embed/gbFAcJMRAhw?si=9KdOUxqw70umgxIR" },
  { title: "In My Dreams - REO Speedwagon (Videoke)", url: "https://www.youtube.com/embed/-2vaImMcCm4?si=rHNxYybSWWjfvVeC" },
  { title: "Everytime I See You - Fra Lippo Lippi (Videoke)", url: "https://www.youtube.com/embed/zW4ticD8ZxA?si=pSU5tW9QVjJ6T78X" },
  { title: "No Ordinary Love - MYMP (Videoke)", url: "https://www.youtube.com/embed/NSr6z39MKW0?si=f2EocIWKlDK7ATZB" },
  { title: "Break Even - The Script (Videoke)", url: "https://www.youtube.com/embed/QIzDqrhfp74?si=a_7yrLMyic3qsx5b" },
  { title: "Bed Of Roses - Bon Jovi (Videoke)", url: "https://www.youtube.com/embed/aNdp7Ojvypg?si=GREIaQobMhrmFoDu" },
  { title: "Complicated - Avril Lavigne (Videoke)", url: "https://www.youtube.com/embed/iNpO041F-Mo?si=4riHxPAT6qqalV_w" },
  { title: "Sultans Of Swings - Dire Straits (Videoke)", url: "https://www.youtube.com/embed/s_qSMzl1MkQ?si=uOGM-5o1N8E2Rj7-" },
  { title: "Why - Tiggy (Videoke)", url: "https://www.youtube.com/embed/UeA9OtztIqE?si=0aBvLW0LYuIcsAx-" },
  { title: "Espresso - Sabrina Carpenter (Videoke)", url: "https://www.youtube.com/embed/w_YtIhc2cO8?si=H4DMg3RjT1M516c4" },
  { title: "Come In Out Of The Rain - Sheryn Regis (Videoke)", url: "https://www.youtube.com/embed/uDuHVI93O2o?si=SntMgv2PdOIwbWK1" },
  { title: "Di Ko Na Mapipigilan - Sexbomb Girls (Videoke)", url: "https://www.youtube.com/embed/18gv9RRXz4Y?si=HKRQOEH5-oNu8yeR" },
  { title: "Forever Single - Shaira (Videoke)", url: "https://www.youtube.com/embed/-TgSH1vy1JE?si=EbmRJ2d9Gl7yh3sX" },
  { title: "Pantropiko - BINI (Videoke)", url: "https://www.youtube.com/embed/EiCxt55xUYU?si=o0pPMQ0TJA_Hkn8V" },
  { title: "I've Been Waiting For You - Guys Next Door (Videoke)", url: "https://www.youtube.com/embed/as7CNeXnQes?si=XdWBBNsbPknSw4HZ" },
  { title: "Maybe This Time - Michael Martin Murphy (Videoke)", url: "https://www.youtube.com/embed/Rf6FzbIXjRM?si=dqDTlRhxDuylveP7" },
  { title: "Broken Hearted Me - Anne Murray (Videoke)", url: "https://www.youtube.com/embed/gAjh8sVJmJg?si=G1iqX8IUIcJY1PDs" },
  { title: "Sasakyan Kita - Gladys & The Boxers (Videoke)", url: "https://www.youtube.com/embed/-Mt3y3xaY-w?si=d-2PIXYk33nDHdNI" },
  { title: "Selos - Shaira (Videoke)", url: "https://www.youtube.com/embed/gbNz-78_cXc?si=gnpE-lYTrH14zlqU" },
  { title: "Pagsubok - Orient Pearl (Videoke)", url: "https://www.youtube.com/embed/Ykfl80h-EEE?si=0kg7GJg5FV4Zb0n3" },
  { title: "These Dreams - Heart (Videoke)", url: "https://www.youtube.com/embed/4_a0fIuKfPc?si=iiX0lqv_UGDfH43B" },
  { title: "Close To You (Down Town Mix) - Whigfield (Videoke)", url: "https://www.youtube.com/embed/sk9pgLwjIxM?si=tdbUvSG8DlEnBe9h" },
  { title: "ERE - Juan Karlos (Videoke)", url: "https://www.youtube.com/embed/7D6MNnQadHU?si=2TakgXs2-wMM5JJK" },
  { title: "Dying Inside (To Hold You) - Timmy Thomas (Videoke)", url: "https://www.youtube.com/embed/KxOsJDKdMs0?si=kqdt_uaTZtSIn6HW" },
  { title: "Tadhana - Up Dharma Down (Videoke)", url: "https://www.youtube.com/embed/HkP5xdKjSjc?si=HCT85FsRTD8ZrKsc" },
  { title: "Every Woman In The World - Air Supply (Videoke)", url: "https://www.youtube.com/embed/_9Paal0w2CQ?si=jYsy5pX5x7fLmZ1w" },
  { title: "Gikumot~Kumot - Kantin Dudg (Videoke)", url: "https://www.youtube.com/embed/3FEtP-etG04?si=2MCTWg6ONZy83z77" },
  { title: "Sige - 6cyclemind (Videoke)", url: "https://www.youtube.com/embed/KQlNfFWcUPg?si=nsBoP3tZVmMy4k9Y" },
  { title: "+63 - Spongecola ft. Yeng Constantino (Videoke)", url: "https://www.youtube.com/embed/GtiOFosavrc?si=tiovJ4-4Y0ZWaVXm" },
  { title: "Huwag Na Huwag Mong Sasabihin - Kitchie Nadal (Videoke)", url: "https://www.youtube.com/embed/HOTl1XOCyck?si=eS2-bN_AwpWS4YLs" },
  { title: "Kisapmata - Rivermaya (Videoke)", url: "https://www.youtube.com/embed/H1lJyYLBzks?si=RWBYX3_H2HjJXDQy" },
  { title: "214 - Rivermaya (Videoke)", url: "https://www.youtube.com/embed/x-w-tBiJrpQ?si=4fYPrtM6qCXocZ94" }
];

/**
 * Function to dynamically render videos into the grid
 */
function renderVideos(videoList) {
  const videoGrid = document.getElementById("video-grid");
  videoGrid.innerHTML = ""; // Clear existing videos before adding new ones

  videoList.forEach((video) => {
    const videoDiv = document.createElement("div");
    videoDiv.className = "video";
    videoDiv.innerHTML = `
      <iframe src="${video.url}" title="${video.title}" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>${video.title}</p>
    `;
    videoGrid.appendChild(videoDiv);
  });
}

/**
 * Load Initial Batch of Videos
 */
document.addEventListener("DOMContentLoaded", () => {
  renderVideos(videoData);
});
