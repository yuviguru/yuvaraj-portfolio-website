<template>
    <main>
      <div class="page-body-container">
        <div id="Contact" class="page-content">
          <section>
            <h3 class="page-title">Contact</h3>
            <div class="container contact-form">
                <h3 class="contact-description-1">Do you have a gig or product ideas?</h3>
                <h3 class="contact-description-2">Lets have a virtual cup of coffee and discuss.</h3>
                <h5 class="contact-description-3 mb-5">Stay in touch by filling the form below or hit me up in any of my social accounts</h5>
                <form action="mailto:k.yuvarajguru@gmail.com" method="post" enctype="text/plain">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingName" placeholder="Name" required>
                        <label for="floatingName">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="You@example.com" required>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingName" placeholder="Subject" required>
                        <label for="floatingName">Subject</label>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" required></textarea>
                        <label for="floatingTextarea2">Message</label>
                    </div>
                    <div class="text-end mt-5">
                        <button class="btn" type="submit">Submit</button>
                    </div>
                </form>
            </div>
          </section>
        </div>
      </div>
    </main>
</template>
<style>
.contact-description-1 {
    font-size: 20px;
    font-family: RobotoRegular;
    color: #3c3b3b;
    letter-spacing: 0.10em;
    margin-bottom: 15px;
}

.contact-description-2 {
    font-size: 20px;
    font-family: RobotoBold;
    color: #3c3b3b;
    letter-spacing: 0.10em;
    margin-bottom: 15px;
}

.contact-description-3 {
    font-size: 16px;
    font-family: RobotoThin;
    color: #3c3b3b;
    letter-spacing: 0.10em;
    margin-bottom: 15px;
}

.contact-form {
    padding: 50px;
    background-color: #f9f9f9;
    border-radius: 30px;
}

.form-floating > label {
    font-family: RobotoRegular;
}
.btn{
    background: linear-gradient(127.87deg, #ee5d6c -1.56%, #eeaf61 100%);
    border: none;
    color: #ffffff;
    padding: 10px 40px;
}
.btn:hover, .btn:active, .btn:focus-visible{
    background: linear-gradient(127.87deg, #ee5d6c -1.56%, #eeaf61 100%);
    border: none;
    color: #ffffff !important;
}
</style>