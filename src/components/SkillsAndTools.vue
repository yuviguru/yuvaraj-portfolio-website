<template>
  <section>
    <h3 class="page-title">Skills and Tools</h3>
    <div class="skills-section">
      <fieldset class="border rounded-3 p-3" v-for="group in skillGroups" :key="group.name">
        <legend class="float-none w-auto px-3">{{ group.name }}</legend>
        <div class="skills-container">
          <div class="skill-detail" v-for="skill in group.skills" :key="skill">
            <div class="outer-circle">
              <div class="circle">
                <img class="skill-icon" :src="getImagePath(skill)" />
              </div>
            </div>
            <p class="skill-title">{{ skill }}</p>
          </div>
        </div>
      </fieldset>
    </div>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      skillGroups: [
        {
          name: 'Frontend Developement',
          skills: ['HTML', 'CSS', 'JAVSCRIPT', 'REACT', 'VUE', 'ANGULAR']
        },
        {
          name: 'Backend Development',
          skills: ['PHP', 'NODE JS', 'LARAVEL', 'MySQL']
        },
        {
          name: 'Design Tools',
          skills: ['ADOBE PHOTOSHOP', 'ADOBE ILLUSTRATOR', 'ADOBE XD', 'FIGMA']
        },
        // More skill groups...
      ]
    };
  },
  methods: {
    getImagePath(name) {
      return new URL(`../assets/img/skills/${name}.png`, import.meta.url).href;
    }
  }
};
</script>
  
<style>
.page-title {
  margin-top: 35px;
}
.skills-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
}

fieldset {
  -webkit-box-shadow: 6px 7px 14px -14px rgba(0, 0, 0, 1);
  -moz-box-shadow: 6px 7px 14px -14px rgba(0, 0, 0, 1);
  box-shadow: 6px 7px 14px -14px rgba(0, 0, 0, 1);
  margin-top: 20px;
}
legend{
  font-family: RobotoThin;
  font-size: 18px;
  letter-spacing: 0.15em;
}

.outer-circle {
  border-radius: 50%;
  height: 90px;
  width: 90px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 14px -4px rgba(209, 197, 209, 1);
  -moz-box-shadow: 0px 0px 14px -4px rgba(209, 197, 209, 1);
  box-shadow: 0px 0px 14px -4px rgba(209, 197, 209, 1);


}

.circle {
  border-radius: 50%;
  height: 80px;
  width: 80px;
  background: #ffffff;
  -webkit-box-shadow: inset 0px 0px 21px -11px rgba(0, 0, 0, 1);
  -moz-box-shadow: inset 0px 0px 21px -11px rgba(0, 0, 0, 1);
  box-shadow: inset 0px 0px 21px -11px rgba(0, 0, 0, 1);
}

.skill-detail {
  text-align: center;
  max-width: 90px;
}

.skill-icon {
  width: 60%;
  height: 60%;
  margin-top: 20%;
}

p.skill-title {
  margin-top: 15px;
  font-size: 12px;
  font-family: RobotoRegular;
}

.outer-circle:hover {
  background: linear-gradient(127.87deg, #ee5d6cbf -1.56%, #eeaf618a 100%)
}

.outer-circle:hover .circle{
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  /* -webkit-box-shadow: 0px 0px 10px 8px rgba(238,175,96,0.78);
-moz-box-shadow: 0px 0px 10px 8px rgba(238,175,96,0.78);
box-shadow: 0px 0px 10px 8px rgba(238,175,96,0.78); */
}

.outer-circle:hover .skill-icon{
  width: 70%;
  height: 70%;
  margin-top: 15%;
}
</style>
  