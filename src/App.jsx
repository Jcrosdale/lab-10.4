import 

export default function App() {

  return(
    <div>

      <BlogPost />
      <Blog />
      <NavBar />

      <Routes>
        <Route path="/" element= {<NavBar />} />
        <Route path="/" element= {<Blog />} />
        <Route path="/" element= {<BlogPost />} />


      </Routes>
    </div>
  )
}