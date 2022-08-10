document.addEventListener('DOMContentLoaded', () => {
    fetch ('http://localhost:3000/dogs')
    .then (resp => resp.json())
    .then( data =>{ renderDog (data) })
        
        

       function renderDog (data){
            const tableBody = document.querySelector('#table-body')
            data.forEach(dog=>{
           
               
                const dogRow = document.createElement('tr')
                const dogName = document.createElement('td')
                const dogBreed = document.createElement('td')
                const dogSex = document.createElement('td')
                const dogBtn = document.createElement('td')
                const editBtn = document.createElement('button')
                dogBtn.appendChild(editBtn)
                dogRow.append(dogName, dogBreed, dogSex, dogBtn)
                tableBody.append(dogRow)
                
                dogName.innerHTML = dog.name
                dogBreed.innerHTML = dog.breed
                dogSex.innerHTML = dog.sex
                editBtn.innerHTML = "Edit Dog"
                
                
                dogBtn.onclick =  ()=> {
                    const dogForm = document.querySelector('#dog-form')
                    dogForm.children[0].value = dog.name
                    dogForm.children[1].value = dog.breed
                    dogForm.children[2].value = dog.sex
                    
                    dogForm.children[0].addEventListener('change', ()=>{                    
                    })
                    dogForm.children[1].addEventListener('change', ()=>{
                     
                    })
                    dogForm.children[2].addEventListener('change', ()=>{
                    
                    })
                    dogForm.addEventListener( "submit" ,  (e) =>  {
                        e.preventDefault()
                    
                    fetch (('http://localhost:3000/dogs' + `/${dog.id}`) , {
                        method: 'PATCH',
                        headers: {
                            "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ 
                                name : dogForm.children[0].value,
                                breed : dogForm.children[1].value,
                                sex :dogForm.children[2].value, 
                             })
                    }) 
                   
                    .then(response => response.json())
                    .then (data=> {
                         console.log(data)
                         location.reload()
                       })
                     
                    
               }) 

                                                            
                }
                
            
                
                 

            } )



       }}




    )

