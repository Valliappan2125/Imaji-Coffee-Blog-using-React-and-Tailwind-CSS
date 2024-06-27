import Blog from "./Blog/Blog";
import Card from "./Blog/Card";
import Footer from "./Blog/Footer";
// import Grid from "./Blog/Grid";

function App() {
  const News = [
    {
      title: '1 - Workshop Coffee Sharing Session',
      time: '4',
      date: 'August 15, 2023'
    },
    {
      title: '2 - Workshop Coffee Sharing Session',
      time: '8',
      date: 'August 16, 2023'
    },
    {
      title: '3 - Workshop Coffee Sharing Session',
      time: '12',
      date: 'August 17, 2023'
    },
    {
      title: '4 - Workshop Coffee Sharing Session',
      time: '16',
      date: 'August 18, 2023'
    },
    {
      title: '5 - Workshop Coffee Sharing Session',
      time: '20',
      date: 'August 19, 2023'
    },
  ]
  return (
    <div className="App">
      <Blog/>
      {
        News.map((data,index)=>{
          return(
           <Card
           key={index} title={data.title} time={data.time} date={data.date}
           />
          )
        })
      }
      <Footer/>
      {/* <Grid/>
      <Grid/> */}
    </div>
  );
}

export default App;
