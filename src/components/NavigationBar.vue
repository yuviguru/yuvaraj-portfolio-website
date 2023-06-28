<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <ul class="nav nav-pills" role="tablist">
      <li class="nav-item" role="presentation">
        <RouterLink to="/" class="nav-link">
          <span class="fa fa-user"></span>
          About
        </RouterLink>
      </li>
      <li class="nav-item" role="presentation">
        <RouterLink to="/career" class="nav-link">
          <span class="fa fa-id-card"></span>
          Resume
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

.page-container .nav {
  background-color: transparent;
  justify-content: space-around;
}

.page-container .nav .nav-item {
  border-radius: 8px;
  margin: 5px 7px;
  flex: 1 1 0px;
  cursor: pointer;
}

.page-container .nav .nav-link {
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

.page-container .nav .nav-item .fa {
  width: auto;
  padding-bottom: 5px;
}

.page-container .nav .router-link-active {
  background: linear-gradient(127.87deg, #ee5d6c -1.56%, #eeaf61 100%);
  color: #ffffff;
}

.page-container .nav .router-link-active .fa {
  color: #ffffff;
}

.page-container .nav .nav-link:hover {
  background: linear-gradient(127.87deg, #ee5d6c -1.56%, #eeaf61 100%);
  color: #ffffff;
}

.page-container .nav .nav-link:hover .fa {
  color: #ffffff;
  opacity: none;
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
</style>
