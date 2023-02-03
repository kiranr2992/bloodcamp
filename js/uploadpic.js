const imgDiv = document.querySelector('.profile-pic');

const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on Profile div 

imgDiv.addEventListener('mouseenter',function()
{
    uploadBtn.style.display = "block";
});

//if we hover out Profile div 

imgDiv.addEventListener('mouseleave',function()
{
    uploadBtn.style.display = "none";
});

//image showing functionality when choose image to upload

file.addEventListener('change',function()
{
    const choosedFile = this.files[0];

    if(choosedFile){
        const reader = new FileReader();

        reader.addEventListener('load',function()
        {
            img.setAttribute('src',reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});

