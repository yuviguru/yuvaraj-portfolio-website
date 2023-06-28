<script setup></script>

<template>
  <main>
    <div class="page-body-container">
      <div id="About" class="page-content">
        <section>
          <h3 class="page-title">About ME</h3>
          <p class="profile-summary">
            I'm a Full stack web developer from India,<br />
            Helping people/brands turn their ideas into apps and sites which makes their lives
            simple<br /><br />
            I focus on designing smooth user-interfaces which converts website visitors into your
            potential customers.<br /><br />
            When I am not working, I usually explore and play different games in various platforms / play batmitton.
            I also own a youtube channel where I try to create content when I find some time. Are you stressed/bored? come
            talk/play with me and blow off some steam.<br /><br />
            <a href="#">Hire me</a>, Lets create something awesome together!
          </p>
        </section>
        <section class="my-services">
          <h3 class="section-title">What I Offer!</h3>
          <div class="row g-4 my-services-container">
            <div class="col-md-6">
              <div class="p-3 my-services-block">
                <h4 class="block-title">Development</h4>
                <ul class="block-info">
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>Mobile App Development</li>
                  <li>CMS Development</li>
                  <li>E-commerce Development</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 my-services-block">
                <h4 class="block-title">Design</h4>
                <ul class="block-info">
                  <li>UI/UX Design</li>
                  <li>Graphic Design</li>
                  <li>Print Design (Posters/Magazines/Brouchers)</li>
                  <li>VC (branding) Design</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 my-services-block">
                <h4 class="block-title">Web Optimization</h4>
                <ul class="block-info">
                  <li>SEO</li>
                  <li>Website performance</li>
                  <li>Website hosting</li>
                  <li>Mobile optimization</li>
                  <li>Design and user experience optimization</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 my-services-block">
                <h4 class="block-title">Mentorship/Training</h4>
                <ul class="block-info">
                  <li>Solution Consultation</li>
                  <li>Career Guidance</li>
                  <li>Online Training/Lectures</li>
                  <li>Product Consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
.page-body-container .page-content .profile-summary {
  line-height: 21px;
  margin-bottom: 3rem;
}

.page-body-container .page-content .my-services-block .block-title {
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 28px;
  color: #3c3b3b;
  font-family: RobotoBold;
  margin-bottom: 0.8rem;
}

.page-body-container .page-content .my-services-block .block-info {
  font-style: normal;
  font-size: 12px;
  font-weight: 800;
  line-height: 28px;
  color: gray;
  font-family: RobotoRegular;
  letter-spacing: 1px;
  margin-bottom: 0.8rem;
}

.my-services-container .my-services-block {
  background-color: #f9f9f9;
  border-radius: 0.75rem;
  height: 100%;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  border-top: 3px solid #eeaf60;
}

</style>
