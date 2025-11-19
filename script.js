.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
  padding: 20px;
}

.card {
  background: #ffffff;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 20px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: background-color 1.5s ease, box-shadow 1.5s ease;
}

.card img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
.caption {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 font-size: 40px;
background: #ffffff;
 border: 1px solid #ddd;
 padding: 15px;
 border-radius: 8px;
 box-shadow: 0 2px 5px rgba(0,0,0,0.1);
 text-align: center;
}

body, .caption {
  transition: background-color 1.5s ease;
}

.caption {
  padding: 10px 20px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
}
