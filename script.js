$(document).ready(() => {
  let btnlength = document.getElementsByClassName("faq-btn").length;

  for (let i = 0; i < btnlength; i++) {
    document
      .getElementsByClassName("faq-btn")[i].addEventListener("click", () => {
        $(".faq-para").each((e, value) => {
            if(e == i){
                $(value).slideToggle();
            }
            else{
                $(value).slideUp();
            }
        })
      });
  }
});