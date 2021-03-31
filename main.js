// is-valid is-invalid 

let $btn = document.querySelector('button')
let emailStatus = false,
    passwordStatus = false
    
    
    $btn.addEventListener('click', (event)=>{
        event.preventDefault()
       let formItem = form(
            document.querySelector('#firstName').value,
            document.querySelector('#lastName').value,
            document.querySelector('#email').value,
            document.querySelector('#phone').value,
            document.querySelector('#companyName').value,
            document.querySelector('#jobTittle').value,
            document.querySelector('#street').value,
            document.querySelector('#city').value,
            document.querySelector('#password').value,
            document.querySelector('#year').value,
            document.querySelector('#confirmPassword').value,
            document.querySelector('#topic').value
        )
        formItem.confirm()
        formItem.correctPassword()
        formItem.showAlert(passwordStatus,emailStatus)
    })


function form(firstName, lastName, email, phone, companyName, jobTittle, street, city, password, year, confirmPassword, topic){
    return {
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone,
        companyName:companyName,
        jobTittle:jobTittle,
        street:street,
        city:city,
        password:password,
        year:year,
        confirmPassword:confirmPassword,
        topic:topic,
        confirm(){
            correct = ((this.email).trim()).length >= 6 && ((this.email).trim()).includes('@') && ((this.email).trim()).includes('.');
            if (correct){
                emailStatus = true
                document.querySelector('#email').classList.remove('is-invalid')
                document.querySelector('#email').classList.add('is-valid')
            } else {
                document.querySelector('#email').classList.add('is-invalid')
            }
        },
        correctPassword(){
            if (((this.password).trim()).length >=8){
                document.querySelector('#confirmPassword').classList.remove('is-invalid')
                if(this.password == this.confirmPassword){
                   passwordStatus = true
                   document.querySelector('#password').classList.add('is-valid')
                   document.querySelector('#confirmPassword').classList.remove('is-invalid')
                   document.querySelector('#confirmPassword').classList.add('is-valid')
                } else {
                    document.querySelector('#confirmPassword').classList.add('is-invalid')
                }
                document.querySelector('#password').classList.add('is-valid')
                document.querySelector('#password').classList.remove('is-invalid')
            } else {
                document.querySelector('#confirmPassword').classList.add('is-invalid')
                document.querySelector('#password').classList.add('is-invalid')
            }
        },
        showAlert(passwordStatus, emailStatus){
            if(passwordStatus == true && emailStatus == true){
                alert(`Привіт ${this.firstName} ${this.lastName}`)
            }
        } 
    }
}
