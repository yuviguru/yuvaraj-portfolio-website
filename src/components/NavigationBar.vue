<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <ul class="nav nav-pills desktop-view" role="tablist">
      <li class="nav-item" role="presentation">
        <RouterLink to="/" class="nav-link">
          <span class="fa fa-user"></span>
          About
        </RouterLink>
      </li>
      <li class="nav-item" role="presentation">
        <RouterLink to="/career" class="nav-link">
          <span class="fa fa-suitcase"></span>
          Career
        </RouterLink>
      </li>
      <!-- <li class="nav-item" role="presentation">
        <a class="nav-link" data-bs-toggle="tab" data-bs-target="#Work">
          <span class="fa fa-briefcase"></span>
          Work
        </a>
      </li> -->
      <li class="nav-item" role="presentation">
          <RouterLink to="/contact" class="nav-link">
            <span class="fa fa-address-book"></span>
            Contact
          </RouterLink>
      </li>
    </ul>
    <nav class="navbar fixed-bottom navbar-light bg-light mobile-view">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/img/logoMobile.png" alt="" width="30" height="25">
        </a>
        <ul class="nav nav-pills" role="tablist">
          <li class="nav-item" role="presentation">
            <RouterLink to="/" class="nav-link">
              <span class="fa fa-user"></span>
              About
            </RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/career" class="nav-link">
              <span class="fa fa-suitcase"></span>
              Career
            </RouterLink>
          </li>
          <!-- <li class="nav-item" role="presentation">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#Work">
              <span class="fa fa-briefcase"></span>
              Work
            </a>
          </li> -->
          <li class="nav-item" role="presentation">
              <RouterLink to="/contact" class="nav-link">
                <span class="fa fa-address-book"></span>
                Contact
              </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 50%;
  background: linear-gradient(
    90.1deg,
    rgba(255, 255, 255, 0.46) 0.77%,
    rgba(255, 255, 255, 0.63) 102.48%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
}

.page-container .nav.desktop-view {
  background-color: transparent;
  justify-content: space-around;
}

.page-container .nav.desktop-view .nav-item {
  border-radius: 8px;
  margin: 5px 7px;
  flex: 1 1 0px;
  cursor: pointer;
}

.page-container .nav.desktop-view .nav-link {
  background: #cbcbcb;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  font-family: PoppinsRegular;
  color: #5f5f5f;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  text-align: center;
}

.page-container .nav.desktop-view .nav-item .fa {
  width: auto;
  padding-bottom: 5px;
}

.page-container .nav.desktop-view .router-link-active {
  background: linear-gradient(127.87deg, #ee5d6c -1.56%, #eeaf61 100%);
  color: #ffffff;
}

.page-container .nav.desktop-view .router-link-active .fa {
  color: #ffffff;
}

.page-container .nav.desktop-view .nav-link:hover {
  background: linear-gradient(127.87deg, #ee5d6c -1.56%, #eeaf61 100%);
  color: #ffffff;
}

.page-container .nav.desktop-view .nav-link:hover .fa {
  color: #ffffff;
  opacity: none;
}

.navbar.mobile-view {
  border-radius: 50px;
  margin: 15px;
  background: linear-gradient(180deg, rgb(238 93 108 / 55%) -1.56%, rgb(238 175 97 / 40%) 100%);
}
.navbar .navbar-brand {
  margin-left: 15px;
}
.navbar.mobile-view .nav-link {
  display: flex;
  flex-direction: row;
  font-family: PoppinsRegular;
  color: #5f5f5f;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  text-align: center;
  align-items: baseline;
}
.navbar.mobile-view .nav-item .fa {
  margin-right: 5px;
  color: #5f5f5f;
}

.navbar.mobile-view .router-link-active {
  color: #ffffff;
}

.navbar.mobile-view .router-link-active .fa {
  color: #ffffff;
  background: none;
}

.navbar.mobile-view .nav-link:hover {
  background: none;
}
.navbar.mobile-view .nav-link:hover .fa {
  background: none;
}

.fa-user,
.fa-id-card,
.fa-briefcase,
.fa-address-book,
.fa-suitcase {
  padding: 0;
  font-size: 25px !important;
  margin-bottom: 0;
  color: #5f5f5f;
}

@media (min-width: 840px) {
  .navbar.mobile-view {
    display: none;
  }
}

@media (max-width: 841px) {
  .nav.desktop-view {
    display: none;
  }
  header {
    padding: 0;
  }
}
@media (max-width: 480px) {
  .navbar.mobile-view .nav-link {
    font-size: 0;
    transition: 0.25s;
    left: 0;
  }
  .navbar.mobile-view .router-link-active {
    font-size: 13px;
    transition: 0.25s;
    left: 0;
  }
}
@media (max-width: 360px) {
  .navbar .navbar-brand {
    display: none;
  }
}
</style>
