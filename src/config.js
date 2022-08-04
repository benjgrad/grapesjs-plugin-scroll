export const content = (prefix, componentType) => `
<div data-gjs-type="${componentType}" class="text-container">
  <div data-gjs-type="${componentType}" class="text-box">
    <h3 data-gjs-type="${componentType}" class="${prefix}-h3">Section Text</h3>
    <p data-gjs-type="${componentType}">Random text</p>
  </div>
  <div data-gjs-type="${componentType}" class="text-box">
    <h3 data-gjs-type="${componentType}" class="${prefix}-h3">Section Text</h3>
    <p data-gjs-type="${componentType}">Random text</p>
  </div>
  <div data-gjs-type="${componentType}" class="text-box">
    <h3 data-gjs-type="${componentType}" class="${prefix}-h3">Section Text</h3>
    <p data-gjs-type="${componentType}">Random text</p>
  </div>
</div>`

export const script = function (props) {
  const prefix = props.prefix;
  const reveal = function () {
    var reveals = document.querySelectorAll(`.${prefix}-container`);

    for (var i = 0; i < reveals.length; i++) {
      const threshold = reveals[i].getAttribute("threshold") ?? 150;
      let animationType = reveals[i].getAttribute("scrollType");
      if (!animationType) {
        animationType = "";
      }
      else {
        animationType = animationType + "_";
      }


      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = threshold;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add(`${animationType}${prefix}-active`);
      } else {
        reveals[i].classList.remove(`${animationType}${prefix}-active`);
      }
    }
  };
  window.addEventListener("scroll", reveal);
};

export const innerStyles = (prefix) => `
.${prefix}-container h1{
    font-size: 3rem;
    margin: 20px;
}
.${prefix}-container h2{
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
}
.${prefix}-container .text-container{
    display: flex;
}
.${prefix}-container .text-container .text-box{
    margin: 20px;
    padding: 20px;
    background: #00c2cb;
}
.${prefix}-container .text-container .text-box ${prefix}-h3"{
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
}

@media (max-width: 900px){
    .${prefix}-container h1{
        font-size: 2rem;
        text-align: center;
    }
    .${prefix}-container .text-container{
        flex-direction: column;
    }
}`;

export const styles = (prefix) => `
.${prefix}-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.${prefix}-container:nth-child(1){
  color: #e0ffff;
  }
.${prefix}-container:nth-child(2){
  color: #42455a;
  background: #e0ffff;
} 
.${prefix}-container:nth-child(3){
  color: #e0ffff;
}
.${prefix}-container:nth-child(4){
  color: #42455a;
  background: #e0ffff;
}
.${prefix}-container{
  margin: 100px;
}

.${prefix}-inactive{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.${prefix}-inactive.${prefix}-active{
  transform: translateY(0);
  opacity: 1;
}
`;