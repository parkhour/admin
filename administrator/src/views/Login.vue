<template>
    <div class="form-body">
        <div class="form-holder">
            <div class="form-content">
                <div class="form-items">
                    <div class="logo mx-auto" >
                        <a href="">
                            <img src="../assets/final_logo_ph.png" alt="" width="130px">
                        </a>
                    </div>
                    <div class="info">
                        <h3>Login yuk</h3>
                    </div>
                    <form action=""  @submit.prevent="login">
                        <input type="text" class="form-control" name="username" placeholder="E-mail Address" ref="email" required>
                        <input type="password" class="form-control" name="password" placeholder="Password" ref="password" required>
                        <div class="form-button">
                            <input class="btn" type="submit" value="Login">
                            <a href="">Forget password?</a>
                        </div>
                    </form>
                    <div class="other-links">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from "../api/axios";
export default {
  data() {
    return {
    };
  },
  created(){
     if (localStorage.access_token) {
      this.$router.push("/payment");
    }

  },
  methods: {
    login() {
        console.log(this.$refs.email.value,this.$refs.password.value)
      axios({
        method: "POST",
        url: '/admin-login',
        data: {
          email: this.$refs.email.value,
          password: this.$refs.password.value,
          
        }
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data);
          this.router.push('/payments')
          console.log(data)
        })
        .catch(err => {
         console.log(err)   
        })
        .finally((err)=>{
          this.$refs.email.value = "";
          this.$refs.password.value = "";
        })
    }
  }
};
</script>

<style scoped>
.form-body, .form-holder{
    height: 100%;
    padding-top:3%;
    margin-bottom:150px;    
}

.form-holder{
    width: 100%;
}

.form-content{
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center; 
    min-height: 100%;
    background:rgb(255,207,0);
    background-size: cover;
}

.form-items {
    display: inline-block;
    width: 100%;
    max-width: 400px;
    padding: 30px;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    background-color: #fff;
}
.form-items a{
    color : #000;
    margin-right: 20px;
}
.info p{
    margin-bottom: 0;
}
.info h3{
    font-weight: 900;
}
.logo, .info, .page-links, form{
    margin-bottom: 30px;
}
.page-links a{
    margin-right: 20px;
    color: rgba(0, 0, 0, 0.55);
    text-decoration: none;
}
.page-links a:hover{
    color: #000;
}
.page-links a.active{
    border-bottom: 1px solid;
    color: #000;
}
.form-control{
    margin-bottom: 10px;
    border: 0;
    border-bottom: 1px solid;
    border-radius: 0;
    background-color: transparent;
    color: #000;
    padding: 0;
}
.form-control:focus{
    outline: 0;
    border-color: #000;
    box-shadow: none;
    background-color: transparent!important;
}
.form-control::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.51);
}
.form-button{
    margin-top: 30px;
}
.form-button .btn{
    margin-right: 20px;
    padding-right: 30px;
    padding-left: 30px;
    background-color: #ffa610;
    border-color: #ffa610;
    border-radius: 0;
    color: #fff;
}
.other-links{
    font-size: 12px;
}
.other-links a{
    margin-right: 10px;
}

</style>
