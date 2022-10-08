

import "./categories.scss"

function App() {

  const categories = [
    {
      title : "hats",
      imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',

    },
    {
      title : "jackets",
      imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      title : "sneakers",
      imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',

    },
    {
      title : "women's",
      imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      title : "men's",
      imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
    }
  ]
  return (
    <div className="App">
      <div className="categories">

       { categories.map(({title ,imageUrl}) =>(
          <div className="category-container"
          style={{backgroundImage: `Url(${imageUrl})`}}>
        
               <div className="category-body">
                  <h2>{title}</h2>
                  <p>shop now</p>
                  </div> 
                  </div>
        ))
      }  


 

      </div>

      
    </div>
  );
  }

export default App;
