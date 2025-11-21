This site works to show to how link a API, draw data from it and then dispay it on the screen. I hace included notes in the script to show how this is applied along with some notes on the extra fectures added. 

Link: https://samirulu87-jpg.github.io/JavaScript-API/

Script code with notes attatched 
      const URL =
      "https://iskarr.github.io/austindonovan.github.io/api/business.json"; //sets the varable to the url site to use later
      
      let cards = document.querySelector("div.cards");
      let para = document.createElement("p"); //more varables defined 
      
      fetch(URL) //grabs the url
      .then((response) => response.json())
      .then((jsObject) => {
      let business = jsObject.business; //
      
      for (let i = 0; i < business.length; i++) {
      let biz = business[i]; //grabs the business name from the url
      
            let card = document.createElement("section");
            card.classList.add("card");
      
            let name = document.createElement("h2");
            name.textContent = biz.name;
      
            let img = document.createElement("img"); 
            img.src = biz.imageurl; 
            img.alt = `${biz.name} image`; //grabs and applies the img from thh url
      
      
            let location = document.createElement("p");
            location.textContent = `Location: ${biz.address}`; //grabs and applies the location from thh url
      
            let description = document.createElement("p");
            description.textContent = biz.description; //grabs and applies the describtion from thh url
      
            card.appendChild(name);
            card.appendChild(img);
            card.appendChild(location);
            card.appendChild(description);
      
      
            cards.appendChild(card);
          }
        });
      
        //color background extra (for my own enjoyment :)//
      
       function darkenColor(hex, amount = 20) { //creates a function for the caption on the top of html to be a darker shade then the background color
          hex = hex.replace("#", "");
      
          if (hex.length === 3) {
              hex = hex.split("").map(c => c + c).join("");
          }
      
          let r = parseInt(hex.substring(0,2), 16);
          let g = parseInt(hex.substring(2,4), 16);
          let b = parseInt(hex.substring(4,6), 16);
      
          r = Math.max(0, r - amount);
          g = Math.max(0, g - amount);
          b = Math.max(0, b - amount);
      
          r = r.toString(16).padStart(2,"0");
          g = g.toString(16).padStart(2,"0");
          b = b.toString(16).padStart(2,"0");
      
          return `#${r}${g}${b}`;
      }
      
      window.onload = function () {
          const colors = ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF",
            "#F4C2C2", "#F7D8BA", "#FFF3B0", "#C1E1C1", "#C7DFF7",
            "#F5A9B8", "#F7C5CC", "#FADADD", "#FCE2CE", "#FFE6CC",
            "#FFF9C4", "#E6EE9C", "#DCEDC8", "#C8E6C9", "#B2EBF2",
            "#B3E5FC", "#BBDEFB", "#C5CAE9", "#D1C4E9", "#E1BEE7",
            "#F8BBD0", "#FFCCBC", "#D7CCC8", "#F0F4C3", "#E6E6FA",
            "#EADFD3", "#F6E2E6", "#F2D7EE", "#D1F2EB", "#D2E7D5",
            "#F4E7D3", "#F8F4E3", "#E3F2F9", "#D6EAF8", "#EBDEF0",
            "#F5EEF8", "#FDEDEC", "#FEF5E7", "#FCF3CF", "#F9EBEA",
            "#FDEBD0", "#EBF5FB", "#E8F8F5", "#EAF2F8", "#EDE7F6",
            "#FFF0F5", "#FFF5EE", "#F0FFF0", "#F0F8FF", "#F5FFFA",
            "#FFFDE7", "#ECEFF1", "#FFEBEE", "#E3FCEF"]; //sets what all the colors to be used are 
      
          // Pick a random color first
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
          const darkerColor = darkenColor(randomColor, 25);
      
          setTimeout(() => {
              document.body.style.backgroundColor = randomColor;
      
              const cards = document.querySelectorAll(".card");
          cards.forEach(card => {
              card.style.boxShadow = `0 20px 15px ${randomColor2}`; 
          }, 40);
      
              const caption = document.querySelector(".caption");
              if (caption) caption.style.backgroundColor = darkerColor;
          }, 50); //sets a transition time then applies the color 
      };
