 const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement= document.getElementById('resume-display') as HTMLDivElement;


form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();

    const NAME=(document.getElementById('name')as HTMLInputElement).value
    const lastname=(document.getElementById('lastname')as HTMLInputElement).value
    const phone=(document.getElementById('phone')as HTMLInputElement).value
    const email=(document.getElementById('email')as HTMLInputElement).value
    const Education=(document.getElementById('education')as HTMLInputElement).value
    const Experience=(document.getElementById('experience')as HTMLInputElement).value
    const SKills=(document.getElementById('skills')as HTMLInputElement).value
    const WorkExperience=(document.getElementById('work')as HTMLInputElement).value
   const resumeHTML =`
    <h1><b>resume</b></h1>
    <h3>Personal information</h3>
    <p><b>Name:</b>${NAME}</p>
    <p><b>lastname:</b>${lastname}</p>
    <p><b>email:</b>${email}</p>
    <p><b>Education:</b>${Education}</p>
    <p><b>phone:</b>${phone}</p>
    <p><b>Experience:</b>${Experience}
    <p><b>SKills:</b>${SKills}
    <p><b>WorkExperience:</b>${WorkExperience}

    `
    if(resumeDisplayElement){
       resumeDisplayElement.innerHTML =resumeHTML;
    }else{
        console.error("the resume element missing");
    }
})