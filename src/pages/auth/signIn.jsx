import '../../styles/auth.scss'


function signUp() {
    return (
        <div class="container">
        <div class="logo">
            <img src="/logo.png" alt=""/>
            <a href="">don't have an account? sign up here</a>
        </div>
        <div class="form-control">
            <h2>sign in</h2>
            <form action="">
                <div class="form">
                    <input type="text" id="email" class="form__input" autocomplete="off" placeholder=" "/>
                    <label for="email" class="form__label">Email</label>
                </div>
                <div class="form">
                    <input type="text" id="email" class="form__input" autocomplete="off" placeholder=" "/>
                    <label for="email" class="form__label">password</label>
                </div>
                <button class="btn">sign in</button>
            </form>
        </div>
    </div>
    
    )
  }
  
  export default signUp