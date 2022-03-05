class ParallaxWithCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `


    <!-- PARALLAX 2 -->
    <div class="bg-parallax" style="background-image: url('assets/images/wildcat_canyon_sunset3.jpeg')">
      <div class="front-reg">
        <div class="container">
          <h1 class="brawler black_text">How does she do it???</h1>
          <h2 class="white_text" >Very Carefully</h2>
          <hr class="hr_primarydk" style="margin-left: 0;">
          <div class="flex-row flex-around" >

            <div class="leftie card _round opaque-pink" style="width:200px; height:200px;">
              <div class="-content">
                <h4 class="black_text">She...</h4>
                <h1 class="_alignCenter shepp primarylt_text">listens</h1>
              </div> <!--content-->
            </div> <!--card-->

            <div class="middle card  _round opaque-pink" style="width:200px; height:200px">
              <div class="-content">
                <h4 class="black_text">She...</h4>
                <h1 class="_alignCenter shepp primarylt_text">thinks</h1>
              </div> <!--content-->
            </div> <!--card-->

            <div class="rightie card  _round opaque-pink" style="width:200px; height:200px">
              <div class="-content">
                <h4 class="black_text">She...</h4>
                <h1 class="_alignCenter shepp primarylt_text">says stuff</h1>
              </div> <!--content-->
            </div> <!--card-->

          </div><!--flex-->
        </div><!--container-->
      </div><!--front-->
    </div><!--bg-parallax-->

`;
  }
}

customElements.define('parallax-with-card-component', ParallaxWithCard);
