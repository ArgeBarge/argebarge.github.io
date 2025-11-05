import './App.css';
import project1 from './tower_defence.png'
import project2 from './graphics_scene.png'
import project3_1 from './app_1.png'
import project3_2 from './app_2.png'

function MyButton({className, string}) {
  return (
    <button className={className}>{string}</button>
  )
}

function ProjectContainer({imageList, title, description}) {


  return (
      <div className="ProjectContainer">
        <h2>{title}</h2>
        <div className="ProjectImage">
          {imageList.map((image) => (
            <img src={image} />
          ))}
        </div>
        
        <div className='ProjectDescription'>
          <p>{description}</p>
        </div>
      </div>
    )

}

export default function MyApp() {
  return (
    <div className="App">
      <h1>Hello, I'm James!</h1>
      <p>
        I'm a recent graduate from the University of Nottingham
      </p>
        <h1>Projects</h1>
        <ProjectContainer 
          imageList={[]}
          title={"This website"} 
          description={"You're looking at it!"}>
        </ProjectContainer>

        <ProjectContainer 
          imageList={[project1]} 
          title={"Tower defence game"} 
          description={"Created a tower defence game in C++ using a custom framework built off the SDL C library."}>
        </ProjectContainer>

        <ProjectContainer
          imageList={[project2]}
          title={"Graphics scene"}
          description={"Created a scene in OpenGL applying graphical techniques such as lighting, shadows and cameras."}
        >
        </ProjectContainer>

        <ProjectContainer
          imageList={[project3_1, project3_2]}
          title={"Music player app"}
          description={
            "Created a music app in android studio using the android SDK. It was able to read\
            audio files from a folder and allowed you to play/pause music. It also had some basic settings."
          }
        >

        </ProjectContainer>
       
    </div>
  );
}
