<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main-wrapper">
    <div class="profile-logo">
      <img src="@/assets/img/logo2.png" />
    </div>
    <div class="profile-main row g-0">
      <div class="profile-information col-12 col-lg-4 sticky-top">
        <img class="profile-image" src="@/assets/img/profile-home.jpg" />
        <h1>Yuvaraj Guru</h1>
        <p>Full stack developer</p>
        <div class="social-icons">
          <div class="social-icon-linkedin">
            <a
              href="https://www.linkedin.com/in/yuvaraj-guru/"
              class="fa fa-linkedin"
              target="_blank"
            ></a>
          </div>
          <div class="social-icon-github">
            <a href="https://github.com/yuviguru" class="fa fa-github" target="_blank"></a>
          </div>
          <div class="social-icon-youtube">
            <a
              href="https://www.youtube.com/channel/UC6TiYa9QumNo5dUAKZBl6LA"
              class="fa fa-youtube"
              target="_blank"
            ></a>
          </div>
          <div class="social-icon-facebook">
            <a
              href="https://www.facebook.com/yuviinsane"
              class="fa fa-facebook"
              target="_blank"
            ></a>
          </div>
        </div>
        <ul class="personal-details">
          <li class="personal-detail-container">
            <div class="personal-detail-icon">
              <i class="fa fa-phone"></i>
            </div>
            <div class="personal-detail-info">
              <label>Phone</label>
              <p>+91 - 8668138534</p>
            </div>
          </li>
          <hr class="mt-1 mb-2" />
          <li class="personal-detail-container">
            <div class="personal-detail-icon">
              <i class="fa fa-envelope"></i>
            </div>
            <div class="personal-detail-info">
              <label>Email</label>
              <p>k.yuvarajguru@gmail.com</p>
            </div>
          </li>
          <hr class="mt-1 mb-2" />
          <li class="personal-detail-container">
            <div class="personal-detail-icon">
              <i class="fa fa-map-pin"></i>
            </div>
            <div class="personal-detail-info">
              <label>Location</label>
              <p>Chennai, Tamilnadu, India</p>
            </div>
          </li>
          <hr class="mt-1 mb-2 ml-3 mr-3" />
          <li class="personal-detail-container">
            <div class="personal-detail-icon">
              <i class="fa fa-calendar"></i>
            </div>
            <div class="personal-detail-info">
              <label>Birthday</label>
              <p>26th May 1994</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-12 col-lg-8 page-container">
        <NavigationBar />
        <router-view v-slot="{ Component }">
          <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutLeft" mode="out-in" appear>
            <component :is="Component" :key="$route.path" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style>
/* .route-enter-from {
  opacity: 0;
  transform: translateY(100px)
}
.route-enter-active,
.route-leave-active {
  transition: all .2s ease-out
}
.route-leave-to {
  opacity: 0;
  transform: translateY(100px)
} */
.page-container {
  text-align: right;
  text-align: -webkit-right;
}

.fa:hover {
  background: linear-gradient(127.87deg, #ee5d6c -1.56%, #eeaf61 100%);
  color: #ffffff;
}

.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

.fa-github {
  background: #000000;
  color: white;
}

.fa-youtube {
  background: #bb0000;
  color: white;
}

.fa-phone {
  background: #00ff33;
  color: white;
}

.fa-envelope {
  background: #3b5998;
  color: white;
}

.fa-map-pin {
  background: #bb0000;
  color: white;
}

.fa-calendar {
  background: #f88400;
  color: white;
}

.fa-user,
.fa-id-card,
.fa-briefcase,
.fa-address-book {
  padding: 0;
  font-size: 25px !important;
  margin-bottom: 0;
  color: #5f5f5f;
}

.personal-details {
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
}

.personal-detail-icon {
  padding-top: 3px;
}

.personal-detail-info {
  flex: 1;
  text-align: left;
  margin-left: 15px;
}

.personal-detail-info p {
  margin-bottom: 5px;
}

.main-wrapper {
  background: url('@/assets/img/websiteBG.jpg');
  padding: 70px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: RobotoRegular;
  background-attachment: fixed;
}

.main-wrapper h1 {
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.2em;
  color: #3c3b3b;
  font-family: RobotoBold;
  margin-bottom: 0.8rem;
}

.profile-logo {
  margin-bottom: 200px;
}

.profile-main {
  width: 100%;
}

.profile-information {
  background-color: #ffffffc2;
  align-self: self-start;
  padding-top: calc((230px * 0.5) + 15px);
  top: 160px !important;
  border-radius: 20px;
  text-align: center;
}

.profile-information .profile-image {
  position: absolute;
  top: -25%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  /* filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25)); */
  background: #d9d9d9;
  border-radius: 20px;
  width: 230px;
  border-radius: 20px;
}

.profile-banner .profile-summary h1 {
  font-size: 40px;
  font-weight: bolder;
  text-transform: uppercase;
  padding-bottom: 5%;
}

.profile-banner .profile-summary h1::after {
  content: '';
  flex: 1 1 auto;
  border-top: 1px solid #000;
}

.profile-banner .profile-summary h1 small {
  font-size: 16px;
}

.profile-banner .profile-summary p {
  font-family: RobotoThin;
  color: gray;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.social-icons {
  display: flex;
  padding: 10px 50px;
  justify-content: space-around;
}

.personal-detail-container {
  display: flex;
}

@media (max-width: 1022px) {
  .profile-information {
    display: none;
  }
  .page-container {
    width: 100% !important;
  }
  .profile-logo {
    margin: 0;
  }
}

@media (max-width: 840px) {
  .main-wrapper {
    padding: 0;
  }
  .profile-logo {
    display: none;
  }
}
</style>
